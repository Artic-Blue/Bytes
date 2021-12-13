import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Form from './Form/Form';
import List from './List/List';

const Tracker = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [renderCount, setRenderCount] = useState(5);
  const getList = (renderAmount) => {
    axios.get(`/tracker/getList/${renderAmount}`)
      .then(({ data }) => setThoughtsList(data))
      .catch((err) => console.log('Oops! Coould not get the data requested! :( Here is your error: ', err));
  };

  return (
    <TrackerDiv>
      <NavBar>
        Hello

      </NavBar>

      <Banner>

        Banner
      </Banner>
      <Form
        getList={getList}
        renderCount={renderCount}
      />

      <StyledList
        thoughtsList={thoughtsList}
        getList={getList}
        renderCount={renderCount}
        setRenderCount={setRenderCount}
      />
    </TrackerDiv>
  );
};

const NavBar = styled.div`
  overflow: hidden;
  background-color: #333;
`;

const Banner = styled.div`
  overflow: hidden;
  background-color: #f3ebc9;
`;

const TrackerDiv = styled.div`
  background-color: #b6e2ff;
  display: grid;
  overflow: auto;
  padding: 10px;
`;

const StyledList = styled(List)`
color: white;
  padding: 10px;
  background-color: green;
`;

export default Tracker;
