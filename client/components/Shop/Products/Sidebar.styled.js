import styled from 'styled-components';

const SidebarItem = styled.p`
margin: 2vh;
textAlign: left;
cursor: pointer;
font-size: 1.2em;
`;

const SelectedSidebarItem = styled.p`
margin: 2vh;
textAlign: left;
font-weight: bold;
font-size: 1.2em;
`;

export {
  SidebarItem,
  SelectedSidebarItem,
};
