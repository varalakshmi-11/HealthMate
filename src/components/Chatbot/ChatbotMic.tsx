import React, { useState, useRef } from 'react';

interface ChatbotMicProps {
    onSend: (text: string) => void;
    currentLang?: string;
}

const ChatbotMic: React.FC<ChatbotMicProps> = ({ onSend, currentLang = 'en' }) => {
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef<any>(null);

    const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
        return <p>Speech recognition not supported in this browser.</p>;
    }

    // 🌐 Language mapping
    const getLangCode = (lang: string) => {
        switch (lang) {
            case 'hi': return 'hi-IN';
            case 'te': return 'te-IN';
            case 'ta': return 'ta-IN';
            case 'kn': return 'kn-IN';
            case 'bn': return 'bn-IN';
            case 'mr': return 'mr-IN';
            case 'gu': return 'gu-IN';
            case 'ml': return 'ml-IN';
            case 'pa': return 'pa-IN';
            case 'or': return 'or-IN';
            default: return 'en-US';
        }
    };

    const startListening = () => {
        if (listening) return; // prevent duplicate start

        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = getLangCode(currentLang);

        setListening(true);

        recognition.start();

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            console.log("🎤 Heard:", transcript);
            onSend(transcript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech error:", event.error);
            setListening(false);
        };

        recognition.onend = () => {
            setListening(false);
        };
    };

    return (
        <button
            onClick={startListening}
            className="bg-teal-600 text-white px-4 py-2 rounded-r-lg ml-2"
        >
            {listening ? 'Listening...' : '🎤'}
        </button>
    );
};

export default ChatbotMic;