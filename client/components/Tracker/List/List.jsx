import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dummyData from './dummy_data';
import ListItem from './ListItem';

const List = () => {
  const [thoughtsList, updateThoughtsList] = useState([]);
  const [renderCount, updateRenderCount] = useState(4);

  useEffect(() => {
    updateThoughtsList(dummyData);
  }, []);

  return (
    <>
      <h2>List</h2>
      {thoughtsList.filter((item) => thoughtsList.indexOf(item) < renderCount).map((item) => <ListItem item={item} />)}
      <button onClick={()=>updateRenderCount(renderCount + 4)}>Load More</button>
    </>
  );
};

export default List;
