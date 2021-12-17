import styled from 'styled-components';

const TotalSection = styled.div`
  h1 {
    text-align: left;
  }
`;

const FarmSection = styled.div`
font-weight: 200;
display: flex;
flex-direction: column;
padding: 2vw;
width: 62vw;
border-top: 1px solid #CFCECA;
margin-bottom: 50px;
`;

const FarmInfo = styled.div`
  display: flex;
  flex: 5;
  color: #383634
  `;

const FarmPhoto = styled.img`
  display: flex;
  width: 25vw;
  object-fit: cover;
  padding-left: 10px;
`;

const FarmBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  color: #383634;
  padding-left: 25px;
  line-height: 1.5em;
  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5em;
    vertical-align: text-top;
  }
`;

const FarmerLongStory = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  color: #383634;
  line-height: 1.5em;
  padding-left: 10px;
  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5em;
  }
`;

export {
  TotalSection,
  FarmSection,
  FarmInfo,
  FarmPhoto,
  FarmBox,
  FarmerLongStory,
};
