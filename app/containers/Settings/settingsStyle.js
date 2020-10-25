import styled from 'styled-components';

export const SettingStyl = styled.div`
  .ant-tabs-tab-prev.ant-tabs-tab-arrow-show,
  .ant-tabs-tab-next.ant-tabs-tab-arrow-show {
    right: -9px;
    background: #fff;
    height: 95%;
  }
  .ant-tabs-nav {
    background: #fff;
  }
  @media (max-width: 675px) {
    .xs-box {
      padding: 0;
    }
    .xs-padding {
      padding: 0 30px;
    }
    .ant-tabs-nav {
      background: #fff;
    }
    .ant-tabs-ink-bar {
      width: 0 !important;
    }
  }
  .linked-accounts button {
    width: 100%;
  }
  .linked-accounts {
    width: 100%;
  }
  @media (max-width: 740px) {
    .ant-tabs-tab {
      margin: 0 10px 0 0;
    }
    .ant-tabs-tab {
      float: left;
    }
    .ant-tabs-bar {
      border: 0;
    }
  }
  .upPassword {
  }
  .linked-accounts p {
    color: #ffffff;
    font-size: 16px;
    line-height: 18px;
    word-spacing: 0.6px;
    text-align: left;
    font-weight: normal;
    letter-spacing: 0.4px;
  }
  @media (max-width: 767px) {
    .avatar-box {
      min-height: 200px !important;
      margin: 15px 0 !important;
      padding: 15px !important;
    }
    .dsply {
      padding-top: 0 !important;
    }
    .dsply-nme {
      padding-top: 0 !important;
    }
  }
  .avatar-box {
    display: block;
    padding: 15px 20px;
  }
  .avatar-box h2 {
    color: #01b0f2;
    font-size: 16px;
    text-align: left;
    font-weight: bold;
    align-self: start;
    margin-bottom: 30px;
  }
  .linked-accounts button {
    color: #ffffff;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 5px;
    word-spacing: 0.8px;
    letter-spacing: 0.4px;
    border: 1px solid #707070;
    text-transform: uppercase;
  }
  .clrRed {
    background: #ec3c3c !important;
  }
  .clrlight {
    background: #3eb4b0 !important;
  }
  .clrindego {
    background: #7868c9 !important;
  }
  .LinkGoogleBtn {
    padding: 10px 1px;
  }
  .upPassword input:focus {
    box-shadow: none;
    border-color: #01b0f2;
  }
  .upPassword input::placeholder {
    color: #acacac;
  }
  .settings-page{
    height: auto !important;
  }
  .settings-page .avatar {
    padding: 0;
  }
  input {
    height: 36px;
    color: #ffffff;
    font-size: 14px;
    background: #000000;
    border: 1px solid #707070;
    border-radius: 4px !important;
  }
  .dsply {
    padding-top: 30px;
  }
  .dsply-nme {
    padding-top: 60px;
  }
  .ant-row {
    width: 100%;
    margin-bottom: 0;
  }
  .butn {
    background: transparent;
    border: none;
    color: #01b0f2;
    font-size: 16px;
    font-weight: bold;
  }
`;
