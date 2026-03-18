// src/components/LanguageSwitcher.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeIcon, ChevronDownIcon } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
}

const languageList = [
  { code: 'hi', labelNative: 'हिन्दी', labelEn: 'Hindi' },
  { code: 'te', labelNative: 'తెలుగు', labelEn: 'Telugu' },
  { code: 'od', labelNative: 'ଓଡ଼ିଆ', labelEn: 'Odia' },
  { code: 'ta', labelNative: 'தமிழ்', labelEn: 'Tamil' },
  { code: 'kn', labelNative: 'ಕನ್ನಡ', labelEn: 'Kannada' },
  { code: 'bn', labelNative: 'বাংলা', labelEn: 'Bengali' },
  { code: 'mr', labelNative: 'मराठी', labelEn: 'Marathi' },
  { code: 'gu', labelNative: 'ગુજરાતી', labelEn: 'Gujarati' },
  { code: 'ml', labelNative: 'മലയാളം', labelEn: 'Malayalam' },
  { code: 'pa', labelNative: 'ਪੰਜਾਬੀ', labelEn: 'Punjabi' },
  { code: 'en', labelNative: 'English', labelEn: 'English' },
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  changeLanguage,
}) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const current = currentLanguage || i18n.language || 'en';

  const onChangeLanguage = (code: string) => {
    i18n.changeLanguage(code);      // i18n update
    changeLanguage(code);           // App state update
    try {
      localStorage.setItem('hc_lang', code);
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-sm">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 bg-teal-700 text-white rounded-full px-3 py-1 hover:bg-teal-800 transition-colors"
        aria-expanded={open}
      >
        <GlobeIcon className="h-4 w-4" />
        <span>
          {languageList.find(l => l.code === current)?.labelNative || 'Language'}
        </span>
        <ChevronDownIcon
          className={`h-4 w-4 ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''
            }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-50">
          {languageList.map(l => (
            <button
              key={l.code}
              onClick={() => onChangeLanguage(l.code)}
              className={`w-full text-left px-3 py-2 hover:bg-gray-100 ${current === l.code ? 'bg-gray-100 font-semibold' : ''
                }`}
            >
              <div className="flex justify-between">
                <span>{l.labelNative}</span>
                <span className="text-xs text-gray-500">
                  ({l.labelEn})
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
