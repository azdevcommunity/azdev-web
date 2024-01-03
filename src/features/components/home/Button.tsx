import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <button className = {"customButton ml-24 mt-10"} onClick={onClick}>{text}</button>
    );
};

export default Button;
