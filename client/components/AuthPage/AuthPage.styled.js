import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  display: flex;

  > * {
    flex: 1 1 0px;

    &:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;


      h1 {
        margin: 150px 0 50px 0;
        font-size: 30px;
      }

      &:last-child {
        background-color: red;
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
