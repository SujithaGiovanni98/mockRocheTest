import React from 'react';
import AutocompleteInput from './AutocompleteInput';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import { ProductsProvider } from '../context/ProductsContext';
import { SearchProvider } from '../context/SearchContext';

const App = () => (
  <ProductsProvider>
    <SearchProvider>
      <div>
        <h1>Product Search</h1>
        <AutocompleteInput />
        <ProductList />
        <ProductDetails />
      </div>
    </SearchProvider>
  </ProductsProvider>
);

export default App;
