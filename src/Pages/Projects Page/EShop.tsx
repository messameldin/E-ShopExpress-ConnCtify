import React from 'react';
import './EShop.css'; 
import GetProduct from '../../services/GetProduct';
import { products } from '../../models/Products';
import HeaderProjectOne from '../../Headers/HeaderProjectOne';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const EShop: React.FC = () => {

  return (
    <div className='ProjectOne-Page'>
      <div className='ProjectOne-page-top'> 
      <HeaderProjectOne />
      </div>
    
      <div className="ProjectOne-options">
      <div className='Cart'>
      <ShoppingCartIcon/>
      </div>
        <Link to="/Home">Home</Link>
        <Link to="/Projects">Projects</Link>
        <div className='SupportAgentIcon'>
        <SupportAgentIcon/>
        <p>Contact 12223</p>
      </div>
      </div>
        <div className='ProjectOne-page-message-conrainer'>
              <GetProduct products={products} />
          </div>
        </div>
  );
};

export default EShop;