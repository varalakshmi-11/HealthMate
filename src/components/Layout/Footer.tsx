import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeartPulseIcon, InfoIcon } from 'lucide-react';
const Footer: React.FC = () => {
  const {
    t
  } = useTranslation();
  return <footer className="bg-gray-800 text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <HeartPulseIcon className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">{t('header.title')}</h3>
            </div>
            <p className="text-gray-400 max-w-md">{t('footer.disclaimer')}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">
                {t('header.tools')}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-300">
                    {t('tools.symptomChecker')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    {t('tools.firstAid')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    {t('tools.healthCalculators')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">
                {t('localSupport.emergencyContacts')}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('localSupport.ambulance')}: 108</li>
                <li>{t('localSupport.mentalHealth')}: 1800-599-0019</li>
                <li>{t('localSupport.childHelpline')}: 1098</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 {t('header.title')}. {t('footer.rights')}
          </p>
          <div className="flex items-center mt-2 md:mt-0">
            <InfoIcon className="h-4 w-4 mr-1 text-gray-500" />
            <p className="text-gray-500 text-sm">{t('footer.sources')}</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;