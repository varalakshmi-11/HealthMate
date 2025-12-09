import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { firstAidTips } from '../../utils/mockData';
import { BandageIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
const FirstAidTips: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const [expandedTip, setExpandedTip] = useState<number | null>(null);
  const currentLanguage = i18n.language;
  const toggleTip = (id: number) => {
    if (expandedTip === id) {
      setExpandedTip(null);
    } else {
      setExpandedTip(id);
    }
  };
  const formattedTips = firstAidTips.map(tip => {
    return {
      id: tip.id,
      title: currentLanguage === 'od' ? tip.title_od : currentLanguage === 'hi' ? tip.title_hi : tip.title,
      steps: currentLanguage === 'od' ? tip.steps_od : currentLanguage === 'hi' ? tip.steps_hi : tip.steps
    };
  });
  return <div>
      <p className="text-sm text-gray-500 mb-4">
        {t('symptomChecker.disclaimer')}
      </p>
      <div className="space-y-2">
        {formattedTips.map(tip => <div key={tip.id} className="border rounded-md overflow-hidden">
            <button onClick={() => toggleTip(tip.id)} className="w-full flex justify-between items-center p-3 bg-red-50 text-red-800 hover:bg-red-100">
              <div className="flex items-center">
                <BandageIcon className="h-4 w-4 mr-2" />
                <span className="font-medium">{tip.title}</span>
              </div>
              {expandedTip === tip.id ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
            </button>
            {expandedTip === tip.id && <div className="p-3 bg-white">
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                  {tip.steps.map((step, index) => <li key={index}>{step}</li>)}
                </ol>
              </div>}
          </div>)}
      </div>
    </div>;
};
export default FirstAidTips;