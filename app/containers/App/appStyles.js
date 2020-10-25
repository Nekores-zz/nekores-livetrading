import styled from 'styled-components';

const AppWrapper = styled.div`
  position: relative;
  background: #141414;
  height: 100%;
  .logo img {
    height: 30px;
    transform: translateY(-20%);
    @media (max-width: 767px) {
      transform: translateX(-50px);
    }

    i {
      font-size: 17px;
      transform: translateY(-1.5px);
      color: red;
      box-shadow: none;
      opacity: 1;
    }
  }
`;

export default AppWrapper;
