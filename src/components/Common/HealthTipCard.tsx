import React from 'react';
import { LightbulbIcon } from 'lucide-react';
interface HealthTipCardProps {
  tip: string;
  category?: string;
}
const HealthTipCard: React.FC<HealthTipCardProps> = ({
  tip,
  category
}) => {
  return <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg shadow-sm">
      <div className="flex">
        <div className="flex-shrink-0">
          <LightbulbIcon className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-800">{tip}</p>
          {category && <p className="text-xs text-yellow-600 mt-1">{category}</p>}
        </div>
      </div>
    </div>;
};
export default HealthTipCard;