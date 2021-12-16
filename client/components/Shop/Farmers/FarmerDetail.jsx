import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  TotalSection,
  FarmSection,
  FarmInfo,
  FarmPhoto,
  FarmBox,
  FarmerLongStory,
} from './FarmerDetail.styled';

const FarmerDetail = () => {
  const params = useParams();
  const [farmerDetails, setFarmerDetails] = useState({});
  const getFarmerDetails = () => {
    axios.get(`http://localhost:3000/shop/farmers/${params.farmerId}`)
      .then((result) => {
        const farmerInfo = result.data[0];
        setFarmerDetails(farmerInfo);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getFarmerDetails, {});

  return (
    <TotalSection>
      <h1>Meet the Farmer</h1>
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
    </TotalSection>
  );
};

export default FarmerDetail;
