import React from 'react';
import './GoogleSignInButton.css';

interface GoogleSignInButtonProps {
  onClick?: () => void; // Define other props as needed
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick }) => {
  return (
    <button className="google-sign-in-button" onClick={onClick}>
      <img src="../../../../../../public/assets/home/google32.png" className="google-logo" />
      Sign up with Google
    </button>
  );
};

export default GoogleSignInButton;