import styled from 'styled-components';

const DiscriptionStyl = styled.div`
  .item {
    width: 100%;
  }

  .ant-btn {
    width: 316px;
    height: 175px;
    border-radius: 7px;
  }
  .descript-box {
    color: #fff;
    margin-bottom: 15px;
    padding: 20px;
    text-align: center;
    background-color: #101219;
  }
  .cancel span {
    font-size: 16px;
  }
  .ant-radio-button-wrapper:first-child {
    border: 1px solid transparent;
  }
  .cancel {
    color: #fff;
    height: auto;
    width: 113px;
    padding: 9px;
    font-weight: bold;
    font-size: 16px;
    margin-top: 15px;
    line-height: 16px;
    background: #0f2037;
    border-color: #0f2037;
    border: 1px solid #0f2037;
    text-transform: uppercase;
  }
  .Save {
    color: #fff;
    height: auto;
    margin-top: 15px;
    padding: 2px 20px;
    background: #2b87e2;
    border-color: #2b87e2;
    border: 1px solid #2b87e2;
  }
  .ant-btn .anticon {
    font-size: 32px;
  }
  textarea.ant-input {
    color: #fff;
    resize: none;
    min-height: 132px;
    border-radius: 7px;
    border-color: #acacac;
    background: transparent;
    margin-bottom: 15px;
  }
  textarea.ant-input:focus {
    box-shadow: none;
  }
`;

export default DiscriptionStyl;
