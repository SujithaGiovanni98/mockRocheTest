import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ProductsProvider } from './context/ProductsContext';
import { SearchProvider } from './context/SearchContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </ProductsProvider>
);
