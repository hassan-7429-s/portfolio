import React from 'react';

export const Home = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #EFF6FF, white)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Hi, I'm <span style={{ color: '#2563EB' }}>Your Name</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4B5563' }}>
          Welcome to my portfolio
        </p>
      </div>
    </section>
  );
};