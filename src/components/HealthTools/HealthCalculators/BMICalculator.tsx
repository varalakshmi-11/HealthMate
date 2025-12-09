import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScaleIcon } from 'lucide-react';
import { mockApi } from '../../../utils/mockData';
const BMICalculator: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const calculateBMI = () => {
    if (weight === '' || height === '' || height <= 0 || weight <= 0) return;
    const calculatedBMI = mockApi.calculateBMI(weight, height);
    setBmi(calculatedBMI);
    // Determine BMI category
    if (calculatedBMI < 18.5) {
      setCategory('Underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      setCategory('Normal weight');
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };
  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight':
        return 'text-blue-600';
      case 'Normal weight':
        return 'text-green-600';
      case 'Overweight':
        return 'text-orange-600';
      case 'Obesity':
        return 'text-red-600';
      default:
        return '';
    }
  };
  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };
  return <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center mb-4">
        <ScaleIcon className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-medium">BMI Calculator</h3>
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
        <div className="flex space-x-2">
          <button onClick={calculateBMI} disabled={weight === '' || height === ''} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
            Calculate
          </button>
          <button onClick={resetCalculator} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            Reset
          </button>
        </div>
        {bmi !== null && <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium mb-2">Your Results</h4>
            <p className="mb-1">
              BMI: <span className="font-semibold">{bmi}</span>
            </p>
            <p>
              Category:{' '}
              <span className={`font-semibold ${getCategoryColor()}`}>
                {category}
              </span>
            </p>
            <div className="mt-3 text-xs text-gray-500">
              <p>BMI Categories:</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Underweight: Less than 18.5</li>
                <li>Normal weight: 18.5 - 24.9</li>
                <li>Overweight: 25 - 29.9</li>
                <li>Obesity: 30 or greater</li>
              </ul>
            </div>
          </div>}
      </div>
    </div>;
};
export default BMICalculator;