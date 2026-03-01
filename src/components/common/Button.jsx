import React from 'react';

export const Button = ({ 
  children, 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
};