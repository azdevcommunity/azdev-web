import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import style from './SelectBoxMonth.module.css';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef(null); // Ref for the dropdown
  const [buttonWidth, setButtonWidth] = useState(0); // New state for button width
  const buttonRef = useRef(null); // Ref for the yearButton

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (month: string) => {
    setSelected(month);
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

  const selectedMonth = () => {
    return (<div className={`${style.monthText} text-left`} style={{ width: "18vh" }}>{selected}</div>);
  }


  return (
    <div className="relative mt-4 inset-0 z-40 mr-2" ref={dropdownRef} > {/* Added ref to the div */}
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`${style.monthButton} px-4 w-44 py-2 border-1 h-14 ${isOpen ? 'border-blue-500 text-blue-500' : 'border-border-color-100 text-white'} rounded-md bg-transparent flex items-start justify-between flex-col`}
        type="button"
      >
        <span className={style.monthSelectBox}>Ay</span>
        <div className="flex items-start justify-between flex-row">
          {selectedMonth()}
          <ChevronDownIcon className={`w-5 h-5 ${isOpen && 'transform rotate-180'} transition-transform`} />
        </div>
      </button>
      {isOpen && (
        <div className={`${style.monthList} mt-1 fixed w-44 rounded-md shadow-lg bg-gray-700 z-20  border-white border`} style={{ bottom: "35.5%", width: `${buttonWidth}px`}}>
          <ul className="text-white overflow-auto max-h-60 ">
            {['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'].map((month, index, array) => (
              <li
                key={month}
                onClick={() => handleSelect(month)}
                className={`px-4  bg-custom-color-900 hover:bg-blue-500 hover:text-white cursor-pointer text-sm ${selected === month ? 'bg-blue-500 text-white' : ''} 
             ${index === 0 ? 'rounded-t-md' : ''} 
             ${index === array.length - 1 ? 'rounded-b-md' : ''}`}
              >
                {month}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;