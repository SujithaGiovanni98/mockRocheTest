import React, { useMemo } from 'react';
import { useProducts } from '../context/ProductsContext';
import { useSearch } from '../context/SearchContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useProducts();
  const { searchText, selectedCategory } = useSearch();

  const filteredProducts = useMemo(() => {
    const lower = searchText.toLowerCase();
    return products.filter((p) => {
      const matchesName = p.name.toLowerCase().includes(lower);
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      return matchesName && matchesCategory;
    });
  }, [products, searchText, selectedCategory]);

  if (filteredProducts.length === 0) {
    return <p className="text-center">No products found.</p>;
  }

  return (
    <div className="">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default React.memo(ProductList);
