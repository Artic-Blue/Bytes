import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => (
  <Homepage>
    <Title>
      <img src="../images/cornucopia.jpg" alt="bountiful bounty of food items" />
      <LogoDiv>
        <img src="../images/best-eats-inc.png" alt="logo" />
      </LogoDiv>
    </Title>
    <Links>
      <StyledLink to="/shop">
        <ButtonToPage>
          <img src="../images/meals.jpg" alt="" />
          <CenterText>
            Meals
          </CenterText>
        </ButtonToPage>
      </StyledLink>
      <StyledLink to="/tracker">
        <ButtonToPage>
          <img src="../images/lifestyle.jpg" alt="" />
          <CenterText>
            Lifestyle
          </CenterText>
        </ButtonToPage>
      </StyledLink>
    </Links>
  </Homepage>
);

const Homepage = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 70vw;
`;

const Title = styled.div`
  display: flex;
  position: relative;

  img {
    height: 50vh;
    width: auto;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 7%;
  right: 5%;

  img {
    height: 10%;
    width: auto;
  }
`;

const Links = styled.div`
  display: flex;
  position: relative;
`;

const ButtonToPage = styled.div`
  display: flex;
  position: relative;
  margin: 5vh 5vw;

  img {
    width: 20vw;
    height: 18vh;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 900;
  font-size: 40px;
  text-decoration: none;
`;

const CenterText = styled.div`
  background: rgba(0, 0, 0, 0.75);
  padding: 4px 8px;
  border-radius: 25px;
  color: white;
  margin: 0;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Home;
