import { useState } from 'react';
import styles from './toggle.module.scss';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export function Toggle() {
    const [isDarkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!isDarkMode);
    }

    return (
        <button 
        onClick={handleClick} 
        className={`w-16 rounded-2xl flex transition-all duration-300 ${isDarkMode ? styles['toggle-dark']: styles['toggle-light']}`}>
            <SunIcon className='w-7 h-7 p-1 text-black absolute z-0'/>
            <div className={`w-7 h-7 z-10 bg-portage-500 rounded-2xl transition-transform duration-300 ${isDarkMode ? 'transform translate-x-9' : ''}`}></div>
            <div className='ml-auto flex justify-center items-center'>
                <MoonIcon className='w-7 h-7 p-1 text-white fill-current'/>
            </div>
        </button>
    );
}

export default Toggle;