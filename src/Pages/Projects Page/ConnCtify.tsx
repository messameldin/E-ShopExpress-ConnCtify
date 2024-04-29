import React from 'react';
import './ConnCtify.css';
import Notifications from '../../models/Notifications'; 
import Connctify from '../../assets/Connctify.png';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';






export const ConnCtify: React.FC = () => {
  return (
    <div className='ProjectTwo-Page'>
      <div className='ProjectTwo-page-top'>
      <div className='ConnctifyLogo'>
      <img src={Connctify} alt="Connctify"/>
      </div>
      <div className="ProjectTwo-options">
        <Link to="/Home">Home</Link>
        <Link to="/Projects">Projects</Link>
        <div className='CallIcon'>
      <CallIcon   />
      </div>
      <div className='VideoCallIcon'>
      <VideoCallIcon   />
      </div>
      </div>
      </div>
        <div className='ProjectTwo-page-message-container'>
          <Notifications /> 
        </div>
      </div>
        );
};

export default ConnCtify;
