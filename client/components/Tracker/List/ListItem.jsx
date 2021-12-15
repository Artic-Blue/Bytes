import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListItem = ({ item }) => (
  <>
    <h1>On this day</h1>
    <h2>{item.thought}</h2>
    {/* <br /> */}
    <h1>Feeling of the day: </h1>
    <h2>{item.feeling_id}</h2>
    {/* <br /> */}
    <h1>Date: </h1>
    <h2>{item.track_date.split('T')[0]}</h2>
    <br />
  </>
);

export default ListItem;
