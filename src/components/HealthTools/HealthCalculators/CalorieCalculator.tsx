import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlameIcon } from 'lucide-react';
import { mockApi } from '../../../utils/mockData';
const CalorieCalculator: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<string>('male');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [calories, setCalories] = useState<number | null>(null);
  const calculateCalories = () => {
    if (weight === '' || height === '' || age === '') return;
    const calculatedCalories = mockApi.calculateCalories(weight, height, typeof age === 'number' ? age : 0, gender, activityLevel);
    setCalories(calculatedCalories);
  };
  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setActivityLevel('moderate');
    setCalories(null);
  };
  return <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center mb-4">
        <FlameIcon className="h-5 w-5 text-orange-600 mr-2" />
        <h3 className="text-lg font-medium">Calorie Calculator</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
            Weight (kg)
          </label>
          <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value ? parseFloat(e.target.value) : '')} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your weight" min="1" />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
            Height (cm)
          </label>
          <input type="number" id="height" value={height} onChange={e => setHeight(e.target.value ? parseFloat(e.target.value) : '')} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your height" min="1" />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Age (years)
          </label>
          <input type="number" id="age" value={age} onChange={e => setAge(e.target.value ? parseFloat(e.target.value) : '')} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your age" min="1" max="120" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-blue-600" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-blue-600" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
              <span className="ml-2">Female</span>
            </label>
          </div>
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
              Very Active (hard exercise daily)
            </option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button onClick={calculateCalories} disabled={weight === '' || height === '' || age === ''} className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
            Calculate
          </button>
          <button onClick={resetCalculator} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Reset
          </button>
        </div>
        {calories !== null && <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium mb-2">Your Estimated Daily Calories</h4>
            <p className="text-xl font-bold text-orange-600">
              {calories} calories
            </p>
            <div className="mt-3 text-xs text-gray-500">
              <p>
                This estimate represents the total calories you need each day to
                maintain your current weight.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  To lose weight: Consume 500 calories less than this number
                </li>
                <li>
                  To gain weight: Consume 500 calories more than this number
                </li>
              </ul>
            </div>
          </div>}
      </div>
    </div>;
};
export default CalorieCalculator;