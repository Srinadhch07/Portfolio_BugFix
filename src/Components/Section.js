import React from 'react';
import './styles/Section.css';
import pic from './assets/images/pic.jpg';

const Section = () => {
  return (
    <div className='sections'>
      <div className='sections_container'>
        <div className='section_img'>
          <img src={pic} alt="Profile" />
        </div>

        <div className='section_content'>
          <h1>Siri Guduru</h1>
          <p>Bridging design and development with seamless user experiences.</p>
          <p>Crafting clean, elegant, and scalable front-end solutions.</p>
          <p>Driven by passion for innovation and creativity in web development.</p>
          <p>Responsive design enthusiast & detail-oriented developer.</p>
          <p>Transforming ideas into interactive digital realities.</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
