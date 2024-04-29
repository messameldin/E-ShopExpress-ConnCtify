import React from 'react';
import { BrowserRouter , Routes,  Route } from 'react-router-dom';
import './App.css';
import {Home} from './Pages/Home Page/Home';
import {About} from './Pages/About Page/About';
import {Contact} from './Pages/Contact Page/Contact';
import {Projects} from './Pages/Projects Page/Projects';
import {ConnCtify} from './Pages/Projects Page/ConnCtify';
import {EShop} from './Pages/Projects Page/EShop';
import { ProductDetailsComponent } from './models/ProductDetails';
import { products } from './models/Products';
const App: React.FC = () => {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/EShop" element={<EShop/>} />
        <Route path="/ConnCtify" element={<ConnCtify/>} />
        <Route path="/ProductDetails/:id" element={<ProductDetailsComponent products={products} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;