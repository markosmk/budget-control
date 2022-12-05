import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [enabled, setEnabled] = useState(false);

  const setEnabledState = () => {
    if (typeof window !== 'undefined') {
      const item = currentState();
      window.localStorage.setItem('themeDark', JSON.stringify(!item));
      setEnabled(!item);
    }
  };

  const currentState = () => {
    const item = window.localStorage.getItem('themeDark');
    return item ? JSON.parse(item) : false;
  };

  useEffect(() => {
    const className = 'dark';
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
};
