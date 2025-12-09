import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CalculatorIcon } from 'lucide-react';
import BMICalculator from './BMICalculator';
import CalorieCalculator from './CalorieCalculator';
import HydrationCalculator from './HydrationCalculator';
const HealthCalculators: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [activeCalculator, setActiveCalculator] = useState<string>('bmi');
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-100 text-blue-800 p-4 flex items-center">
        <CalculatorIcon className="h-6 w-6 mr-2" />
        <h3 className="text-lg font-semibold">
          {t('tools.healthCalculators')}
        </h3>
      </div>
      <div className="p-4">
        <div className="flex border-b mb-4">
          <button onClick={() => setActiveCalculator('bmi')} className={`px-4 py-2 text-sm font-medium ${activeCalculator === 'bmi' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
            BMI
          </button>
          <button onClick={() => setActiveCalculator('calorie')} className={`px-4 py-2 text-sm font-medium ${activeCalculator === 'calorie' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Calories
          </button>
          <button onClick={() => setActiveCalculator('hydration')} className={`px-4 py-2 text-sm font-medium ${activeCalculator === 'hydration' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Hydration
          </button>
        </div>
        {activeCalculator === 'bmi' && <BMICalculator />}
        {activeCalculator === 'calorie' && <CalorieCalculator />}
        {activeCalculator === 'hydration' && <HydrationCalculator />}
      </div>
    </div>;
};
export default HealthCalculators;