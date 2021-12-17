import styled from 'styled-components';

const Div = styled.div`
  height: 95vh;
  width: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const FlexBoxContainer = styled.div`
  display: flex;
  width: 95vw;
  position: relative;
`;

const SidebarContainer = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
const SearchAndProductsContainer = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
  flex-direction: column;
`;

export {
  Div,
  FlexBoxContainer,
  SidebarContainer,
  SearchAndProductsContainer,
};
