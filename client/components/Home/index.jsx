import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => (
  <>
    <Title>
      <LogoDiv>
        <img src="../images/best-eats-inc.png" alt="logo" />
      </LogoDiv>
      <img src="../images/cornucopia.jpg" alt="bountiful bounty of food items" />
    </Title>
    <Links>
      <StyledLink to="/shop/meals">
        <ButtonToPage>
          <img src="../images/meals.jpg" alt="" />
          <CenterText>
            Meals
          </CenterText>
        </ButtonToPage>
      </StyledLink>
      {/* <StyledLink to="/shop/products">
        <ButtonToPage>
          <img src="../images/groceries.jpeg" alt="" />
          <CenterText>
            Shop Groceries
          </CenterText>
        </ButtonToPage>
      </StyledLink> */}
      <StyledLink to="/tracker">
        <ButtonToPage>
          <img src="../images/lifestyle.jpg" alt="" />
          <CenterText>
            Lifestyle
          </CenterText>
        </ButtonToPage>
      </StyledLink>
    </Links>
  </>
);

const LogoDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 7%;
  right: 5%;
  img{
    max-height: 25vh;
    max-width: auto;  }
`;

const Title = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  img {
    max-height: 70vh;
    max-width: auto;
  }
`;

const Links = styled.div`
  display: flex;
  width: 50vw;
  height: 30vh;
  position: relative;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const ButtonToPage = styled.div`
display: flex;
text-align: center;
overflow: hidden;

img {
  max-width: 30vw;
  max-height: 26vh;
}
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: 900;
  font-size: 40px;
  text-decoration: none;
`;

const CenterText = styled.div`
  display: flex;
  position: relative;
  top: 110px;
  right: 50%;
`;

export default Home;
