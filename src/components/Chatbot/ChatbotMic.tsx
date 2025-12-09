import React, { useState } from 'react';

interface ChatbotMicProps {
    onSend: (text: string) => void;
    currentLang?: string;
}

const ChatbotMic: React.FC<ChatbotMicProps> = ({ onSend, currentLang = 'en' }) => {
    const [listening, setListening] = useState(false);

    const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
        return <p>Your browser does not support speech recognition.</p>;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';

    const startListening = () => {
        setListening(true);
        recognition.start();

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const transcript = event.results[0][0].transcript;
            onSend(transcript); // send to chatbot
        };

        recognition.onend = () => setListening(false);
        recognition.onerror = () => setListening(false);
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
