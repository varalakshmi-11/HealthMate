// Utility for handling offline storage and sync

// Check if the browser is online
export const isOnline = (): boolean => {
    return navigator.onLine
}

// Save data to localStorage with a timestamp
export const saveData = <T,>(key: string, data: T): void => {
    try {
        const item = {
            data,
            timestamp: new Date().getTime(),
        }
        localStorage.setItem(key, JSON.stringify(item))
    } catch (error) {
        console.error(`Error saving data for key ${key}:`, error)
    }
}

// Get data from localStorage
export const getData = <T,>(key: string): T | null => {
    try {
        const item = localStorage.getItem(key)
        if (!item) return null
        const parsedItem = JSON.parse(item)
        return parsedItem.data as T
    } catch (error) {
        console.error(`Error getting data for key ${key}:`, error)
        return null
    }
}

// Remove data from localStorage
export const removeData = (key: string): void => {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.error(`Error removing data for key ${key}:`, error)
    }
}

// Get a chatbot answer (dummy example, you can replace with actual logic)
export const getAnswer = (question: string): string => {
    const chatHistory = getData<any[]>('chat_history') || []
    // Example: return the last message that contains the question (dummy logic)
    const answer = chatHistory.find((msg: any) => msg.question === question)
    return answer ? answer.answer : 'No answer found'
}

// Queue for storing actions that need to be synced when online
export const queueAction = (action: { type: string; data: any }): void => {
    try {
        const queue =
            getData<Array<{ type: string; data: any }>>('sync_queue') || []
        queue.push(action)
        saveData('sync_queue', queue)
    } catch (error) {
        console.error('Error queuing action:', error)
    }
}

// Process the sync queue when back online
export const processSyncQueue = async (): Promise<void> => {
    if (!isOnline()) return
    try {
        const queue = getData<Array<{ type: string; data: any }>>('sync_queue')
        if (!queue || queue.length === 0) return
        console.log('Processing sync queue:', queue)
        saveData('sync_queue', [])
    } catch (error) {
        console.error('Error processing sync queue:', error)
    }
}

// Register online/offline event listeners
export const setupConnectivityListeners = (
    onOnline: () => void,
    onOffline: () => void,
): void => {
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return () => {
        window.removeEventListener('online', onOnline)
        window.removeEventListener('offline', onOffline)
    }
}

// Get all medication reminders
export const getMedications = (): any[] => {
    return getData<any[]>('medications') || []
}

// Save medication reminders
export const saveMedications = (medications: any[]): void => {
    saveData('medications', medications)
}

// Get all journal entries
export const getJournalEntries = (): any[] => {
    return getData<any[]>('journal_entries') || []
}

// Save journal entries
export const saveJournalEntries = (entries: any[]): void => {
    saveData('journal_entries', entries)
}

// Get chatbot history
export const getChatHistory = (): any[] => {
    return getData<any[]>('chat_history') || []
}

// Save chatbot history
export const saveChatHistory = (history: any[]): void => {
    saveData('chat_history', history)
}
