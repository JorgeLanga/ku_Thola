import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseStyle = 'py-2 px-4 rounded focus:outline-none focus:ring';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-blue-200 text-blue-800 hover:bg-blue-300',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  };

  return (
    <button className={`${baseStyle} ${variantStyles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;