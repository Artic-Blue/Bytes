import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  > * {
    &:first-child {
      margin: 0;
      img {
        margin: 20px 0;
        width: 100px;
      }
    }
  }

  a {
    text-decoration: none;
    color: black;
    padding: 0 25px;
    font-size: 18px;
  }

  a:visited {
    color: black;
  }

  .active {
    text-decoration: underline;
    text-decoration-color: orange;
  }
`;

export default Container;
