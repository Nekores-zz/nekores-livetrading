import styled from 'styled-components';
const SocialStyl = styled.div`
  .avatar-box {
    margin: 0 15px 15px 15px !important;
    padding: 20px;
  }
  .ant-btn {
    width: 316px;
    height: 175px;
    border-radius: 7px;
  }
  .ant-upload.ant-upload-select-picture-card {
    border: 1px solid #acacac;
  }
  .ant-upload.ant-upload-select-picture-card > .ant-upload {
    padding: 0;
  }
  .item {
    width: 100%;
  }
  .avatar-uploader {
    text-align: center;
    display: inline-block;
  }
  @media (max-width: 1020px) {
    .avatar-uploader {
      display: block;
    }
    .ant-upload {
      width: 100%;
    }
    .ant-btn {
      width: 100% !important;
    }
  }
  .ant-btn .anticon {
    font-size: 32px;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    float: none !important;
    display: inline-block;
  }
  .ant-upload .ant-btn::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }
  .ant-upload .ant-btn::after {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }
  .bgimg i {
    color: #fff;
  }
  .bgimg {
    border: 1px solid #acacac;
    borde-radius: 7px;
    background-image: url('/icon-512x512.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat, repeat;
  }
`;

export default SocialStyl;
