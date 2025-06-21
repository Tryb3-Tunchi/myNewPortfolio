// src/components/UI/NavigationButton.tsx
import React from "react";

interface NavigationButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left p-4 transition-all duration-300 rounded-lg
        transform hover:scale-105 active:scale-95
        ${
          isActive
            ? "bg-teal-100 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 translate-x-2 shadow-md"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-2 hover:shadow-sm"
        }
        border border-transparent hover:border-teal-200 dark:hover:border-teal-800
      `}
    >
      {label}
    </button>
  );
};

export default NavigationButton;
