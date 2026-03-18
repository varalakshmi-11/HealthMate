import { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import i18n from './utils/i18n';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ChatbotButton from './components/Chatbot/ChatbotButton';
import ChatbotInterface from './components/Chatbot/ChatbotInterface';
//import MedicationReminder from "./components/HealthTools/MedicationReminder";
export function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  //const location = useLocation();
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };
  return (
    <I18nextProvider i18n={i18n}>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
        <main className="flex-grow">
          {/* Pass toggleChatbot to child routes */}
          <Outlet context={{ toggleChatbot }} />
        </main>
        <ChatbotButton toggleChatbot={toggleChatbot} isChatbotOpen={isChatbotOpen} />
        {isChatbotOpen && <ChatbotInterface closeChat={toggleChatbot} currentLanguage={currentLanguage} />}
        <Footer />
      </div>
    </I18nextProvider>
  );
}