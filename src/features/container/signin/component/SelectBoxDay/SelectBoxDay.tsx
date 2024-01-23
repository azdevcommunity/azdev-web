import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import style from './SelectBoxDay.module.css';


interface DropdownProps {
  onChange?: (value: string) => void;
  selectedDayName?: string;
}
const Dropdown: React.FC<DropdownProps> = ({ onChange, selectedDayName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedDayName);
  const [buttonWidth, setButtonWidth] = useState(0);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (day: string) => {
    setSelected(day);
    setIsOpen(false);
    if (onChange) onChange(day);
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-5 h-5 ${isOpen && 'transform rotate-180'} transition-transform`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
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