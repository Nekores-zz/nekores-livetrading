import styled from 'styled-components';
import myImage from '../../assets/callout/bg.png';

const Callout = styled.div`
  background-image: url(${myImage});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  margin: 30px 0;
  margin-left: -30px;
  margin-right: -30px;
  .title {
    padding: 35px 30px;
    letter-spacing: 0.8px;
    color: #fff;
  }
  h2,
  p {
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: white;
  }
  .btn {
    text-align: center;
    padding-top: 70px;
  }
  .btn button {
    padding: 0 55px;
    border-radius: 24px;
  }

  @media (max-width: 991px) {
    .btn {
      padding-top: 0;
      margin-bottom: 20px;
    }
  }
`;

export default Callout;
