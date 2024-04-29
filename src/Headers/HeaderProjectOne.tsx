import React, { useState } from 'react';
import './HeaderProjectOne.css'; 
import Logo from '../assets/Logo.png';

const HeaderProjectOne: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {

    console.log("Search button clicked with query:", searchQuery);
  };

  return (
    <div className='ProjectOne-Header'>
      <div className='Logo-photo'>
        <img src={Logo} alt="Logo"/>   
      </div>
      <div className='E-ShopExpress'>E-ShopExpress</div>
      <div className='E-ShopExpress-SearchBar'>
        <input 
          type="text" 
          className="SearchBar" 
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button 
          className="SearchButton" 
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
        </div> 
    </div>
  );
};

export default HeaderProjectOne;
