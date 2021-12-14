import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  > * {
    &:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        margin: 150px 0 50px 0;
        font-size: 30px;
      }

      &:last-child {
        flex-grow: 1;
      }
    }
    &:last-child {
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 30px 0 0 0;
      }
    }
  }
`;

export default Container;
