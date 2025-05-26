import React from 'react';
import { useSearch } from '../context/SearchContext';

const ProductDetails = () => {
  const { selectedProduct, setSelectedProduct } = useSearch();
  if (!selectedProduct) return null;

  return (
    <div className="">
      <div className="">
        <button
          onClick={() => setSelectedProduct(null)}
        >
          Click
        </button>
        <h2 className="">{selectedProduct.name}</h2>
        <p className="">
          Category: {selectedProduct.category}
        </p>
        <p className="">
          {selectedProduct.price.toFixed(2)} Rs 1000
        </p>
        <p className="">
          {selectedProduct.description}
        </p>
        <p className="">
          {selectedProduct.inStock ? 'Available' : 'Out of stock'}
        </p>
        <p className="">Rating: {selectedProduct.rating}/5</p>
      </div>
    </div>
  );
};

export default ProductDetails;
