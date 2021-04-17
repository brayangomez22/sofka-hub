export const saveToLocal = (key, value) => window.localStorage.setItem(key, value);
export const getFromLocal = (key) => window.localStorage.getItem(key);
export const removeFromLocal = (key) => window.localStorage.removeItem(key);