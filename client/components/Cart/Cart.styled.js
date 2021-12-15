import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
`;

const SubItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export {
  ListContainer,
  ItemContainer,
  SubItemContainer,
};
