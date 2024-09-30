import { useState } from 'react';
import { MoonIcon } from '@heroicons/react/24/outline';

export function Toggle() {
    const [isDarkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!isDarkMode);
    }

    return (
        <button onClick={handleClick} className='w-16 bg-black rounded-2xl flex'>
            <div className={`w-7 h-7 bg-portage-500 rounded-2xl transition-transform duration-300 ${isDarkMode ? 'transform translate-x-9' : ''}`}></div>
            <div className='ml-auto flex justify-center items-center'>
                <MoonIcon className='w-7 h-7 p-1 text-blackPearl-200 fill-current'/>
            </div>
        </button>
    );
}

export default Toggle;