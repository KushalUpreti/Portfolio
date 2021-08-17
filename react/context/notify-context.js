import { createContext, useContext, useState } from "react";

const NotifyContext = createContext({
    notification: null,
    notificationType: null,
    showNotification: () => { }
});

export function useNotificationContext() {
    return useContext(NotifyContext);
}

export function NotificationProvider({ children }) {
    const [notification, setNotification] = useState('');
    const [type, setType] = useState('Error');

    function showNotification(message, duration = 1000, type = "Error") {
        setNotification(message);
        setType(type);
        setTimeout(hide, duration);
    }

    function hide() {
        setNotification(null);
    }

    return (
        <NotifyContext.Provider value={{
            notification,
            notificationType: type,
            showNotification
        }}>
            {children}
        </NotifyContext.Provider>
    );
}