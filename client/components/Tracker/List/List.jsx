/* eslint-disable max-len */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = ({ thoughtsList, getList, renderCount, setRenderCount, }) => {
  useEffect(() => {
    getList(renderCount);
  }, [renderCount]);


  const setRenderCountHandler = () => {
    setRenderCount(renderCount + 4);
  };

  return (
    <>
      {thoughtsList.filter((item) => thoughtsList.indexOf(item) < renderCount - 1).map((item) => <ListItem item={item} />)}
      {
        renderCount > thoughtsList.length ? null
          : <button onClick={() => setRenderCountHandler()}>Load More</button>
      }
    </>
  );
};

export default List;
