/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dummyData from './dummy_data';
import ListItem from './ListItem';

const List = ({ thoughtsList, getList, renderCount, setRenderCount }) => {


  useEffect(() => {
    getList(renderCount);
  }, [renderCount]);

  const setRenderCountHandler = () => {
    setRenderCount(renderCount + 4);
  };

  return (
    <>
      <h2>List</h2>
      {thoughtsList.filter((item) => thoughtsList.indexOf(item) < renderCount - 1).map((item) => <ListItem item={item} />)}
      {
        renderCount > thoughtsList.length ? null
          : <button onClick={setRenderCountHandler}>Load More</button>
      }
    </>
  );
};

export default List;
