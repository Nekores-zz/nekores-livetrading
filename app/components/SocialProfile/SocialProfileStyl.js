import styled from 'styled-components';
const SocialProfileStyl = styled.div`
  .ant-btn {
    width: 316px;
    height: 175px;
    border-radius: 7px;
  }
  .social-box {
    color: #fff;
    margin: 0 15px 15px 15px !important;
    padding: 20px 20px 20px 20px;
    text-align: center;
    background-color: #101219
  }
  .addsocial h4 {
    font-size: 14px;
    line-height: 16px;
    color: #e5e5e5;
    text-align: left;
    margin-bottom: 20px;
  }
  .items h3 {
    color: #019fdb;
  }
  .items {
    width: 100%;
    text-align: left;
  }
  .Save {
    color: #fff;
    height: auto;
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 2px 20px;
    background: #2b87e2;
    border-color: #2b87e2;
  }

  .addsocial input {
    color: #e5e5e5;
    position: relative;
    border-radius: 4px;
    margin-bottom: 25px !important;
    background: #000000;
    padding-right: 30px;
    border-color: #707070;
  }
  .input-icn-bx {
    display: flex;
  }
  .input-icn i {
    position: absolute;
    margin-top: 10px;
    right: 10px;
  }
  .ant-btn .anticon {
    font-size: 32px;
  }
  .siz i {
    font-size: 14px !important;
    position: relative;
  }
  .red {
    background: #2b87e2 !important;
    border-color: #2b87e2 !important;
  }
  .siz {
    margin-left: 15px;
    color: #fff;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: relative;
    background: #f64646;
    border-color: #f64646;
  }
  .input-icn {
    position: relative;
    width: 100%;
  }
  .addsocial input:focus {
    box-shadow: none;
  }
  .addsocial input::placeholder {
    opacity: 1;
    color: #e5e5e5;
  }
  .addsocial {
    width: 100%;
  }
  @media (max-width: 1020px) {
    .item {
      width: 100%;
    }
    .ant-upload {
      width: 100%;
    }
    .ant-btn {
      max-width: 100% !important;
    }
  }
`;

export default SocialProfileStyl;
