import { useState } from 'react';

import { storageKey } from '~/utils';

type HookReturn<T> = [T, (value: T) => void];

const useLocalStorage = <T>(key: string, initialValue?: T): HookReturn<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(storageKey(key));
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const storeValue = (value: T): void => {
    setStoredValue(value);

    if (!value) {
      window.localStorage.removeItem(storageKey(key));
      return;
    }

    window.localStorage.setItem(storageKey(key), JSON.stringify(value));
  };

  return [storedValue, storeValue];
};

export default useLocalStorage;
