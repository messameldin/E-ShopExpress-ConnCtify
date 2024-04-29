import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import myPhoto from '../assets/myPhoto.jpg';

const Header: React.FC = () => {
  return (
    <div className='Home-Header'>
      <div className='my-photo'>
        <img src={myPhoto} alt="MyPhoto"/>   
      </div>
      <div className='My-Name'>Mohamed Essam</div>
      <div className="options">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link  to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;