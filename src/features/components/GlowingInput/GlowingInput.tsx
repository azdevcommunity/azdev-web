import React, { useState } from 'react';

const GlowingInput: React.FC = () => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
      if (value === '') {
        setIsFocused(false);
      }
    };
  
    return (
      <div className="relative border border-gray-600 p-2 rounded">
        <label
          className={`absolute left-2 transition-all ${
            isFocused || value ? 'text-blue-500 transform -translate-y-6 scale-75' : 'text-gray-500'
          }`}
          onClick={() => setIsFocused(true)}
        >
          Phone, email, or username
        </label>
        <input
          type="text"
          className="w-full bg-transparent p-1 focus:outline-none"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
    );
  };

export default GlowingInput;