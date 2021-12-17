import React from 'react';
import styled from 'styled-components';
import Line from './Line.jsx';

const feelingsArray = [
  'https://emoji.gg/assets/emoji/9528-sad-sweat.png',
  'https://emoji.gg/assets/emoji/9004-super-frown.png',
  'https://emoji.gg/assets/emoji/2542-imposter.png',
  'https://emoji.gg/assets/emoji/8664-coolangel.png',
  'https://emoji.gg/assets/emoji/8548-birthday.png',
];

const emotionalArray = [
  'Super frowny... maybe even a little teary',
  'Kinda frowny... day could\'ve been better',
  'Neutral kinda day... Could go either way... *Shrugs',
  'Feeling prime, What a great day!',
  'THE. BEST. KIND. OF. DAY.',
];

const ListItem = ({ item }) => (
  <>
    <ItemHeader>On this day</ItemHeader>
    <br />
    <text style={{ flex: 1, flexWrap: 'wrap' }}>{item.thought}</text>
    <br />
    <FeelingHeader>{emotionalArray[item.feeling_id - 1]} </FeelingHeader>
    <br />

    <img src={feelingsArray[item.feeling_id - 1]} width="64px" height="64px" alt="birthday" />
    <br />
    <h1>Date: {item.track_date.split('T')[0]}</h1>
    <Line />
    <br />
  </>
);

const ItemHeader = styled.h1`
font-size: 1.5rem;
`;

const FeelingHeader = styled.h1`
font-size: 1.2rem;
`;

export default ListItem;
