import React from 'react';
import './Home.css'; 
import Header from '../../Headers/Header';

export const Home: React.FC = () => {
  return (
    <div className='Home-Page'>
      <div className='top'>
        <Header />
      </div>
      <div className='Body'>
        <div className='intro-message-conrainer'>
          <div className='name-message'> HEY, I'M MOHAMED ESSAM </div>
          <div className='experience-message'>Welcome to my portfolio, where every project is carefully crafted to create a unique masterpiece of development.</div>
          <div className='project-button'>
            <a href="/Projects"><button>Projects</button></a> {/* Wrap the button in an anchor tag */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
