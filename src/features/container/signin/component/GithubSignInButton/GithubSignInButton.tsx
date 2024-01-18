import React from 'react';
import './GithubSignInButton.css';

interface GithubSignInButtonProps {
  onClick?: () => void;
  className?: string;
}

const GithubSignInButton: React.FC<GithubSignInButtonProps> = ({ onClick, className }) => {
  return (
    <button className={`github-sign-in-button ${className}`} onClick={onClick}>
      <img src="/assets/home/github32.png" className="github-logo"  alt={"githubsignin"}/>
      Sign in with Github
    </button>
  );
};

export default GithubSignInButton;
