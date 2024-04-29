import './ProductDetails.css';
import { Product } from './Product';
import { GetProductDetails } from '../services/GetProductDetails';
import HeaderProjectOne from '..//Headers/HeaderProjectOne';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


export function ProductDetailsComponent({ products }: { products: Product[] }) {
  const product = GetProductDetails({ products });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-list-PD">
          <div className='ProjectOne-page-top'> 
      <HeaderProjectOne />
      </div>
      <div className='productdetails-opions'>
      <Link to="/EShop"><HomeIcon /></Link>
        </div>
      <div className="product-item-PD">
      <div className='right-part'>
        <img className='product-image-PD' src={product.image} alt="Productimage" /> </div></div>
        <div className='left-part'>
        <div className="product-name-PD">{product.name}</div>
        <div className="product-price-PD">${product.price}</div>
        <div className="product-color-PD">{product.color}</div>
        <div className="product-description-PD">
          {product.description} </div>
        <button className="Order-now-PD">Order Now</button>
        </div>
    </div>
  );
}