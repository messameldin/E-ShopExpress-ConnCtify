import React from 'react';
import './About.css'; 
import Header from '../../Headers/Header';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export const About: React.FC = () => {
  return (
    <div className='about-Page'>
      <div className='about-page-top'>
        <Header />
      </div>
      <div className='about-page-body'>
        <div className='about-page-message-container'>
          <div className='about-page-experience-message'>Junior React.js developer with one year and six months of experience, I specialize in crafting user-friendly web applications. Proficient in front-end technologies like HTML5, CSS3, JavaScript, and TypeScript, my expertise lies in creating responsive designs using React.js and its ecosystem, including Material-UI and React Router. Additionally, I am familiar with Ionic for mobile app development.</div>
          <div className='download-cv'>
            <a href="/assets/my-cv.pdf" download>
              <DownloadForOfflineIcon/>
              Download CV
            </a>
          </div>
          <div className='about-page-project-button'>
            <a href="/Projects"><button>Projects</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;