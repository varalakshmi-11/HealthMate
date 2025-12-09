// Simple utility for showing notifications to the user
type NotificationType = 'info' | 'success' | 'warning' | 'error'

/**
 * Creates an alert message that can be shown to the user
 * This is a simple implementation - in a real app, this would use a toast or notification system
 */
export const createAlertMessage = (
    message: string,
    type: NotificationType = 'info',
): void => {
    // For now, just log to console since we don't have a UI component for notifications
    console.log(`[${type.toUpperCase()}]: ${message}`)
    // In a real implementation, you would show a toast notification
    // Example: toast({ title: message, status: type });
}

/**
 * Creates a toast notification
 * This is a placeholder for a more sophisticated notification system
 */
export const createToast = (
    message: string,
    type: NotificationType = 'info',
    duration: number = 3000,
): void => {
    createAlertMessage(message, type)
}

/**
 * Check if browser supports notifications
 */
export const areNotificationsSupported = (): boolean => {
    return 'Notification' in window
}

/**
 * Request notification permission from the user
 */
export const requestNotificationPermission = async (): Promise<boolean> => {
    if (!areNotificationsSupported()) {
        return false
    }
    try {
        const permission = await Notification.requestPermission()
        return permission === 'granted'
    } catch (error) {
        console.error('Error requesting notification permission:', error)
        return false
    }
}

/**
 * Send a browser notification
 */
export const sendNotification = (
    title: string,
    options?: NotificationOptions,
): void => {
    if (!areNotificationsSupported() || Notification.permission !== 'granted') {
        createAlertMessage(`${title}: ${options?.body || ''}`, 'info')
        return
    }
    try {
        new Notification(title, options)
    } catch (error) {
        console.error('Error sending notification:', error)
        createAlertMessage(`${title}: ${options?.body || ''}`, 'info')
    }
}

/**
 * Schedule a notification (simplified implementation using setTimeout)
 */
export const scheduleNotification = (
    title: string,
    options: NotificationOptions,
    scheduledTime: Date,
    callback?: () => void,
): number => {
    const delay = scheduledTime.getTime() - Date.now()
    if (delay <= 0) {
        // If time has passed, schedule for tomorrow
        const tomorrow = new Date(scheduledTime)
        tomorrow.setDate(tomorrow.getDate() + 1)
        return scheduleNotification(title, options, tomorrow, callback)
    }
    const timerId = window.setTimeout(() => {
        sendNotification(title, options)
        if (callback) {
            callback()
        }
    }, delay)
    return timerId
}

/**
 * Cancel a scheduled notification
 */
export const cancelScheduledNotification = (timerId: number): void => {
    window.clearTimeout(timerId)
}
