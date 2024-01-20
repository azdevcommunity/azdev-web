import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import style from './SelectBoxDay.module.css';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [buttonWidth, setButtonWidth] = useState(0); // New state for button width
  const buttonRef = useRef(null); // Ref for the yearButton
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (day: string) => {
    setSelected(day);
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, dropdownRef]);

  const selectedDay = () => {
    return (<div className={`${style.dayText} text-left`} style={{ width: "5vh" }}>{selected}</div>);
  }


  return (
    <div className={`${style.mainContainer} relative mt-4 inset-0 z-40 mr-0`} ref={dropdownRef} > {/* Added ref to the div */}

      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={` ${style.dayButton} px-4 w-20 py-2 border-1 h-14 ${isOpen ? 'border-blue-500 text-blue-500' : 'border-border-color-100 text-white'} rounded-md bg-transparent flex items-start justify-between flex-col`}
        type="button"
      >
        <span className={style.daySelectBox}>Gün</span>
        <div className="flex items-start justify-between flex-row">
          {selectedDay()}
          <ChevronDownIcon className={`w-5 h-5 ${isOpen && 'transform rotate-180'} transition-transform`} />
        </div>
      </button>
      {isOpen && (
        <div className={`${style.dayList} mt-1 fixed w-44 rounded-md shadow-lg bg-gray-700 z-20  border-white border`} style={{ bottom: "35.5%", width: `${buttonWidth}px` }}>
          <ul className="text-white overflow-auto max-h-60 ">
            {Array.from({ length: 31 }, (_, i) => 1 + i).map((day, index, array) => (
              <li
                key={`${day}`}
                onClick={() => handleSelect(`${day}`)}
                className={`px-4  bg-custom-color-900 hover:bg-blue-500 hover:text-white cursor-pointer text-sm ${selected === `${day}` ? 'bg-blue-500 text-white' : ''} 
           ${index === 0 ? 'rounded-t-md' : ''} 
           ${index === array.length - 1 ? 'rounded-b-md' : ''}`}
              >
                {`${day}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;