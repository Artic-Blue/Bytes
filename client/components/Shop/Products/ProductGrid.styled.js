import styled from 'styled-components';

const GridFlex = styled.div`
height: 250px;
width: 200px;
display: flex;
position: relative;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
border-bottom: 1px solid orange;
`;

const PaddedImages = styled.img`
  height: 130px;
  width: 200px;
  box-shadow: 2px 2px 5px darkgrey;
  object-fit: cover;
  cursor: pointer;
`;

const FarmDiv = styled.p`
  color: grey;
  cursor: pointer;
  &:hover {
    color: #3D8B8E;
  }
`;

const ProductDiv = styled.div`
  font-size: 1.2rem;
  inline-size: 200px;
  overflow-wrap: break-word;
`;

const PriceSpan = styled.span`
font-weight: bold;
color: black;
width: 200px;
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const CartButton = styled.button`
  right: -.8vw;
  top: -.8vh;
  position: absolute;
  font-size: 1rem;
  border: none;
  color: white;
  background: #262730;
  width: 2vw;
  height: 1.5vw;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: #7D8491;
  }`;

export {
  GridFlex,
  PaddedImages,
  FarmDiv,
  ProductDiv,
  PriceSpan,
  CartButton,
};
