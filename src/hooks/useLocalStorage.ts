import {useEffect, useState} from "react";

export const useLocalStorage = (key: string, initialValue: string | null = null) => {
    const [isClient, setIsClient] = useState(false);
    const [value, setValue] = useState(() => {
        if (isClient) {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue
        }
    });
    useEffect(() => {
        if (value && isClient) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, , isClient, value]);

    useEffect(() => {
        setIsClient(true)
    }, []);

    return [value, setValue];

}