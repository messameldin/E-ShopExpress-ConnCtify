import React from 'react';
import { ProductComponent } from '../models/Product';

interface GetProductProps {
  products: any[];
}

const GetProduct: React.FC<GetProductProps> = ({ products }) => {
  return (
    <div className='products'>
      {products.map(product => (
        <div key={product.id}>
          <ProductComponent product={product} />
        </div>
      ))}
    </div>
  );
};

export default GetProduct;