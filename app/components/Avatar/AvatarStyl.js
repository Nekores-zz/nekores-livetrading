import styled from 'styled-components';
const AvatarStyl = styled.div`
  .ant-upload {
    border: none;
    border-radius: 50%;
    background-image: url('../../assets/users/user.png');
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
`;

export default AvatarStyl;
