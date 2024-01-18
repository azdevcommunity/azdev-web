import React from 'react';
import './GoogleSignInButton.css';

interface GoogleSignInButtonProps {
  onClick?: () => void; // Define other props as needed
  className?: string;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick, className }) => {
  return (
    <button className={`google-sign-in-button ${className}`} onClick={onClick}>
      <img src="/assets/home/google32.png" className="google-logo" />
      Sign up with Google
    </button>
  );
};

export default GoogleSignInButton;