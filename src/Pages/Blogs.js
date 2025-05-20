import React from 'react';
import '../Components/styles/blogs.css';
import Header from '../Components/Header';

const Blogs = () => {
  return (
    <div className="blog">
      <h1 className='heading'>My Journey to the Responsive Web Design</h1>
      <h2 className="tagline">-with FreeCodeCamp</h2>
      <p>
        I'm thrilled to share my experience completing the Responsive Web Design certification on{' '}
        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a>! It's been an incredibly rewarding journey, and I'm excited about the skills I've gained in the world of web development.
      </p>

      <h2>What I Learned</h2>
      <p>This comprehensive course provided a fantastic foundation in the core languages of the web: <strong>HTML</strong> and <strong>CSS</strong>.</p>
      <p>The curriculum is thoughtfully structured. Here's a glimpse of what I worked on:</p>

      <div className='container'>
        <h3>Building Blocks: HTML and Basic CSS</h3>
        <p>Projects like <strong>Cat Photo App</strong> and <strong>Cafe Menu</strong> helped me learn the fundamentals.</p>
      </div>

      <div className='container'>
        <h3 className='middle'>Mastering CSS Techniques</h3>
        <p>I explored advanced topics like <strong>forms</strong>, <strong>box model</strong>, <strong>flexbox</strong>, <strong>typography</strong>, and <strong>accessibility</strong>.</p>
      </div>

      <div className='container'>
        <h3>Responsive Design in Action</h3>
        <p>Projects like <strong>Photo Gallery</strong>, <strong>Magazine Layout</strong>, and <strong>Piano</strong> helped me master responsiveness.</p>
      </div>

      <h2>Certification Projects</h2>
      <ul className="course-list">
        <li><strong>Survey Form</strong> - <span className="completed">Completed</span></li>
        <li><strong>Tribute Page</strong> - <span className="completed">Completed</span></li>
        <li><strong>Technical Documentation Page</strong> - <span className="completed">Completed</span></li>
        <li><strong>Product Landing Page</strong> - <span className="completed">Completed</span></li>
        <li><strong>Personal Portfolio Webpage</strong> - <span className="completed">Completed</span></li>
      </ul>

      <h2 className="tagline">Proudly Certified!</h2>
      <p>I'm proud to have earned this certification. It has given me confidence and momentum to keep learning.</p>
      <a
        href="https://www.freecodecamp.org/certification/Siri_Guduru/responsive-web-design"
        className="certificate-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Certification
      </a>

      <p>If you're looking to learn web development, check out freeCodeCamp. It's completely free and well-structured!</p>

      <Header />
    </div>
  );
};

export default Blogs;
