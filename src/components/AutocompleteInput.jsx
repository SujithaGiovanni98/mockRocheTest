import React, { useState, useMemo, useCallback } from 'react';
import { useProducts } from '../context/ProductsContext';
import { useSearch } from '../context/SearchContext';
import useDebounce from '../hooks/useDebounce';

const AutocompleteInput = React.memo(() => {
  const { products } = useProducts();
  const { searchText, setSearchText } = useSearch();
  const [inputValue, setInputValue] = useState(searchText);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedInput = useDebounce(inputValue, 300);

  const suggestions = useMemo(() => {
    if (!debouncedInput.trim()) return [];
    const lower = debouncedInput.toLowerCase();
    return products
      .filter((p) => p.name.toLowerCase().includes(lower))
      .slice(0, 5);
  }, [debouncedInput, products]);

  const handleSelect = useCallback(
    (name) => {
      setInputValue(name);
      setSearchText(name);
      setIsFocused(false);
    },
    [setSearchText]
  );

  const handleChange = useCallback(
    (e) => {
      setInputValue(e.target.value);
      setSearchText(e.target.value);
    },
    [setSearchText]
  );

  return (
    <div className="">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        placeholder="Search products..."
        className=""
      />
      {isFocused && suggestions.length > 0 && (
        <ul>
          {suggestions.map((s) => (
            <li
              key={s.id}
              onClick={() => handleSelect(s.name)}
              className=""
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default AutocompleteInput;
