import {useEffect, useState} from "react";

export const useLocalStorage = (key: string, initialValue: string | null = null) => {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue
    });
    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}