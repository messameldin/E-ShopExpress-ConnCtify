import React from 'react';
import './Projects.css'; 
import Header from '../../Headers/Header';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Connctify from '../../assets/Connctify.png';


export const Projects: React.FC = () => {
  return (
    <div className='Projects-Page'>
      <div className='Projects-page-top'>
        <Header />
      </div>
        <div className='Projects-page-message-conrainer'>
          <div className='Project-one-page-logo'>
            <Link to="/EShop">
            <img src={Logo} alt="Logo"/>   
            </Link>
          </div>
          <div className='Project-two-page-project'>
            <Link to="/ConnCtify">
            <img src={Connctify} alt="Logo"/>   
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Projects;
