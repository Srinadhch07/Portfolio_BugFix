import React, { useState } from 'react';
import './styles/Header.css';
import { Close, MenuBookOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="header_logo">
        <h1>About Me</h1>
      </div>
      <nav className={`navbar ${active ? 'active' : ''}`}>
        <div className="close">
          <Close onClick={showMenu} />
        </div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio" >Portfolio</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="changer">
        <MenuBookOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
