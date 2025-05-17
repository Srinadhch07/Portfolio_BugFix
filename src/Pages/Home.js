import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Section from '../Components/Section';
import Contact from '../Components/Contact'; 

const Home = () => {
  return(
    <div className='home'>
      <Header />
      <Main />
      <Section />
      <Contact />
    </div>
  );
};

export default Home;
