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
      <ButtonToPage>
        <StyledLink to="/shop">
          <img src="../images/meals.jpg" alt="" />
          <CenterText>
            Meals
          </CenterText>
        </StyledLink>
      </ButtonToPage>
      <ButtonToPage>
        <StyledLink to="/tracker">
          <img src="../images/lifestyle.jpg" alt="" />
          <CenterText>
            Lifestyle
          </CenterText>
        </StyledLink>
      </ButtonToPage>
      <ButtonToPage>
        <StyledLink to="/shop/farmers">
          <img src="../images/home-farmer-image.jpeg" alt="" />
          <CenterText>
            Farmers
          </CenterText>
        </StyledLink>
      </ButtonToPage>
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

const ButtonToPage = styled.div`
  display: flex;
  position: relative;
  margin: 5vh 5vw;
  margin-top: 5vh;
  img {
    // border-radius: 5px;
    box-shadow: 2px 2px 5px darkgrey;
    width: 22vw;
    height: 20vh;
  }
`;

const Links = styled.div`
  display: flex;
  position: relative;
`;

const StyledLink = styled(Link)`
  font-weight: 900;
  font-size: 40px;
  text-decoration: none;
`;

const CenterText = styled.div`
  background: rgba(0, 0, 0, 0.75);
  padding: 4px 8px;
  border-radius: 15px;
  color: white;
  margin: 0;
  display: flex;
  position: absolute;
  opacity: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Home;
