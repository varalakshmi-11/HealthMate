import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    const response = await
        fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "mistral",
                prompt: userMessage,
                stream: false
            })
        });
    const data = await response.json();
    res.json({ reply: data.response });
});
app.listen(5000, () => {
    console.log("ollama backend running on http://localhost:5000");
});