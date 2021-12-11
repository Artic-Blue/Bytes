/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dummyData from './dummy_data';
import ListItem from './ListItem';

const List = () => {
  const [renderAmount, setRenderAmount] = useState(20);
  const [thoughtsList, setThoughtsList] = useState([]);
  const [renderCount, setRenderCount] = useState(4);

  useEffect(() => {
    setThoughtsList(dummyData.slice(0, renderAmount));
  }, []);

  const setRenderCountHandler = () => {
    if (renderCount <= thoughtsList.length) {
      setRenderCount((prevRenderCount) => prevRenderCount + 4);
      console.log('Render Count: ', renderCount);
      console.log('Pre Render Amount: ', renderAmount);
    } else if (renderCount >= thoughtsList.length) {
      setRenderAmount((prevRenderAmount) => prevRenderAmount + 20);
      console.log('Render Amount: ', renderAmount);
      setThoughtsList(thoughtsList.concat(dummyData.slice(renderAmount, renderAmount + 20)));
      setRenderCount((prevRenderCount) => prevRenderCount + 4);
      console.log('Updated Render Count: ', renderCount);
      console.log('Actual Array Of Data: ', thoughtsList);
      console.log('Updated Render Amount: ', renderAmount);
    }
  };

  // Bugs* whenlist reaches 40 render amount needs to be updated before list can be updated
  // When renderCount reaches 40 renderAmount is alreadyat 40 and jumps to 60 then the list reloads and there is no data rendered to page

  /*

  const setRenderCountHandler = () => {
    if (renderCount + 1 < thoughtsList.length) {~
      setRenderCount(renderCount + 4);
      console.log('Render Count: ', renderCount)
    } else if (renderCount + 1 > thoughtsList.length) {
      setRenderAmount(renderAmount + 20);
      console.log('Render Amount: ', renderAmount)
      setThoughtsList(dummyData.splice(0, renderAmount));
      setRenderCount(renderCount + 4);
      console.log('Updated Render Count: ', renderCount)

    }
  };

  */

  return (
    <>
      <h2>List</h2>
      {thoughtsList.filter((item) => thoughtsList.indexOf(item) < renderCount).map((item) => <ListItem item={item} />)}
      <button onClick={() => setRenderCountHandler()}>Load More</button>
    </>
  );
};

export default List;
