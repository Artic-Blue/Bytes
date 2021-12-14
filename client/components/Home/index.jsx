import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => (
  <>
    <Title>Home</Title>
    <Links>
      <Link to="/shop">Shop</Link>
      <Link to="/tracker">Tracker</Link>
      <Link to="/shop/farmers">Meet Our Farmers</Link>
    </Links>
  </>
);

const Title = styled.h1`
  font-size: 20vh;
  display: flex;
  width: 50vw;
  height: 30vh;
  position: relative;
  align-items: flex-end;
`;

const Links = styled.div`
display: flex;
width: 95vw;
height: 50vh;
position: relative;
justify-content: space-around;
align-items: flex-end;
`;
export default Home;
