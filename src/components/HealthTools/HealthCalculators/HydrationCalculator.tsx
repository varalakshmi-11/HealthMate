import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropletIcon } from 'lucide-react';
import { mockApi } from '../../../utils/mockData';
const HydrationCalculator: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [weight, setWeight] = useState<number | ''>('');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [waterNeeds, setWaterNeeds] = useState<number | null>(null);
  const [glasses, setGlasses] = useState<number | null>(null);
  const calculateWaterNeeds = () => {
    if (weight === '') return;
    const calculatedWaterInMl = mockApi.calculateWaterNeeds(weight, activityLevel);
    setWaterNeeds(calculatedWaterInMl);
    // Calculate glasses (assuming 250ml per glass)
    const calculatedGlasses = Math.round(calculatedWaterInMl / 250);
    setGlasses(calculatedGlasses);
  };
  const resetCalculator = () => {
    setWeight('');
    setActivityLevel('moderate');
    setWaterNeeds(null);
    setGlasses(null);
  };
  return <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center mb-4">
        <DropletIcon className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-medium">Hydration Calculator</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
            Weight (kg)
          </label>
          <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value ? parseFloat(e.target.value) : '')} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your weight" min="1" />
        </div>
        <div>
          <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
            Activity Level
          </label>
          <select id="activity" value={activityLevel} onChange={e => setActivityLevel(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (exercise 1-3 days/week)</option>
            <option value="moderate">Moderate (exercise 3-5 days/week)</option>
            <option value="active">Active (exercise 6-7 days/week)</option>
            <option value="very-active">
              Very Active (hard exercise or physical job)
            </option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button onClick={calculateWaterNeeds} disabled={weight === ''} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
            Calculate
          </button>
          <button onClick={resetCalculator} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Reset
          </button>
        </div>
        {waterNeeds !== null && <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium mb-2">Your Daily Water Needs</h4>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl font-bold text-blue-600">
                {waterNeeds} ml
              </span>
              <span className="text-xl font-bold text-blue-600">
                ≈ {glasses} glasses
              </span>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <p>
                This is an estimate of how much water you should drink daily.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Drink more when it's hot or during/after exercise</li>
                <li>Spread your water intake throughout the day</li>
                <li>
                  Other beverages count toward your fluid intake, but water is
                  best
                </li>
                <li>
                  Foods with high water content (fruits, vegetables) also
                  contribute
                </li>
              </ul>
            </div>
          </div>}
      </div>
    </div>;
};
export default HydrationCalculator;