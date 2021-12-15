// client/components/Shop/Sidebar.jsx
// client/components/Shop/Sidebar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchButton = styled.input`
  border: none;
  color: white;
  background: #ffe5b4;
  height: 1.5vw;
  cursor: pointer;
  &:hover {
    background: #ffa500;
  }`;

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
