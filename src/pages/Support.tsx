import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPinIcon, PhoneIcon } from 'lucide-react';
import HospitalFinder from '../components/LocalSupport/HospitalFinder';
import EmergencyContacts from '../components/LocalSupport/EmergencyContacts';
const SupportPage: React.FC = () => {
  const {
    t
  } = useTranslation();
  return <div className="min-h-screen bg-gray-50">
      {/* Support Header */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('header.support')}
          </h1>
          <p className="text-xl">
            Find local healthcare facilities and emergency contacts
          </p>
        </div>
      </section>
      {/* Support Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <MapPinIcon className="h-6 w-6 text-teal-600 mr-2" />
                <h2 className="text-2xl font-bold">
                  {t('localSupport.findHospitals')}
                </h2>
              </div>
              <HospitalFinder />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <PhoneIcon className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">
                  {t('localSupport.emergencyContacts')}
                </h2>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <EmergencyContacts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default SupportPage;