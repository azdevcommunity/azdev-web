import React from 'react';

type FooterLinkProps = {
  name: string;
  url: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ name, url }) => (
  <a href={url} className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
    {name}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black  mb-40">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <FooterLink name="About" url="/about" />
          <FooterLink name="Help Center" url="/help" />
          {/* Add more links as needed */}
        </div>
        <div className="text-gray-600">&copy; 2024 X Corp.</div>
        <div className="flex space-x-4">
          <FooterLink name="Privacy Policy" url="/privacy" />
          <FooterLink name="Terms of Service" url="/terms" />
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;