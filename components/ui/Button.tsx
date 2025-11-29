import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-500 shadow-md hover:shadow-lg',
    secondary: 'bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-900 shadow-md',
    outline: 'border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white focus:ring-gold-500',
    text: 'text-navy-900 hover:text-gold-600 underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2 rounded-sm',
    md: 'text-base px-6 py-3 rounded-sm',
    lg: 'text-lg px-8 py-4 rounded-md',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;