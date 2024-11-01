import React from 'react';

interface ButtonProps {
    label: string;
    secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, secondary }) => {
  return (
    <button 
      className={`font-medium text-sm rounded-full px-4 py-2 
        ${secondary ? 'bg-none text-blue-600 border-[1px] border-blue-600' : 'bg-blue-600 text-white border-none'}`}>
      {label}
    </button>
  );
};

export default Button;
