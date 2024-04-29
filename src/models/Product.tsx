import { Link } from 'react-router-dom';
import './Product.css';

export interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  description: string;
  image: string;
}

export function ProductComponent({ product }: { product: Product }) {
  return (
    <div className="product-list">
      <div className="product-item">
        <div className='Product-Image'>
        <img src={product.image} alt="ProductImage" />
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-color">{product.color}</div>
        <div className="product-description">
          <p>{product.description}</p>
        </div>
        <Link to={`/ProductDetails/${product.id}`} className="product-details">
          Product Details
        </Link>
      </div>
      </div>
  );
}
