import React from 'react';
import './CustomBlueButton.css';

interface CustomButtonProps {
  onClick: () => void;
    className?: string;
    value: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, className="" , value}) => {
  return (
    <button className={`custom-blue-button ${className}`} onClick={onClick}>
        {value}
    </button>
  );
};

export default CustomButton;
