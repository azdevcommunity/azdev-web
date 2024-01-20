import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import style from './SelectBoxYear.module.css';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [buttonWidth, setButtonWidth] = useState(0); // New state for button width
  const buttonRef = useRef(null); // Ref for the yearButton
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (year: string) => {
    setSelected(year);
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

  const selectedYear = () => {
    return (<div className={`${style.yearText} text-left`} style={{ width: "9vh" }}>{selected}</div>);
  }

  return (
    <div className="relative mt-4 inset-0 z-40" ref={dropdownRef}>
      <button
        ref={buttonRef} // Set the ref to the button
        onClick={toggleDropdown}
        className={`${style.yearButton} px-4 py-2 border-1 h-14 ${isOpen ? 'border-blue-500 text-blue-500' : 'border-border-color-100 text-white'} rounded-md bg-transparent flex items-start justify-between flex-col`}
        type="button"
      >
        <span className={style.yearSelectBox}>İl</span>
        <div className="flex items-start justify-between flex-row">
          {selectedYear()}
          <ChevronDownIcon className={`w-5 h-5 ${isOpen && 'transform rotate-180'} transition-transform`} />
        </div>
      </button>
      {isOpen && (
        <div
          className={`${style.yearList} mt-1 fixed rounded-md shadow-lg bg-gray-700 z-20 border-white border`}
          style={{ bottom: "35.5%", width: `${buttonWidth}px` }} // Apply the width here
        >
          <ul className="text-white overflow-auto max-h-60 ">
            {Array.from({ length: 121 }, (_, i) => 2024 - i).map((year, index, array) => (
              <li
                key={`${year}`}
                onClick={() => handleSelect(`${year}`)}
                className={`px-4  bg-custom-color-900 hover:bg-blue-500 hover:text-white cursor-pointer text-sm ${selected === `${year}` ? 'bg-blue-500 text-white' : ''} 
           ${index === 0 ? 'rounded-t-md' : ''} 
           ${index === array.length - 1 ? 'rounded-b-md' : ''}`}
              >
                {`${year}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;