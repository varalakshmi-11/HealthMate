import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LightbulbIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { healthTips } from '../../utils/mockData';
const HealthTipsCarousel: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const currentLanguage = i18n.language;
  // Auto-rotate tips every 7 seconds
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentTipIndex(prevIndex => (prevIndex + 1) % healthTips.length);
      }, 7000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying]);
  // Pause auto-rotation when user interacts with carousel
  const handleManualNavigation = (index: number) => {
    setCurrentTipIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-rotation after 15 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 15000);
  };
  const nextTip = () => {
    handleManualNavigation((currentTipIndex + 1) % healthTips.length);
  };
  const prevTip = () => {
    handleManualNavigation((currentTipIndex - 1 + healthTips.length) % healthTips.length);
  };
  const currentTip = healthTips[currentTipIndex];
  const tipText = currentLanguage === 'od' ? currentTip.tip_od : currentLanguage === 'hi' ? currentTip.tip_hi : currentTip.tip;
  return <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <LightbulbIcon className="h-5 w-5 text-yellow-500 mr-2" />
          <h3 className="font-medium text-yellow-800">
            {t('tools.dailyTips')}
          </h3>
        </div>
        <div className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
          {currentTip.category}
        </div>
      </div>
      <div className="relative min-h-[80px] flex items-center">
        <button onClick={prevTip} className="absolute left-0 p-1 rounded-full bg-white/80 text-yellow-600 hover:bg-white hover:text-yellow-700" aria-label="Previous tip">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="mx-8 text-center">
          <p className="text-yellow-800">{tipText}</p>
        </div>
        <button onClick={nextTip} className="absolute right-0 p-1 rounded-full bg-white/80 text-yellow-600 hover:bg-white hover:text-yellow-700" aria-label="Next tip">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex justify-center mt-3 space-x-1">
        {healthTips.map((_, index) => <button key={index} onClick={() => handleManualNavigation(index)} className={`h-2 rounded-full ${index === currentTipIndex ? 'w-4 bg-yellow-500' : 'w-2 bg-yellow-300'}`} aria-label={`Go to tip ${index + 1}`} />)}
      </div>
    </div>;
};
export default HealthTipsCarousel;