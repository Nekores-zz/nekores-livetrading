import styled from 'styled-components';
const ManageProfileStyle = styled.div`
  .item h3 {
    color: #019fdb;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1.4px;
  }
  .item p {
    color: #fff;
    font-size: 10px;
    word-spacing: 0.6px;
    margin-bottom: 20px;
    letter-spacing: 0.8px;
  }
  .ant-layout {
    height: 100%;
  }
  .ant-layout-content {
    padding-top: 0 !important;
  }
  .save {
    color: #fff;
    height: auto;
    width: 113px;
    padding: 9px;
    font-weight: bold;
    font-size: 16px;
    margin-top: 15px;
    line-height: 16px;
    background: #2b87e2;
    text-transform: uppercase;
    border-color: #2b87e2;
  }
  @media (max-width: 1920px) {
    .ant-layout {
      height: auto !important;
    }
  }
  @media (max-width: 767px) {
    .ant-layout-content {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .avatar-box {
      padding: 15px !important;
      margin: 15px 0 !important;
    }
  }
`;

export default ManageProfileStyle;
