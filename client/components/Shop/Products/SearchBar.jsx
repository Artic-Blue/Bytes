// client/components/Shop/Sidebar.jsx
// client/components/Shop/Sidebar.jsx
import React, { useState } from 'react';
import SearchButton from './SearchBar.styled';

const SearchBar = ({ setCategory }) => {
  const [text, setText] = useState('');

  return (
    <form onSubmit={() => setCategory(text)}>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <SearchButton type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
