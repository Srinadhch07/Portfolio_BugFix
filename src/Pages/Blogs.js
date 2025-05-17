import React from 'react';
import Header from '../Components/Header';
const Blogs = () => {
  return (
    <div className="blog">
        <h1 className='heading'>My Journey to the Responsive Web Design</h1>
        <h2 class="tagline">-with FreeCodeCamp</h2>
        <p>I'm thrilled to share my experience completing the Responsive Web Design certification on <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>! It's been an incredibly rewarding journey, and I'm excited about the skills I've gained in the world of web development.</p>
        <h2>What I Learned</h2>
        <p>This comprehensive course provided a fantastic foundation in the core languages of the web: <strong>HTML (Hypertext Markup Language)</strong> for structuring content and <strong>CSS (Cascading Style Sheets)</strong> for styling and layout.</p>
        <p>The curriculum is thoughtfully structured, starting with the basics and gradually introducing more advanced concepts. Here's a glimpse of what I worked on:</p>
        <div className='container'>
          <h3>Building Blocks: HTML and Basic CSS</h3>
          <p>The initial projects, like building a <strong>Cat Photo App</strong> and a <strong>Cafe Menu</strong>, were excellent for grasping the fundamental syntax of HTML and the basics of CSS for styling text, images, and basic layouts. It was amazing to see simple code translate into visual elements on a webpage!</p>
        </div>
        <div className='container'>
          <h3 className='middle'>Mastering CSS Techniques</h3>
          <p>As the course progressed, I delved into more sophisticated CSS techniques. Building a set of <strong>Colored Markers</strong> helped solidify my understanding of CSS colors, while creating a <strong>Registration Form</strong> introduced me to working with HTML forms and styling them effectively.</p>
          <p>The <strong>CSS Box Model</strong> became clearer through the <strong>Rothko Painting</strong> project, and learning <strong>CSS Flexbox</strong> by building a <strong>Photo Gallery</strong> was a game-changer for creating flexible and dynamic layouts. Understanding <strong>Typography</strong> by building a <strong>Nutrition Label</strong> was also crucial for creating readable and visually appealing content.</p>
          <p>I also learned about the importance of <strong>Accessibility</strong> by building a <strong>Quiz</strong>, ensuring that web content is usable by everyone, including those with disabilities.</p>
        </div>
        <div className='container'>
          <h3>Responsive Design in Action</h3>
          <p>The latter part of the course focused on the crucial aspect of <strong>Responsive Web Design</strong>. Learning to make webpages adapt to different screen sizes was incredibly empowering. Building a <strong>Photo Gallery with Flexbox</strong> and a <strong>Magazine Article Layout with CSS Grid</strong> showcased the power of these modern layout techniques in creating responsive experiences.</p>
          <p>Working on projects like building a <strong>Piano</strong> further reinforced these concepts and challenged me to think about how elements would reflow and adjust on various devices.</p>

        
        </div>
        <h2>Certification Projects</h2>
        <p>To earn the certification, I had to complete five challenging projects that put my newly acquired skills to the test:</p>
        <ul class="course-list">
            <li><strong>Survey Form</strong> - <span class="completed">Completed</span></li>
            <li><strong>Tribute Page</strong> - <span class="completed">Completed</span></li>
            <li><strong>Technical Documentation Page</strong> - <span class="completed">Completed</span></li>
            <li><strong>Product Landing Page</strong> - <span class="completed">Completed</span></li>
            <li><strong>Personal Portfolio Webpage</strong> - <span class="completed">Completed</span></li>
        </ul>
        <p>These projects required me to apply everything I had learned to create fully functional and responsive webpages. It was a fantastic feeling to see my own projects come to life!</p>

        <h2 class="tagline">Proudly Certified!</h2>
        <p>I'm incredibly proud to have earned the Responsive Web Design certification from freeCodeCamp. This journey has equipped me with valuable skills and a solid foundation for further exploration in web development.</p>
        <a href="https://www.freecodecamp.org/certification/Siri_Guduru/responsive-web-design" class="certificate-link" target="_blank">View My Certification</a>
        <br />
        <p>If you're looking to learn web development, I highly recommend checking out freeCodeCamp. Their curriculum is well-structured, engaging, and completely free!</p>
        <Header />
    </div>
  );
};
export default Blogs;
