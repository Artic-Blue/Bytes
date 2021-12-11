import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListItem = ({ item }) => (
  <>
    <h1>{item.tracker_id}</h1>
    <h1>Food For Thought: </h1>
    <h2>{item.thought}</h2>
    {/* <br /> */}
    <h1>Feeling of the day: </h1>
    <h2>{item.feeling_id}</h2>
    {/* <br /> */}
    <h1>Date: </h1>
    <h2>{item.track_date}</h2>
    <br />
  </>
);

export default ListItem;
