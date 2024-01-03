import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className = {"customButton ml-24"} onClick={onClick}>{children}</button>
    );
};

export default Button;
