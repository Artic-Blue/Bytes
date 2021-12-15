import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const DescriptionTitle = styled.div`
display: flex;
flex: 1;
font-size: 12px;
color: #91968A;
font-weight: bold;
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
  }
`;

const FarmerLongStory = styled.div`
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
  }
`;

const FarmerDetail = () => {
  const params = useParams();
  const [farmerDetails, setFarmerDetails] = useState({});
  const getFarmerDetails = () => {
    axios.get(`http://localhost:3000/shop/farmers/${params.farmerId}`)
      .then((result) => {
        const farmerInfo = result.data[0];
        // farmerInfo.farmer_long_story = farmerInfo.farmer_long_story.split(' ');
        setFarmerDetails(farmerInfo);
        console.log(farmerInfo);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getFarmerDetails, {});

  return (
    <>
      <h1>Meet Our Farmer</h1>
      <FarmSection>
        <FarmInfo>
          <FarmPhoto src={farmerDetails.farmer_url} alt="" />
          <FarmBox>
            <h3>{farmerDetails.farmer_name}</h3>
            {farmerDetails.farmer_story}
          </FarmBox>
        </FarmInfo>
        <FarmerLongStory>
          {farmerDetails.farmer_long_story}
        </FarmerLongStory>
      </FarmSection>
    </>
  );
};

export default FarmerDetail;
