import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SendIcon, XIcon, WifiOffIcon } from 'lucide-react';
import ChatbotMessage from './ChatbotMessage';
import { getAnswer } from '../../utils/offlineStorage';
import { v4 as uuidv4 } from 'uuid';
import ChatbotMic from './ChatbotMic'; // since both are in src/components/Chatbot/
import { speak } from '../../utils/speech'; // go up two levels to reach src/utils/
interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotInterfaceProps {
  closeChat: () => void;
}

const ChatbotInterface: React.FC<ChatbotInterfaceProps> = ({ closeChat }) => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: 1,
    text: t('chatbot.greeting'),
    isUser: false,
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [userId] = useState<string>(() => {
    const existingId = localStorage.getItem('health_companion_user_id');
    if (existingId) return existingId;
    const newId = uuidv4();
    localStorage.setItem('health_companion_user_id', newId);
    return newId;
  });

  // NEW: expanded state (true => half-page modal; false => compact floating widget)
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Update greeting on language change
  useEffect(() => {
    if (messages.length === 0 || messages[0].isUser) {
      const greetingMessage: ChatMessage = {
        id: Date.now(),
        text: t('chatbot.greeting'),
        isUser: false,
        timestamp: new Date()
      };
      setMessages([greetingMessage, ...messages]);
    } else {
      const updatedMessages = [...messages];
      updatedMessages[0] = { ...updatedMessages[0], text: t('chatbot.greeting') };
      setMessages(updatedMessages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language, t]);

  // --------------------- Fetch nearest hospitals ---------------------
  const fetchNearestHospitals = async (): Promise<string> => {
    if (!navigator.geolocation) return "Geolocation is not supported by your browser.";

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `http://localhost:5000/api/nearest-hospitals?lat=${latitude}&lng=${longitude}`
          );
          const hospitals = await res.json();

          if (!hospitals || hospitals.length === 0) {
            resolve("No nearby hospitals found.");
            return;
          }

          const messageText = hospitals
            .slice(0, 5)
            .map((h: any, i: number) => `${i + 1}. ${h.name} - ${h.vicinity || ""} ${h.rating ? `⭐${h.rating}` : ""}`)
            .join('\n\n');

          resolve(messageText);
        } catch (err) {
          console.error(err);
          resolve("Failed to fetch nearby hospitals.");
        }
      }, () => {
        resolve("Please allow location access to fetch nearby hospitals.");
      }, { enableHighAccuracy: false, timeout: 10000 });
    });
  };

  // --------------------- Send message ---------------------
  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText ?? inputValue;
    if (textToSend.trim() === '') return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: textToSend,
      isUser: true,
      timestamp: new Date()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    if (!messageText) setInputValue('');
    setIsLoading(true);

    try {
      let responseText: string;

      // Nearest hospital command
      if (/nearest hospital/i.test(userMessage.text)) {
        responseText = await fetchNearestHospitals();
      } else if (/call ambulance/i.test(userMessage.text)) {
        responseText = "📞 Dial 108 for ambulance.";
      } else if (isOnline) {
        // AI API call
        try {
          const res = await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage.text, language: i18n.language })
          });
          if (res.ok) {
            const data = await res.json();
            responseText = data.reply || "Sorry, I couldn’t process that right now.";
          } else {
            throw new Error("Bad response from API");
          }
        } catch (err) {
          console.warn("API error fallback:", err);
          const lang = i18n.language as 'en' | 'hi' | 'od' | 'te';
          responseText = getAnswer(userMessage.text, lang) || "I'm offline. Try asking about fever, cough, dengue, burns, or tips.";
        }
      } else {
        const lang = i18n.language as 'en' | 'hi' | 'od' | 'te';
        responseText = getAnswer(userMessage.text, lang) || "You are offline. Try asking about fever, cough, dengue, burns, or tips.";
      }

      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages([...updatedMessages, botMessage]);
      speak(botMessage.text, i18n.language);

    } catch (error) {
      console.error("Error:", error);
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        text: "Unexpected error. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Container classes depend on expanded state
  const outerWrapperClass = isExpanded ? 'fixed inset-0 flex items-center justify-center z-40' : 'fixed bottom-20 right-6 z-40';
  const panelClass = isExpanded
    ? 'bg-white rounded-lg shadow-xl w-1/2 h-1/2 max-w-[95vw] max-h-[95vh] flex flex-col transform transition-all duration-200'
    : 'bg-white rounded-lg shadow-xl w-80 md:w-96 max-h-[70vh] flex flex-col transform transition-all duration-200';

  return (
    <div className={outerWrapperClass} aria-live="polite">
      <div className={panelClass}>
        {/* header */}
        <div className="bg-teal-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
          <h3 className="font-medium">{t('header.title')}</h3>

          <div className="flex items-center gap-2">
            {!isOnline && (
              <div className="ml-2 flex items-center text-xs bg-yellow-500 px-2 py-0.5 rounded-full">
                <WifiOffIcon className="h-3 w-3 mr-1" /> Offline
              </div>
            )}

            {/* Expand / Collapse button */}
            <button
              onClick={() => setIsExpanded(prev => !prev)}
              aria-label={isExpanded ? 'Collapse chat' : 'Expand chat'}
              className="px-2 py-1 rounded hover:bg-white/10"
              style={{ color: 'white' }}
            >
              {isExpanded ? '⤡' : '⤢'}
            </button>

            <button onClick={closeChat} aria-label="Close chat" className="ml-2">
              <XIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map(message => (
            <div key={message.id} className="mb-4">
              <ChatbotMessage isUser={message.isUser} message={message.text} timestamp={message.timestamp} />
            </div>
          ))}
          {isLoading && <div className="ml-10 text-gray-500 text-sm">...</div>}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick command buttons */}
        <div className="flex space-x-2 px-3 mb-2">
          <button
            onClick={async () => {
              setIsLoading(true);
              const nearest = await fetchNearestHospitals();
              const botMessage: ChatMessage = {
                id: Date.now(),
                text: nearest,
                isUser: false,
                timestamp: new Date(),
              };
              setMessages(prev => [...prev, botMessage]);
              setIsLoading(false);
            }}
            className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm"
          >
            🏥 Nearest Hospitals
          </button>
          <button
            onClick={() => {
              const botMessage: ChatMessage = {
                id: Date.now(),
                text: "📞 Dial 108 for ambulance.",
                isUser: false,
                timestamp: new Date(),
              };
              setMessages(prev => [...prev, botMessage]);
            }}
            className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
          >
            🚑 Call Ambulance
          </button>
        </div>

        {/* input */}
        <div className="border-t p-3 flex items-center">
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('chatbot.placeholder')}
            className="flex-1 border rounded-l-lg px-3 py-2"
            disabled={isLoading}
          />

          {/* Send Button */}
          <button
            onClick={() => handleSendMessage()}
            disabled={isLoading || inputValue.trim() === ''}
            className="bg-teal-600 text-white px-4 py-2 rounded-r-lg"
          >
            <SendIcon className="h-5 w-5" />
          </button>

          {/* Microphone Button */}
          <ChatbotMic
            onSend={(voiceText) => handleSendMessage(voiceText)}
            currentLang={i18n.language}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
