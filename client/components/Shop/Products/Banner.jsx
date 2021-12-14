// client/components/Shop/Sidebar.jsx
import React from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`
width: 106vw;
height: 25vh;
margin-left: -3vw;
margin-right: -2vw;
margin-bottom: 3vh;
display: flex;
align-items: center;
`;

const BannerImg = styled.img`
width: 103vw;
height: 20vh;
margin-left: -3vw;
margin-bottom: 3vh;
`;

const BannerTextDiv = styled.div`
  height: 20 vh;
  margin-left: 10vw;
  position: absolute;
  font-size: 5em;
  color: white;
`;

const Banner = ({ category }) => {
  const cat = category === 'Meal' ? 'Meals' : category;
  return (
    <BannerDiv>
      <BannerImg src="/images/carrot-2743498_960_720.jpeg" />
      <BannerTextDiv>{cat}</BannerTextDiv>
    </BannerDiv>
  );
};

export default Banner;
