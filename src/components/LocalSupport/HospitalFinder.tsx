import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPinIcon, PhoneIcon } from 'lucide-react';

interface Hospital {
  id: string; // use place_id from backend
  name: string;
  address: string;
  phone?: string;
  rating?: number;
}

const HospitalFinder: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHospitals = async () => {
    setIsLoading(true);
    try {
      // ✅ 1. Get user location
      const position = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
      const { latitude, longitude } = position.coords;

      // ✅ 2. Call your backend API
      const response = await fetch(
        `http://localhost:5000/api/nearest-hospitals?lat=${latitude}&lng=${longitude}&lang=${i18n.language}`
      );
      if (!response.ok) throw new Error('Failed to fetch hospitals');

      const data = await response.json();

      // ✅ 3. Map response to Hospital[]
      const formatted: Hospital[] = data.map((h: any) => ({
        id: h.place_id,
        name: h.name,
        address: h.vicinity,
        phone: h.phone || 'N/A',
        rating: h.rating,
      }));

      setHospitals(formatted);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, [i18n.language]);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <h3 className="font-medium text-lg mb-2">{hospital.name}</h3>
              <div className="flex items-start mb-2">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">{hospital.address}</p>
              </div>
              {hospital.phone && (
                <div className="flex items-center mb-2">
                  <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <a href={`tel:${hospital.phone}`} className="text-blue-600 hover:underline">
                    {hospital.phone}
                  </a>
                </div>
              )}
              {hospital.rating && (
                <p className="text-sm text-gray-500">⭐ {hospital.rating}</p>
              )}
            </div>
          ))}

          {/* ✅ Refresh button */}
          <button
            onClick={fetchHospitals}
            className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-md"
          >
            {t('localSupport.findHospitals')}
          </button>
        </div>
      )}
    </div>
  );
};

export default HospitalFinder;
