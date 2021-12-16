import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const feelingsArray = [
  'https://emoji.gg/assets/emoji/9528-sad-sweat.png',
  'https://emoji.gg/assets/emoji/9004-super-frown.png',
  'https://emoji.gg/assets/emoji/2542-imposter.png',
  'https://emoji.gg/assets/emoji/8664-coolangel.png',
  'https://emoji.gg/assets/emoji/8548-birthday.png'
 ];

const ListItem = ({ item }) => (
  <>
    <h1>On this day</h1>
    <h2>{item.thought}</h2>
    {/* <br /> */}
    <h1>Feeling of the day: </h1>
    <img src={feelingsArray[item.feeling_id - 1]} width="64px" height="64px" alt="birthday" />
    {/* <br /> */}
    <h1>Date: </h1>
    <h2>{item.track_date.split('T')[0]}</h2>
    <br />
  </>
);

export default ListItem;
