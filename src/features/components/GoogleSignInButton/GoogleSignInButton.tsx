import React from 'react';
import './GoogleSignInButton.css';

interface GoogleSignInButtonProps {
  onClick: () => void; // Define other props as needed
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick }) => {
  return (
    <button className="google-sign-in-button" onClick={onClick}>
      <img src="../../../../public/assets/home/google32.png" alt="Google logo" className="google-logo" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;