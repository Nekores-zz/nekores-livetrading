import styled from 'styled-components';
const UploadAvatarStyl = styled.div`
  ${'' /* .ant-upload.ant-upload-select-picture-card > .ant-upload {
    display: inline !important;
  }
  .ant-upload.ant-upload-select-picture-card:hover {
    border-color: transparent;
  } */}
  ${'' /* .ant-upload.ant-upload-select-picture-card {
    border-radius: 50%;
    width: 130px;
    height: 130px;
    line-height: 42px;
  }
  .center__box h5 {
    text-align: left;
  } */}
  .avatar-uploader {
    display: inline-block;
  }
   .ant-upload {
    border: none;
    border-radius: 50%;
  }
  .item {
    text-align: left;
  }
  .avatars-box {
    color: #fff;
    margin-bottom: 15px;
    padding: 20px 20px 20px 20px;
    text-align: center;
    background-color: #101219;
  }
  .ant-upload-list-item {
    display: none;
  }
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
    padding: 0;
    overflow: hidden;
    margin-right: 0;
  }
  .items {
    color: #fff;
    margin-bottom: 10px;
    display: inline-block;
  }
  .ant-upload.ant-upload-select-picture-card > .ant-upload img {
    height: 100%;
    width: 100%;
  }
  .ant-upload.ant-upload-select-picture-card > .ant-upload {
    padding: 0 !important;
    width: 128px;
    height: 128px;
    oveflow: hidden;
  }
  .avatar__box {
    margin: 50px 0 30px 0;
  }
  .skip__btn {
    background: transparent;
    border: none;
    color: #fff;
  }

  .anticon {
    font-size: 44px;
  } 
  p {
    color: #fff;
    text-align: left;
  }
`;
export default UploadAvatarStyl;
