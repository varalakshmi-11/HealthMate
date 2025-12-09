import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIcon, ClipboardCheckIcon, PillIcon, CalculatorIcon, MapPinIcon, PhoneIcon, BookIcon, BookOpenIcon, HelpCircleIcon } from 'lucide-react';
import HealthTipCard from '../components/Common/HealthTipCard';
import HealthTipsCarousel from '../components/Common/HealthTipsCarousel';
import SymptomChecker from '../components/HealthTools/SymptomChecker';
import FirstAidTips from '../components/HealthTools/FirstAidTips';
import HealthCalculators from '../components/HealthTools/HealthCalculators';
import MedicationReminder from '../components/HealthTools/MedicationReminder';
import HospitalFinder from '../components/LocalSupport/HospitalFinder';
import EmergencyContacts from '../components/LocalSupport/EmergencyContacts';
import HealthArticles from '../components/Resources/HealthArticles';
import HealthQuizzes from '../components/Resources/HealthQuizzes';
import HealthJournal from '../components/Personal/HealthJournal';
import { useOutletContext } from 'react-router-dom';
interface HomeProps {
  toggleChatbot: () => void;
}
const HomePage: React.FC = () => {
  const { toggleChatbot } = useOutletContext<HomeContext>();
  const {
    t,
    i18n
  } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('tools');
  return <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t('home.welcome')}
        </h1>
        <p className="text-xl mb-8">{t('home.subtitle')}</p>
        <div className="max-w-xl mx-auto bg-white/20 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <input
            type="text"
            placeholder={t('home.chatbotPrompt')}
            className="border rounded px-3 py-2 w-full max-w-md"
            onFocus={toggleChatbot} // opens chatbot when clicked
          />
          <p className="text-sm opacity-80">{t('chatbot.placeholder')}</p>
        </div>
      </div>
    </section>
    {/* Health Tip Carousel */}
    <div className="container mx-auto px-4 -mt-6">
      <HealthTipsCarousel />
    </div>
    {/* Main Tabs Navigation */}
    <div className="container mx-auto px-4 mt-8 mb-4">
      <div className="flex overflow-x-auto pb-2 border-b">
        <button onClick={() => setActiveTab('tools')} className={`px-4 py-2 flex items-center whitespace-nowrap ${activeTab === 'tools' ? 'text-teal-600 border-b-2 border-teal-600 -mb-[2px]' : 'text-gray-600 hover:text-gray-800'}`}>
          <ClipboardCheckIcon className="h-5 w-5 mr-2" />
          Health Tools
        </button>
        <button onClick={() => setActiveTab('resources')} className={`px-4 py-2 flex items-center whitespace-nowrap ${activeTab === 'resources' ? 'text-teal-600 border-b-2 border-teal-600 -mb-[2px]' : 'text-gray-600 hover:text-gray-800'}`}>
          <BookOpenIcon className="h-5 w-5 mr-2" />
          Resources
        </button>
        <button onClick={() => setActiveTab('personal')} className={`px-4 py-2 flex items-center whitespace-nowrap ${activeTab === 'personal' ? 'text-teal-600 border-b-2 border-teal-600 -mb-[2px]' : 'text-gray-600 hover:text-gray-800'}`}>
          <BookIcon className="h-5 w-5 mr-2" />
          Personal
        </button>
        <button onClick={() => setActiveTab('support')} className={`px-4 py-2 flex items-center whitespace-nowrap ${activeTab === 'support' ? 'text-teal-600 border-b-2 border-teal-600 -mb-[2px]' : 'text-gray-600 hover:text-gray-800'}`}>
          <MapPinIcon className="h-5 w-5 mr-2" />
          Local Support
        </button>
      </div>
    </div>
    {/* Tab Content */}
    <section className="py-6">
      <div className="container mx-auto px-4">
        {activeTab === 'tools' && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-teal-100 text-teal-800 p-4 flex items-center">
              <ClipboardCheckIcon className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-semibold">
                {t('tools.symptomChecker')}
              </h3>
            </div>
            <div className="p-4">
              <SymptomChecker />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-100 text-red-800 p-4 flex items-center">
              <PillIcon className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-semibold">
                {t('tools.firstAid')}
              </h3>
            </div>
            <div className="p-4">
              <FirstAidTips />
            </div>
          </div>
          <HealthCalculators />
          <MedicationReminder />
        </div>}
        {activeTab === 'resources' && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HealthArticles />
          <HealthQuizzes />
        </div>}
        {activeTab === 'personal' && <div className="grid grid-cols-1 gap-6">
          <HealthJournal />
        </div>}
        {activeTab === 'support' && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-4">
              <MapPinIcon className="h-6 w-6 text-teal-600 mr-2" />
              <h2 className="text-2xl font-bold">
                {t('localSupport.findHospitals')}
              </h2>
            </div>
            <HospitalFinder />
          </div>
          <div>
            <div className="flex items-center mb-4">
              <PhoneIcon className="h-6 w-6 text-red-600 mr-2" />
              <h2 className="text-2xl font-bold">
                {t('localSupport.emergencyContacts')}
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <EmergencyContacts />
            </div>
          </div>
        </div>}
      </div>
    </section>
  </div>;
};
export default HomePage;