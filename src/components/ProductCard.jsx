import React from 'react';
import { useSearch } from '../context/SearchContext';

const ProductCard = ({ product }) => {
  const { setSelectedProduct } = useSearch();

  return (
    <div
      onClick={() => setSelectedProduct(product)}
    >
      <h3 className="text-lg">{product.name}</h3>
      <p className="text-sm">{product.category}</p>
      <p className="font-bold">{product.price.toFixed(2)} Rs 1000</p>
      <p>
        {product.inStock ? 'In stock' : 'Out of stock'}
      </p>
    </div>
  );
};

export default React.memo(ProductCard);
