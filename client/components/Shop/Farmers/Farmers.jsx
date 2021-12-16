import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FarmSection = styled.div`
font-weight: 200;
display: flex;
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
  cursor: pointer;
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

const FarmLink = styled.p`
  cursor: pointer;
  &:hover {
    color: #3D8B8E;
  }
  height: 1vh;

`;

const Farmers = () => {
  const [farmersDetails, setFarmersDetails] = useState([]);
  const getFarmers = () => {
    axios.get('http://localhost:3000/shop/farmers')
      .then((result) => {
        setFarmersDetails(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getFarmers, {});
  const navigate = useNavigate();
  return (
    <div>
      <FarmBox>
        <h3>Meet the Farmers</h3>
      </FarmBox>
      {farmersDetails.map((farmer) => (
        <FarmSection>
          <FarmInfo>
            <FarmPhoto src={farmer.farmer_url} alt="" onClick={() => navigate(`/shop/farmers/${farmer.farmer_id}`)} />
            <FarmBox>
              <h3>{farmer.farmer_name}</h3>
              {farmer.farmer_story}
            </FarmBox>
            <FarmLink onClick={() => navigate(`/shop/farmers/${farmer.farmer_id}`)}>
              learn more
            </FarmLink>
          </FarmInfo>
        </FarmSection>
      ))}
    </div>
  );
};

export default Farmers;
