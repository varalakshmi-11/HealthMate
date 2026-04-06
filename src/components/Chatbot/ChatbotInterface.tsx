import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SendIcon, XIcon, WifiOffIcon } from 'lucide-react';
import ChatbotMessage from './ChatbotMessage';
import { getAnswer } from '../../utils/offlineStorage';
import { v4 as uuidv4 } from 'uuid';
import ChatbotMic from './ChatbotMic';
import { speak } from '../../utils/speech';

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotInterfaceProps {
  closeChat: () => void;
  currentLanguage: string;
}

const ChatbotInterface: React.FC<ChatbotInterfaceProps> = ({
  closeChat,
  currentLanguage
}) => {
  const { t, i18n } = useTranslation();

  /* sync language */
  useEffect(() => {
    if (currentLanguage !== i18n.language) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  /* ensure user id exists (no unused variable) */
  useEffect(() => {
    if (!localStorage.getItem('health_companion_user_id')) {
      localStorage.setItem('health_companion_user_id', uuidv4());
    }
  }, []);

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('chat_history');

    if (saved) {
      const parsed = JSON.parse(saved);

      // Convert timestamp string → Date
      return parsed.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    }

    return [
      {
        id: 1,
        text: t('chatbot.greeting'),
        isUser: false,
        timestamp: new Date(),
      },
    ];
  });
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isSpeechOn, setIsSpeechOn] = useState(false);
  const [mode, setMode] = useState<'online' | 'offline'>('online');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(scrollToBottom, [messages]);

  /* online/offline detection */
  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);

    window.addEventListener('online', online);
    window.addEventListener('offline', offline);

    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  /* update greeting on language change */
  useEffect(() => {
    setMessages(prev => {
      const updated = [...prev];
      if (updated.length > 0 && !updated[0].isUser) {
        updated[0] = { ...updated[0], text: t('chatbot.greeting') };
      }
      return updated;
    });
  }, [i18n.language, t]);

  /* fetch nearest hospitals */
  const fetchNearestHospitals = async (): Promise<string> => {
    if (!navigator.geolocation) {
      return 'Geolocation is not supported by your browser.';
    }

    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(
        async pos => {
          try {
            const res = await fetch(
              `http://localhost:5000/api/nearest-hospitals?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`
            );
            const hospitals = await res.json();

            if (!hospitals?.length) {
              resolve('No nearby hospitals found.');
              return;
            }

            resolve(
              hospitals
                .slice(0, 5)
                .map(
                  (h: any, i: number) =>
                    `${i + 1}. ${h.name} ${h.rating ? `⭐${h.rating}` : ''}`
                )
                .join('\n\n')
            );
          } catch {
            resolve('Failed to fetch nearby hospitals.');
          }
        },
        () => resolve('Please allow location access.'),
        { timeout: 10000 }
      );
    });
  };

  /* send message */
  const handleSendMessage = async (messageText?: string) => {
    const text = messageText ?? inputValue;
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    let responseText = '';

    try {
      if (/nearest hospital/i.test(text)) {
        responseText = await fetchNearestHospitals();
      } else if (/call ambulance/i.test(text)) {
        responseText = '📞 Dial 108 for ambulance.';
      } try {
        const res = await fetch('http://localhost:5000/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: text,
            language: i18n.language
          })
        });

        const data = await res.json();
        responseText = data.reply;

      } catch {
        responseText =
          getAnswer(text) ||
          "⚠️ Server not reachable. Try again.";
      }

      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      if (isSpeechOn) {
        speak(responseText, i18n.language);
      }
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

  const outerWrapperClass = isExpanded
    ? 'fixed inset-0 flex items-center justify-center z-40'
    : 'fixed bottom-20 right-6 z-40';

  const panelClass = isExpanded
    ? 'bg-white rounded-lg shadow-xl w-1/2 h-1/2 flex flex-col'
    : 'bg-white rounded-lg shadow-xl w-80 md:w-96 max-h-[70vh] flex flex-col';

  return (
    <div className={outerWrapperClass}>
      <div className={panelClass}>
        <div className="bg-teal-600 text-white px-4 py-3 flex justify-between items-center">
          <h3>{t('header.title')}</h3>
          <div className="flex gap-2">
            {!isOnline && (
              <span className="text-xs bg-yellow-500 px-2 rounded">
                <WifiOffIcon className="inline h-3 w-3 mr-1" />
                Offline
              </span>
            )}
            <button onClick={() => setIsSpeechOn(prev => !prev)}>
              {isSpeechOn ? '🔊' : '🔇'}
            </button>
            <button onClick={() => setIsExpanded(p => !p)}>
              {isExpanded ? '⤡' : '⤢'}
            </button>
            <button onClick={closeChat}>
              <XIcon />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {messages.map(m => (
            <ChatbotMessage
              key={m.id}
              isUser={m.isUser}
              message={m.text}
              timestamp={m.timestamp}
            />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-2">
              <div className="bg-gray-200 px-4 py-2 rounded-2xl rounded-bl-sm text-sm text-gray-600">
                🤖 Typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t p-3 flex items-center">
          <input
            ref={inputRef}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border px-3 py-2"
            placeholder={t('chatbot.placeholder')}
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isLoading}
            className="bg-teal-600 text-white px-4"
          >
            <SendIcon />
          </button>
          {isOnline && mode === "online" ? (
            <ChatbotMic
              onSend={handleSendMessage}
              currentLang={i18n.language}
            />
          ) : (
            <button
              onClick={() =>
                alert("🎤 Voice input requires internet connection")
              }
              className="bg-gray-400 text-white px-4 py-2 rounded-r-lg ml-2 cursor-not-allowed"
            >
              🎤
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
