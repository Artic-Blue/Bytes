// client/components/Shop/Sidebar.jsx
// client/components/Shop/Sidebar.jsx
import React, { useState } from 'react';

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
      <input type="submit" text="Search" />
    </form>
  );
};

export default SearchBar;
