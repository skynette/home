// DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemPreferenceChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleSystemPreferenceChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemPreferenceChange);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='absolute top-3 right-0 z-30 rounded-full overflow-hidden'>
    <button
      className={`p-2 bg-body-300 dark:bg-body-800`}
      onClick={toggleDarkMode}
    >
      {darkMode ? <BsFillSunFill className='h-6 w-6 text-body-300'/> : <BsFillMoonFill className='h-6 w-6 text-body-800'/>}
    </button>
    </div>
  );
};

export default DarkModeToggle;
