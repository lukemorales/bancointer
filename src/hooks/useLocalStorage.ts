import { useState } from 'react';

const storageKey = (key: string): string => `@BancoInterRedesign:${key}`;

type HookReturn<T> = [T, (value: T) => void];

const useLocalStorage = <T>(key: string, initialValue?: T): HookReturn<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(storageKey(key));
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const storeValue = (value: T): void => {
    setStoredValue(value);
    window.localStorage.setItem(storageKey(key), JSON.stringify(value));
  };

  return [storedValue, storeValue];
};

export default useLocalStorage;
