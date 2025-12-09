import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PillIcon, PlusCircleIcon, TrashIcon, BellIcon, CheckCircleIcon, XCircleIcon, VolumeIcon, Volume2Icon, VolumeXIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import useSound from 'use-sound';
import { defaultMedications } from '../../utils/mockData';
import * as offlineStorage from '../../utils/offlineStorage';
import * as notifications from '../../utils/notifications';
// Define the alarm sound URL
const ALARM_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/951/951-preview.mp3';
interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  instructions: string;
  startDate: string;
  endDate: string;
}
const MedicationReminder: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [medications, setMedications] = useState<Medication[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMedication, setNewMedication] = useState<Medication>({
    id: '',
    name: '',
    dosage: '',
    frequency: 'Once daily',
    time: '08:00',
    instructions: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: ''
  });
  const [notificationPermission, setNotificationPermission] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [notificationTimers, setNotificationTimers] = useState<Record<string, number>>({});
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isAlarmPlaying, setIsAlarmPlaying] = useState<boolean>(false);
  const [currentAlarmId, setCurrentAlarmId] = useState<string | null>(null);
  // Use sound hook for medication alarm
  const [playAlarm, {
    stop: stopAlarm
  }] = useSound(ALARM_SOUND_URL, {
    volume: 0.5,
    interrupt: true,
    onend: () => {
      setIsAlarmPlaying(false);
      setCurrentAlarmId(null);
    }
  });
  // Initialize medications from storage or defaults
  useEffect(() => {
    const storedMedications = offlineStorage.getData<Medication[]>('medications');
    if (storedMedications && storedMedications.length > 0) {
      setMedications(storedMedications);
    } else {
      setMedications(defaultMedications);
      offlineStorage.saveData('medications', defaultMedications);
    }
    // Check notification permission
    if (notifications.areNotificationsSupported()) {
      setNotificationPermission(Notification.permission === 'granted');
    }
    // Set up online/offline listeners
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    // Load sound preference
    const soundPref = localStorage.getItem('medication_sound_enabled');
    if (soundPref !== null) {
      setSoundEnabled(soundPref === 'true');
    }
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      // Clear any playing alarms when component unmounts
      if (isAlarmPlaying) {
        stopAlarm();
      }
    };
  }, [stopAlarm]);
  // Schedule notifications for medications
  useEffect(() => {
    // Clear existing timers
    Object.values(notificationTimers).forEach(timerId => {
      notifications.cancelScheduledNotification(timerId);
    });
    const newTimers: Record<string, number> = {};
    // Only schedule if permission is granted
    if (notificationPermission) {
      medications.forEach(med => {
        // Parse time and create a Date object for today at that time
        const [hours, minutes] = med.time.split(':').map(Number);
        const scheduledTime = new Date();
        scheduledTime.setHours(hours, minutes, 0, 0);
        // If time has already passed today, schedule for tomorrow
        if (scheduledTime.getTime() < Date.now()) {
          scheduledTime.setDate(scheduledTime.getDate() + 1);
        }
        const timerId = notifications.scheduleNotification(`Medication Reminder: ${med.name}`, {
          body: `Time to take ${med.dosage} of ${med.name}. ${med.instructions}`,
          icon: '/favicon.ico',
          requireInteraction: true,
          silent: !soundEnabled
        }, scheduledTime, () => {
          // This callback will run when notification is triggered
          if (soundEnabled) {
            setIsAlarmPlaying(true);
            setCurrentAlarmId(med.id);
            playAlarm();
          }
        });
        if (timerId !== -1) {
          newTimers[med.id] = timerId;
        }
      });
      setNotificationTimers(newTimers);
    }
    return () => {
      // Clean up timers when component unmounts
      Object.values(newTimers).forEach(timerId => {
        notifications.cancelScheduledNotification(timerId);
      });
    };
  }, [medications, notificationPermission, soundEnabled, playAlarm]);
  const handleRequestPermission = async () => {
    const granted = await notifications.requestNotificationPermission();
    setNotificationPermission(granted);
    if (granted) {
      notifications.sendNotification('Notifications Enabled', {
        body: 'You will now receive medication reminders',
        icon: '/favicon.ico'
      });
    } else {
      notifications.createAlertMessage('Notification permission denied. You will not receive medication reminders.', 'warning');
    }
  };
  const handleAddMedication = () => {
    if (!newMedication.name || !newMedication.dosage) return;
    const medicationToAdd = {
      ...newMedication,
      id: uuidv4()
    };
    const updatedMedications = [...medications, medicationToAdd];
    setMedications(updatedMedications);
    offlineStorage.saveData('medications', updatedMedications);
    // Show confirmation
    if (isOnline) {
      notifications.sendNotification('Medication Added', {
        body: `${medicationToAdd.name} has been added to your reminders`,
        icon: '/favicon.ico'
      });
    } else {
      notifications.createAlertMessage(`${medicationToAdd.name} has been added to your reminders`, 'success');
    }
    // Reset form
    setNewMedication({
      id: '',
      name: '',
      dosage: '',
      frequency: 'Once daily',
      time: '08:00',
      instructions: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: ''
    });
    setShowAddForm(false);
  };
  const handleDeleteMedication = (id: string) => {
    const updatedMedications = medications.filter(med => med.id !== id);
    setMedications(updatedMedications);
    offlineStorage.saveData('medications', updatedMedications);
    // Cancel notification timer if exists
    if (notificationTimers[id]) {
      notifications.cancelScheduledNotification(notificationTimers[id]);
      const updatedTimers = {
        ...notificationTimers
      };
      delete updatedTimers[id];
      setNotificationTimers(updatedTimers);
    }
    // If this medication's alarm is playing, stop it
    if (currentAlarmId === id && isAlarmPlaying) {
      stopAlarm();
      setIsAlarmPlaying(false);
      setCurrentAlarmId(null);
    }
    // Show confirmation
    notifications.createAlertMessage('Medication removed from your reminders', 'info');
  };
  const toggleSoundEnabled = () => {
    const newSoundEnabled = !soundEnabled;
    setSoundEnabled(newSoundEnabled);
    localStorage.setItem('medication_sound_enabled', newSoundEnabled.toString());
    notifications.createAlertMessage(newSoundEnabled ? 'Medication reminder sounds enabled' : 'Medication reminder sounds disabled', 'info');
  };
  const stopCurrentAlarm = () => {
    if (isAlarmPlaying) {
      stopAlarm();
      setIsAlarmPlaying(false);
      setCurrentAlarmId(null);
      notifications.createAlertMessage('Alarm dismissed', 'info');
    }
  };
  // Test alarm sound
  const testAlarmSound = () => {
    if (!isAlarmPlaying) {
      setIsAlarmPlaying(true);
      setCurrentAlarmId('test');
      playAlarm();
      setTimeout(() => {
        stopAlarm();
        setIsAlarmPlaying(false);
        setCurrentAlarmId(null);
      }, 3000); // Play for 3 seconds
    } else {
      stopAlarm();
      setIsAlarmPlaying(false);
      setCurrentAlarmId(null);
    }
  };
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="bg-purple-100 text-purple-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <PillIcon className="h-6 w-6 mr-2" />
        <h3 className="text-lg font-semibold">
          {t('tools.medicationReminder')}
        </h3>
      </div>
      <div className="flex items-center">
        {isAlarmPlaying && <button onClick={stopCurrentAlarm} className="mr-3 flex items-center bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700">
          <VolumeXIcon className="h-3 w-3 mr-1" /> Stop Alarm
        </button>}
        <button onClick={toggleSoundEnabled} className="mr-3 text-purple-700" title={soundEnabled ? 'Disable alarm sounds' : 'Enable alarm sounds'}>
          {soundEnabled ? <Volume2Icon className="h-5 w-5" /> : <VolumeXIcon className="h-5 w-5" />}
        </button>
        {soundEnabled && <button onClick={testAlarmSound} className="mr-3 flex items-center text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded hover:bg-purple-300" disabled={isAlarmPlaying}>
          <VolumeIcon className="h-3 w-3 mr-1" /> Test Sound
        </button>}
        {isOnline ? <span className="flex items-center text-xs text-green-600 mr-3">
          <CheckCircleIcon className="h-3 w-3 mr-1" /> Online
        </span> : <span className="flex items-center text-xs text-orange-600 mr-3">
          <XCircleIcon className="h-3 w-3 mr-1" /> Offline
        </span>}
        {!notificationPermission && <button onClick={handleRequestPermission} className="text-xs flex items-center bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-700">
          <BellIcon className="h-3 w-3 mr-1" /> Enable Notifications
        </button>}
      </div>
    </div>
    <div className="p-4">
      {medications.length === 0 ? <div className="text-center py-8 text-gray-500">
        <PillIcon className="h-12 w-12 mx-auto mb-3 text-gray-400" />
        <p>No medications added yet</p>
      </div> : <div className="space-y-3">
        {medications.map(med => <div key={med.id} className="border rounded-md p-3">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">{med.name}</h4>
              <p className="text-sm text-gray-600">{med.dosage}</p>
            </div>
            <button onClick={() => handleDeleteMedication(med.id)} className="text-red-500 hover:text-red-700" aria-label="Delete medication">
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div>
              <span className="font-medium">Frequency:</span>{' '}
              {med.frequency}
            </div>
            <div>
              <span className="font-medium">Time:</span> {med.time}
            </div>
            {med.instructions && <div className="col-span-2">
              <span className="font-medium">Instructions:</span>{' '}
              {med.instructions}
            </div>}
            <div className="col-span-2">
              <span className="font-medium">Start Date:</span>{' '}
              {med.startDate}
              {med.endDate && <span> to {med.endDate}</span>}
            </div>
          </div>
        </div>)}
      </div>}
      {!showAddForm ? <button onClick={() => setShowAddForm(true)} className="mt-4 w-full flex items-center justify-center bg-purple-100 text-purple-800 p-2 rounded hover:bg-purple-200 transition-colors">
        <PlusCircleIcon className="h-4 w-4 mr-1" />
        Add Medication
      </button> : <div className="mt-4 border rounded-md p-4">
        <h4 className="font-medium mb-3">Add New Medication</h4>
        <div className="space-y-3">
          <div>
            <label htmlFor="med-name" className="block text-sm font-medium text-gray-700 mb-1">
              Medication Name*
            </label>
            <input type="text" id="med-name" value={newMedication.name} onChange={e => setNewMedication({
              ...newMedication,
              name: e.target.value
            })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter medication name" required />
          </div>
          <div>
            <label htmlFor="med-dosage" className="block text-sm font-medium text-gray-700 mb-1">
              Dosage*
            </label>
            <input type="text" id="med-dosage" value={newMedication.dosage} onChange={e => setNewMedication({
              ...newMedication,
              dosage: e.target.value
            })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="E.g., 500mg, 1 tablet" required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="med-frequency" className="block text-sm font-medium text-gray-700 mb-1">
                Frequency
              </label>
              <select id="med-frequency" value={newMedication.frequency} onChange={e => setNewMedication({
                ...newMedication,
                frequency: e.target.value
              })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="Once daily">Once daily</option>
                <option value="Twice daily">Twice daily</option>
                <option value="Three times daily">Three times daily</option>
                <option value="Four times daily">Four times daily</option>
                <option value="Every other day">Every other day</option>
                <option value="Weekly">Weekly</option>
                <option value="As needed">As needed</option>
              </select>
            </div>
            <div>
              <label htmlFor="med-time" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input type="time" id="med-time" value={newMedication.time} onChange={e => setNewMedication({
                ...newMedication,
                time: e.target.value
              })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div>
            <label htmlFor="med-instructions" className="block text-sm font-medium text-gray-700 mb-1">
              Instructions
            </label>
            <input type="text" id="med-instructions" value={newMedication.instructions} onChange={e => setNewMedication({
              ...newMedication,
              instructions: e.target.value
            })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="E.g., Take with food" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="med-start-date" className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input type="date" id="med-start-date" value={newMedication.startDate} onChange={e => setNewMedication({
                ...newMedication,
                startDate: e.target.value
              })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label htmlFor="med-end-date" className="block text-sm font-medium text-gray-700 mb-1">
                End Date (Optional)
              </label>
              <input type="date" id="med-end-date" value={newMedication.endDate} onChange={e => setNewMedication({
                ...newMedication,
                endDate: e.target.value
              })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div className="flex space-x-2 pt-2">
            <button onClick={handleAddMedication} disabled={!newMedication.name || !newMedication.dosage} className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
              Add Medication
            </button>
            <button onClick={() => setShowAddForm(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>}
    </div>
  </div>;
};
export default MedicationReminder;