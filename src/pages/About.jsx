import React from 'react';

export const About = () => {
  return (
    <section id="about" style={{ 
      padding: '5rem 1rem',
      backgroundColor: 'white'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          About Me
        </h2>
        <p style={{ 
          color: '#4B5563', 
          textAlign: 'center',
          lineHeight: '1.8'
        }}>
          This is the about section. Add your content here.
        </p>
      </div>
    </section>
  );
};