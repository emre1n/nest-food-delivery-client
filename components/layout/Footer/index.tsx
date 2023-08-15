import React from 'react';

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="bg-secondary-bg">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-primary">
          {copyrightText} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
