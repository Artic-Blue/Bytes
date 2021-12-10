/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dummyData from './dummy_data';
import ListItem from './ListItem';

const List = () => {
  const [renderAmount, updateRenderAmount] = useState(20);
  const [thoughtsList, updateThoughtsList] = useState([]);
  const [renderCount, updateRenderCount] = useState(4);

  useEffect(() => {
    updateThoughtsList(dummyData.splice(0, renderAmount));
  }, []);

  const updateRenderCountHandler = () => {
    if (renderCount + 1 < thoughtsList.length) {
      updateRenderCount(renderCount + 4);
      console.log('Render Count: ', renderCount);
      console.log('Pre Render Amount: ', renderAmount);
    } else if (renderCount + 1 > thoughtsList.length) {
      updateRenderAmount(renderAmount + 20);
      console.log('Render Amount: ', renderAmount);
      updateThoughtsList(thoughtsList.concat(dummyData.splice(renderAmount - 20, renderAmount)));
      updateRenderCount(renderCount + 4);
      console.log('Updated Render Count: ', renderCount);
      console.log('Actual Array Of Data: ', thoughtsList);
      console.log('Updated Render Amount: ', renderAmount);
    }
  };

  // Bugs* whenlist reaches 40 render amount needs to be updated before list can be updated
  // When renderCount reaches 40 renderAmount is alreadyat 40 and jumps to 60 then the list reloads and there is no data rendered to page

  /*

  const updateRenderCountHandler = () => {
    if (renderCount + 1 < thoughtsList.length) {~
      updateRenderCount(renderCount + 4);
      console.log('Render Count: ', renderCount)
    } else if (renderCount + 1 > thoughtsList.length) {
      updateRenderAmount(renderAmount + 20);
      console.log('Render Amount: ', renderAmount)
      updateThoughtsList(dummyData.splice(0, renderAmount));
      updateRenderCount(renderCount + 4);
      console.log('Updated Render Count: ', renderCount)

    }
  };

  */~

  return (
    <>
      <h2>List</h2>
      {thoughtsList.filter((item) => thoughtsList.indexOf(item) < renderCount).map((item) => <ListItem item={item} />)}
      <button onClick={() => updateRenderCountHandler()}>Load More</button>
    </>
  );
};

export default List;
