// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// ----------------- Translation Helper -----------------
const GOOGLE_TRANSLATE_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;

async function translateText(text, targetLang) {
    if (!GOOGLE_TRANSLATE_KEY || !targetLang || targetLang === 'en') return text;
    try {
        const response = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_TRANSLATE_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ q: text, target: targetLang }),
            }
        );
        const data = await response.json();
        return data.data?.translations?.[0]?.translatedText || text;
    } catch (err) {
        console.error("Translation error:", err);
        return text;
    }
}

// ----------------- Chatbot API -----------------
app.post('/api/chat', async (req, res) => {
    const { message, language = 'en', mode = 'online' } = req.body;
    const OPENAI_KEY = process.env.OPENAI_API_KEY;

    let reply = "";
    let source = mode;

    try {
        // 🌐 ONLINE MODE
        if (mode === "online" && OPENAI_KEY) {
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${OPENAI_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        model: "gpt-4o-mini",
                        messages: [
                            {
                                role: "system",
                                content: `You are a multilingual healthcare assistant.
Only answer health-related questions.
Always reply in ${language}.`
                            },
                            { role: "user", content: message }
                        ],
                    }),
                });

                const data = await response.json();

                if (!data.error) {
                    reply = data.choices?.[0]?.message?.content || "";
                } else {
                    console.log("OpenAI error:", data.error.message);
                }

            } catch (err) {
                console.log("Online failed, switching to offline...");
            }
        }

        // 🖥 OFFLINE MODE (OLLAMA - MISTRAL)
        if (!reply || mode === "offline") {
            console.log("🤖 Using offline (Mistral)");

            try {
                const ollamaResponse = await fetch("http://127.0.0.1:11434/api/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        model: "mistral",
                        prompt: `You are a healthcare assistant.
Only health-related answers.
Answer in ${language}.
User: ${message}`,
                        stream: false
                    }),
                });

                const data = await ollamaResponse.json();
                reply = data.response || "⚠️ No response from offline model.";
                source = "offline";

            } catch (err) {
                console.error("Ollama error:", err);
                reply = "⚠️ Offline chatbot not available. Please start Ollama.";
                source = "error";
            }
        }

        // 🌐 TRANSLATION (FINAL STEP)
        reply = await translateText(reply, language);

        res.json({ reply, source });

    } catch (error) {
        console.error("Chatbot error:", error);
        res.status(500).json({ reply: "Error generating response.", source: "error" });
    }
});

// ----------------- Nearest Hospitals API -----------------
app.get('/api/nearest-hospitals', async (req, res) => {
    const { lat, lng, lang } = req.query;
    const GOOGLE_KEY = process.env.GOOGLE_MAPS_API_KEY;

    if (!lat || !lng) return res.status(400).json({ error: "Latitude and longitude required." });
    if (!GOOGLE_KEY) return res.status(500).json({ error: "Missing Google Maps API key." });

    try {
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&rankby=distance&type=hospital&key=${GOOGLE_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        const hospitals = (data.results || []).map(h => ({
            place_id: h.place_id,
            name: h.name,
            vicinity: h.vicinity,
            rating: h.rating,
            lat: h.geometry?.location?.lat,
            lng: h.geometry?.location?.lng,
        }));

        const translatedHospitals = await Promise.all(
            hospitals.map(async h => ({
                ...h,
                name: await translateText(h.name, lang),
                vicinity: await translateText(h.vicinity, lang),
            }))
        );

        res.json(translatedHospitals.slice(0, 20));
    } catch (error) {
        console.error("Hospitals API error:", error);
        res.status(500).json({ error: "Failed to fetch nearby hospitals." });
    }
});

// ----------------- Translation API Route -----------------
app.post('/api/translate', async (req, res) => {
    const { text, target } = req.body;
    if (!text || !target) return res.status(400).json({ error: 'Missing text or target language.' });

    try {
        const translatedText = await translateText(text, target);
        res.json({ translatedText });
    } catch (error) {
        console.error("Translation API error:", error);
        res.status(500).json({ error: "Translation failed" });
    }
});

// ----------------- Start Server -----------------
app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));