import { useParams } from 'react-router-dom';
import { Product } from '../models/Product';

export function GetProductDetails({ products }: { products: Product[] }) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  return product;
}