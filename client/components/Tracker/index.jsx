import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Form from './Form/Form';
import List from './List/List';
import { useUser } from '../../context/UserContext';

const Tracker = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [renderCount, setRenderCount] = useState(5);
  const user = useUser();

  const getList = (renderAmount) => {
    axios.get(`/tracker/getList/${renderAmount}/${user}`)
      .then(({ data }) => setThoughtsList(data))
      .catch((err) => console.log('Oops! Coould not get the data requested! :( Here is your error: ', err));
  };

  return (
    <TrackerDiv>


      <StyledBanner>
        <StyledImage>
          <img src="https://fastcdn.impakter.com/wp-content/uploads/2018/09/lifestyle.jpg?strip=all&lossy=1&quality=92&ssl=1" alt="health lady basking in the glory that is life" style={{ width: '750px'
        }} />

        </StyledImage>

      </StyledBanner>
      <Form
        getList={getList}
        renderCount={renderCount}
        user={user}
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


const StyledBanner = styled.div`
  overflow: hidden;
  max-height: 300px;
  max-width: 1000px;

`;

const TrackerDiv = styled.div`
  display: grid;
  overflow: auto;
  padding: 10px;
  font-family: 'Josefin Sans', sans-serif;

`;

const StyledImage = styled.div`
margin-bottom: 50px;
`;

const StyledList = styled(List)`
color: white;
  padding: 10px;
  background-color: green;
`;

export default Tracker;
