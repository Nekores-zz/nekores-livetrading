import styled from 'styled-components';
const Wrapper = styled.div`
  input {
    height: 36px;
    color: #ffffff;
    font-size: 14px;
    background: #000000;
    border: 1px solid #707070;
    border-radius: 4px !important;
  }
  .upPassword input:focus {
    box-shadow: none;
    border-color: #01b0f2;
  }
  .upPassword input::placeholder {
    color: #acacac;
  }
  .avatr {
    color: #fff;
    margin-bottom: 15px;
    display: block;
    padding: 0 20px;
    flex-wrap: wrap;
    padding: 20px 20px 5px 20px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #101219;
    align-content: space-between;
    h3 {
      color: #01b0f2;
      font-size: 16px;
      text-align: left;
      font-weight: 300;
      align-self: start;
      letter-spacing: 1.1px;
      margin-bottom: 30px;
    }
  }
`;

export default Wrapper;
