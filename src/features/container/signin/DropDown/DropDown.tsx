import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Month');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (month: string) => {
    setSelected(month);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-4 inset-0  z-40"> {/* z-10 sets the z-index to ensure it's on top */}
      <button
        onClick={toggleDropdown}
        className={`px-4 w-32 py-2 border-2 ${isOpen ? 'border-blue-500 text-blue-500' : 'border-gray-600 text-white'} rounded-md bg-transparent flex items-center justify-between`}
        type="button"
      >
        {selected}
        <span className={`${isOpen && 'rotate-180'} transition-transform`}>
          {/* Include an icon for the dropdown arrow here */}
        </span>
      </button>
      {isOpen && (
        <div className="absolutemt-1 fixed  w-32 rounded-md shadow-lg bg-gray-700 z-20"> {/* z-20 ensures this div is above the button */}
          <ul className="text-white overflow-auto max-h-60"> {/* max-h-60 controls the maximum height of the dropdown, change as needed */}
            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
              <li
                key={month}
                onClick={() => handleSelect(month)}
                className={`px-4 py-2 bg-custom-color-900 hover:bg-blue-500 hover:text-white cursor-pointer ${selected === month ? 'bg-blue-500 text-white' : ''}`}
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
