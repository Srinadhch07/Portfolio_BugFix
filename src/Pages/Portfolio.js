import React from 'react';
import Header from '../Components/Header';

const Portfolio = () => {
  return (
    <div className="page">
      <h2>My Projects</h2>
      <ul>
        <li>🔐 RFID Door Locking System</li>
        <li>🦯 Smart Blind Stick</li>
        <li>🛒 E-Commerce Website (in progress)</li>
        <li>🌐 Portfolio Website</li>
      </ul>
      <Header />
    </div>
  );
};

export default Portfolio;
