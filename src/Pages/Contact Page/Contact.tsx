import React from 'react';
import './Contact.css'; 
import Header from '../../Headers/Header';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export const Contact: React.FC = () => {
  return (
    <div className='Contact-Page'>
      <div className='Contact-Page-top'>
        <Header />
      </div>
      <div className='Contact-Page-body'>
        <div className='Contact-details-container'>
          <div className='email-address'> <EmailIcon/>messameldin5@gmail.com</div>
          <div className='Phone-number'><CallIcon/> (+20)1029904980</div>
          <div className='contact-download-cv'>
            <a href="/assets/my-cv.pdf" download>
              <DownloadForOfflineIcon/>
              Download CV
            </a>
          </div>
        </div>
      </div>
</div>
  );
};

export default Contact;
