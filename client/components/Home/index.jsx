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
      <StyledLink to="/shop/farmers">
        <ButtonToPage>
          <img src="../images/home-farmer-image.jpeg" alt="" />
          <CenterText>
            Farmers
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
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  position: relative;

  img {
    height: auto;
    width: 100vw;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 7%;
  right: 5%;

  img {
    height: 20vw;
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
  box-shadow: 2px 2px 5px darkgrey;
  img {
    // border-radius: 5px;
    width: 22vw;
    height: 20vh;
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
  opacity: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Home;
