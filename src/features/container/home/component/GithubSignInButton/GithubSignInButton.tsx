import React from 'react';
import './GithubSignInButton.css';

interface GithubSignInButtonProps {
  onClick: () => void; // Define other props as needed
}

const GithubSignInButton: React.FC<GithubSignInButtonProps> = ({ onClick }) => {
  return (
    <button className="github-sign-in-button" onClick={onClick}>
      <img src="/assets/home/github32.png" className="github-logo" />
      Sign in with Github
    </button>
  );
};

export default GithubSignInButton;
