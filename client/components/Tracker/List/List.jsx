/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dummyData from './dummy_data';
import ListItem from './ListItem';

const List = ({ thoughtsList, setThoughtsList, getList }) => {
  const [renderAmount, setRenderAmount] = useState(20);

  const [renderCount, setRenderCount] = useState(4);

  useEffect(() => {
    getList();
  }, []);

  const setRenderCountHandler = () => {
    if (renderCount <= thoughtsList.length) {
      setRenderCount((prevRenderCount) => prevRenderCount + 4);
    } else if (renderCount >= thoughtsList.length) {
      setRenderAmount((prevRenderAmount) => prevRenderAmount + 20);
      setThoughtsList(thoughtsList.concat(dummyData.slice(renderAmount, renderAmount + 20)));
      setRenderCount((prevRenderCount) => prevRenderCount + 4);
    }
  };

  return (
    <>
      <h2>List</h2>
      {thoughtsList.filter((item) => thoughtsList.indexOf(item) < renderCount).map((item) => <ListItem item={item} />)}
      <button onClick={() => setRenderCountHandler()}>Load More</button>
    </>
  );
};

export default List;
