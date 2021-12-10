import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './Form/Form';
import List from './List/List';

const Tracker = () => {
  useEffect(() => {
    console.log('This works!');
  }, []);

  return (
    <TrackerDiv>
      <Form />
      <List />
    </TrackerDiv>
  );
};

const TrackerDiv = styled.div`

`;

export default Tracker;
