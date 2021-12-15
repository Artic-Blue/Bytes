import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 20px;
  }

  ul {
    width: 100%;

    li {
      &:not(:last-child) {
        border-bottom: 1px solid black;
      }
    }
  }
`;

const ItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SubItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;

  > *  {
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 10%;
  height: 150px;
  margin: 15px;

  img {
    object-fit: cover;
    width: 100%;
    height: 150px;
  }
`;

export {
  ListContainer,
  ItemContainer,
  SubItemContainer,
  ImageContainer,
};
