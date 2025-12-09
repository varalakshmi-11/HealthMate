import React from 'react';
import { useTranslation } from 'react-i18next';
import { emergencyContacts } from '../../utils/mockData';
import { PhoneCallIcon } from 'lucide-react';
const EmergencyContacts: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const currentLanguage = i18n.language;
  const contacts = emergencyContacts.map(contact => {
    return {
      id: contact.id,
      name: currentLanguage === 'od' ? contact.name_od : currentLanguage === 'hi' ? contact.name_hi : contact.name,
      number: contact.number
    };
  });
  return <div>
      <p className="text-sm text-red-600 font-medium mb-4">
        {t('home.emergencyText')}
      </p>
      <div className="space-y-3">
        {contacts.map(contact => <a key={contact.id} href={`tel:${contact.number}`} className="flex items-center justify-between p-3 border rounded-lg hover:bg-red-50 group">
            <div className="flex items-center">
              <span className="font-medium">{contact.name}</span>
            </div>
            <div className="flex items-center text-gray-600 group-hover:text-red-600">
              <span className="mr-2">{contact.number}</span>
              <PhoneCallIcon className="h-5 w-5" />
            </div>
          </a>)}
      </div>
    </div>;
};
export default EmergencyContacts;