import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookIcon, PlusCircleIcon, TrashIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { defaultJournalEntries } from '../../utils/mockData';
import * as offlineStorage from '../../utils/offlineStorage';
interface JournalEntry {
  id: string;
  date: string;
  mood: string;
  sleep: number;
  water: number;
  exercise: number;
  notes: string;
}
const HealthJournal: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);
  const [newEntry, setNewEntry] = useState<JournalEntry>({
    id: '',
    date: new Date().toISOString().split('T')[0],
    mood: 'Good',
    sleep: 7,
    water: 6,
    exercise: 30,
    notes: ''
  });
  // Initialize journal entries from storage or defaults
  useEffect(() => {
    const storedEntries = offlineStorage.getData<JournalEntry[]>('journal_entries');
    if (storedEntries && storedEntries.length > 0) {
      setJournalEntries(storedEntries);
    } else {
      setJournalEntries(defaultJournalEntries);
      offlineStorage.saveData('journal_entries', defaultJournalEntries);
    }
  }, []);
  const handleAddEntry = () => {
    const entryToAdd = {
      ...newEntry,
      id: uuidv4()
    };
    const updatedEntries = [entryToAdd, ...journalEntries];
    setJournalEntries(updatedEntries);
    offlineStorage.saveData('journal_entries', updatedEntries);
    // Reset form
    setNewEntry({
      id: '',
      date: new Date().toISOString().split('T')[0],
      mood: 'Good',
      sleep: 7,
      water: 6,
      exercise: 30,
      notes: ''
    });
    setShowAddForm(false);
  };
  const handleDeleteEntry = (id: string) => {
    const updatedEntries = journalEntries.filter(entry => entry.id !== id);
    setJournalEntries(updatedEntries);
    offlineStorage.saveData('journal_entries', updatedEntries);
    if (expandedEntryId === id) {
      setExpandedEntryId(null);
    }
  };
  const toggleEntryExpansion = (id: string) => {
    if (expandedEntryId === id) {
      setExpandedEntryId(null);
    } else {
      setExpandedEntryId(id);
    }
  };
  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'Excellent':
        return '😄';
      case 'Good':
        return '🙂';
      case 'Average':
        return '😐';
      case 'Poor':
        return '😔';
      case 'Terrible':
        return '😫';
      default:
        return '🙂';
    }
  };
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-cyan-100 text-cyan-800 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <BookIcon className="h-6 w-6 mr-2" />
          <h3 className="text-lg font-semibold">Health Journal</h3>
        </div>
      </div>
      <div className="p-4">
        {!showAddForm ? <button onClick={() => setShowAddForm(true)} className="mb-4 w-full flex items-center justify-center bg-cyan-100 text-cyan-800 p-2 rounded hover:bg-cyan-200 transition-colors">
            <PlusCircleIcon className="h-4 w-4 mr-1" />
            Add Journal Entry
          </button> : <div className="mb-6 border rounded-md p-4">
            <h4 className="font-medium mb-3">New Journal Entry</h4>
            <div className="space-y-3">
              <div>
                <label htmlFor="entry-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input type="date" id="entry-date" value={newEntry.date} onChange={e => setNewEntry({
              ...newEntry,
              date: e.target.value
            })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="entry-mood" className="block text-sm font-medium text-gray-700 mb-1">
                  Mood
                </label>
                <select id="entry-mood" value={newEntry.mood} onChange={e => setNewEntry({
              ...newEntry,
              mood: e.target.value
            })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option value="Excellent">Excellent 😄</option>
                  <option value="Good">Good 🙂</option>
                  <option value="Average">Average 😐</option>
                  <option value="Poor">Poor 😔</option>
                  <option value="Terrible">Terrible 😫</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sleep (hours)
                </label>
                <input type="range" min="0" max="12" step="0.5" value={newEntry.sleep} onChange={e => setNewEntry({
              ...newEntry,
              sleep: parseFloat(e.target.value)
            })} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0h</span>
                  <span>{newEntry.sleep}h</span>
                  <span>12h</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Water (glasses)
                </label>
                <input type="range" min="0" max="12" step="1" value={newEntry.water} onChange={e => setNewEntry({
              ...newEntry,
              water: parseInt(e.target.value)
            })} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>{newEntry.water} glasses</span>
                  <span>12</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Exercise (minutes)
                </label>
                <input type="range" min="0" max="120" step="5" value={newEntry.exercise} onChange={e => setNewEntry({
              ...newEntry,
              exercise: parseInt(e.target.value)
            })} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0min</span>
                  <span>{newEntry.exercise}min</span>
                  <span>120min</span>
                </div>
              </div>
              <div>
                <label htmlFor="entry-notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea id="entry-notes" value={newEntry.notes} onChange={e => setNewEntry({
              ...newEntry,
              notes: e.target.value
            })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" rows={3} placeholder="How are you feeling today? Any health observations?"></textarea>
              </div>
              <div className="flex space-x-2 pt-2">
                <button onClick={handleAddEntry} className="flex-1 bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors">
                  Save Entry
                </button>
                <button onClick={() => setShowAddForm(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>}
        {journalEntries.length === 0 ? <div className="text-center py-8 text-gray-500">
            <BookIcon className="h-12 w-12 mx-auto mb-3 text-gray-400" />
            <p>No journal entries yet</p>
          </div> : <div className="space-y-3">
            {journalEntries.map(entry => <div key={entry.id} className="border rounded-md overflow-hidden">
                <div className="p-3 bg-gray-50 flex items-center justify-between cursor-pointer" onClick={() => toggleEntryExpansion(entry.id)}>
                  <div className="flex items-center">
                    <span className="text-xl mr-2">
                      {getMoodEmoji(entry.mood)}
                    </span>
                    <div>
                      <h4 className="font-medium">
                        {new Date(entry.date).toLocaleDateString()}
                      </h4>
                      <p className="text-xs text-gray-500">
                        Sleep: {entry.sleep}h • Water: {entry.water} glasses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button onClick={e => {
                e.stopPropagation();
                handleDeleteEntry(entry.id);
              }} className="text-red-500 hover:text-red-700 mr-2" aria-label="Delete entry">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                    {expandedEntryId === entry.id ? <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : <ChevronDownIcon className="h-5 w-5 text-gray-500" />}
                  </div>
                </div>
                {expandedEntryId === entry.id && <div className="p-3 border-t">
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-blue-50 p-2 rounded text-center">
                        <p className="text-xs text-blue-600">Sleep</p>
                        <p className="font-medium">{entry.sleep}h</p>
                      </div>
                      <div className="bg-cyan-50 p-2 rounded text-center">
                        <p className="text-xs text-cyan-600">Water</p>
                        <p className="font-medium">{entry.water} glasses</p>
                      </div>
                      <div className="bg-green-50 p-2 rounded text-center">
                        <p className="text-xs text-green-600">Exercise</p>
                        <p className="font-medium">{entry.exercise}min</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-1">
                        Mood
                      </h5>
                      <p className="text-sm mb-3">{entry.mood}</p>
                      {entry.notes && <>
                          <h5 className="text-sm font-medium text-gray-700 mb-1">
                            Notes
                          </h5>
                          <p className="text-sm text-gray-600">{entry.notes}</p>
                        </>}
                    </div>
                  </div>}
              </div>)}
          </div>}
      </div>
    </div>;
};
export default HealthJournal;