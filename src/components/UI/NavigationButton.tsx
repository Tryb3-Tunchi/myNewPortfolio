// src/components/UI/NavigationButton.tsx
import React from 'react';

interface NavigationButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left p-4 transition-all duration-300 
        ${isActive 
          ? 'bg-teal-400/10 text-teal-400 translate-x-2' 
          : 'hover:bg-gray-800 hover:translate-x-2'
        } rounded-lg
      `}
    >
      {label}
    </button>
  );
};

export default NavigationButton;