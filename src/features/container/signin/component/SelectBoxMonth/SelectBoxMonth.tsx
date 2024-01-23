import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import style from './SelectBoxMonth.module.css';

interface DropdownProps {
  isFocus?: boolean;
  onChange?: (value: string) => void;
  selectedMonthName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ isFocus, onChange, selectedMonthName}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedMonthName);
  const dropdownRef = useRef(null); // Ref for the dropdown
  const [buttonWidth, setButtonWidth] = useState(0); // New state for button width
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isFocus && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isFocus]);



  const toggleDropdown = () => setIsOpen(!isOpen);

  

  const handleSelect = (month: string) => {
    setSelected(month);
    setIsOpen(false);
    if (onChange) {
      onChange(month); // Call the passed onChange callback
    }
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

  console.log('selectedMonthName', selectedMonthName);

  return (
    <div className="relative mt-4 inset-0 z-40 mr-2" ref={dropdownRef} >
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`${style.monthButton} px-4 w-44 py-2 border-1 h-14 ${isOpen ? 'border-blue-500 text-blue-500' : 'border-border-color-100 text-white'} rounded-md bg-transparent flex items-start justify-between flex-col focus:border-blue-500 focus:text-blue-500`}
        type="button"
      >
        <span className={style.monthSelectBox}>Ay</span>
        <div className="flex items-start justify-between flex-row">
          {selectedMonth()}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-5 h-5 ${isOpen && 'transform rotate-180'} transition-transform`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className={`${style.monthList} mt-1 fixed w-44 rounded-md shadow-lg bg-gray-700 z-20  border-white border`} style={{ bottom: "35.5%", width: `${buttonWidth}px` }}>
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