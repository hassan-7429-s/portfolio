import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#111827', 
      color: 'white', 
      padding: '2rem',
      textAlign: 'center'
    }}>
      <p>Built with React & Tailwind CSS</p>
      <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginTop: '0.5rem' }}>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
};