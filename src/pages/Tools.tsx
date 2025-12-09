import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardCheckIcon, PillIcon, CalculatorIcon } from 'lucide-react';
import SymptomChecker from '../components/HealthTools/SymptomChecker';
import FirstAidTips from '../components/HealthTools/FirstAidTips';
import HealthCalculators from '../components/HealthTools/HealthCalculators';
import MedicationReminder from '../components/HealthTools/MedicationReminder';
const ToolsPage: React.FC = () => {
  const {
    t
  } = useTranslation();
  return <div className="min-h-screen bg-gray-50">
      {/* Tools Header */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('header.tools')}
          </h1>
          <p className="text-xl">
            Tools to help you monitor and improve your health
          </p>
        </div>
      </section>
      {/* Tools Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <h3 className="text-lg font-semibold">{t('tools.firstAid')}</h3>
              </div>
              <div className="p-4">
                <FirstAidTips />
              </div>
            </div>
            <HealthCalculators />
            <MedicationReminder />
          </div>
        </div>
      </section>
    </div>;
};
export default ToolsPage;