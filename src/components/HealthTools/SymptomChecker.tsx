import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangleIcon, SearchIcon } from 'lucide-react';
import { symptoms, conditions } from '../../utils/mockData';
const SymptomChecker: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const currentLanguage = i18n.language;
  const symptomsList = symptoms.map(symptom => {
    return {
      id: symptom.id,
      name: currentLanguage === 'od' ? symptom.name_od : currentLanguage === 'hi' ? symptom.name_hi : symptom.name
    };
  });
  const toggleSymptom = (id: number) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };
  const checkSymptoms = () => {
    if (selectedSymptoms.length === 0) return;
    const possibleConditions = conditions.filter(condition => selectedSymptoms.some(s => condition.symptoms.includes(s)));
    const sortedConditions = possibleConditions.sort((a, b) => {
      const aMatches = a.symptoms.filter(s => selectedSymptoms.includes(s)).length;
      const bMatches = b.symptoms.filter(s => selectedSymptoms.includes(s)).length;
      return bMatches - aMatches;
    });
    const formattedResults = sortedConditions.map(condition => {
      return {
        id: condition.id,
        name: currentLanguage === 'od' ? condition.name_od : currentLanguage === 'hi' ? condition.name_hi : condition.name,
        severity: condition.severity,
        prevention: currentLanguage === 'od' ? condition.prevention_od : currentLanguage === 'hi' ? condition.prevention_hi : condition.prevention,
        matchScore: Math.round(condition.symptoms.filter(s => selectedSymptoms.includes(s)).length / condition.symptoms.length * 100)
      };
    });
    setResults(formattedResults);
    setShowResults(true);
  };
  const resetChecker = () => {
    setSelectedSymptoms([]);
    setResults([]);
    setShowResults(false);
  };
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Emergency':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div>
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">
          {t('symptomChecker.disclaimer')}
        </p>
      </div>
      {!showResults ? <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('symptomChecker.enterSymptoms')}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {symptomsList.map(symptom => <button key={symptom.id} onClick={() => toggleSymptom(symptom.id)} className={`py-2 px-3 text-sm rounded-md border ${selectedSymptoms.includes(symptom.id) ? 'bg-teal-100 border-teal-500 text-teal-800' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                  {symptom.name}
                </button>)}
            </div>
          </div>
          <button onClick={checkSymptoms} disabled={selectedSymptoms.length === 0} className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 disabled:bg-gray-300 disabled:text-gray-500 flex items-center justify-center">
            <SearchIcon className="h-4 w-4 mr-2" />
            {t('symptomChecker.checkButton')}
          </button>
        </> : <div>
          <h4 className="font-medium mb-3">{t('symptomChecker.results')}</h4>
          {results.length > 0 ? <div className="space-y-3">
              {results.map(condition => <div key={condition.id} className="border rounded-md overflow-hidden">
                  <div className="flex justify-between items-center p-3 bg-gray-50 border-b">
                    <h5 className="font-medium">{condition.name}</h5>
                    <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(condition.severity)}`}>
                      {condition.severity}
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Match</span>
                        <span>{condition.matchScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-teal-600 h-1.5 rounded-full" style={{
                  width: `${condition.matchScore}%`
                }}></div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h6 className="text-sm font-medium mb-1">Prevention:</h6>
                      <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                        {condition.prevention.map((tip: string, index: number) => <li key={index}>{tip}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>)}
            </div> : <div className="text-center py-4">
              <AlertTriangleIcon className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-gray-600">No matching conditions found.</p>
            </div>}
          <button onClick={resetChecker} className="w-full mt-4 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300">
            Check different symptoms
          </button>
        </div>}
    </div>;
};
export default SymptomChecker;