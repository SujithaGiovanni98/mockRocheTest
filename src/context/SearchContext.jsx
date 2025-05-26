import React, { createContext, useContext, useState, useMemo } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const value = useMemo(
    () => ({
      searchText,
      setSearchText,
      selectedCategory,
      setSelectedCategory,
      selectedProduct,
      setSelectedProduct,
    }),
    [searchText, selectedCategory, selectedProduct]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
