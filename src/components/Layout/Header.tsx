// src/components/Layout/Header.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HeartPulseIcon } from 'lucide-react';
import LanguageSwitcher from '../Common/LanguageSwitcher'; // Corrected path

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-teal-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center mb-4 md:mb-0">
          <HeartPulseIcon className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">{t('header.title')}</h1>
        </div>

        {/* Navigation & Language Switcher */}
        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
          <div className="flex space-x-6 mb-2 md:mb-0 md:mr-6">
            <Link to="/" className="hover:text-teal-200 transition-colors">
              {t('header.home')}
            </Link>
            <Link to="/tools" className="hover:text-teal-200 transition-colors">
              {t('header.tools')}
            </Link>
            <Link to="/support" className="hover:text-teal-200 transition-colors">
              {t('header.support')}
            </Link>
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
