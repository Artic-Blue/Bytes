import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Form from './Form/Form';
import List from './List/List';

const Tracker = () => {
  useEffect(() => {
    console.log('This works!');
  }, []);
  const [thoughtsList, setThoughtsList] = useState([]);
  const getList = () => {
    axios.get('/tracker/getList')
      .then(({ data }) => setThoughtsList(data))
      .catch((err) => console.log("didn't get the data with error: ", err));
  }

  return (
    <TrackerDiv>
      <NavBar>
        Hello

      </NavBar>

      <Banner>

        Banner
      </Banner>
      <Form getList={getList} />

      <StyledList
        thoughtsList={thoughtsList}
        getList={getList}
        setThoughtsList={setThoughtsList}
      />
    </TrackerDiv>
  );
};

const NavBar = styled.div`
  overflow: hidden;
  background-color: #333;
`

const Banner = styled.div`
  overflow: hidden;
  background-color: #f3ebc9;
`

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
