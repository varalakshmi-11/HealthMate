import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircleIcon, XIcon } from 'lucide-react';
interface ChatbotButtonProps {
  toggleChatbot: () => void;
  isChatbotOpen: boolean;
}
const ChatbotButton: React.FC<ChatbotButtonProps> = ({
  toggleChatbot,
  isChatbotOpen
}) => {
  const {
    t
  } = useTranslation();
  return <button onClick={toggleChatbot} className="fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors z-50" aria-label={isChatbotOpen ? 'Close chatbot' : 'Open chatbot'}>
      {isChatbotOpen ? <XIcon className="h-6 w-6" /> : <MessageCircleIcon className="h-6 w-6" />}
    </button>;
};
export default ChatbotButton;