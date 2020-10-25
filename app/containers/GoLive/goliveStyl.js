import styled from 'styled-components';

const GoLiveStyls = styled.div`
  position: relative;
  height: 100%;
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 0 15px 15px 15px !important;
    }
    .small-scrn {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .ant-affix {
      width: auto !important;
    }
  }
  .ant-affix {
    left: 15px !important;
    width: 100% !important;
  }
  .ant-affix .tab-panal {
    background: #161923;

  }

  .avatar-box {
    color: #fff;
    margin: 15px;
    display: flex;
    padding: 0 20px;
    flex-wrap: wrap;
    min-height: 332px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center; /* center items vertically, in this case */
    background-color: #101219;
    align-content: space-between;
  }
  .settings-page {
    background-color: #161923;
  }
  .ant-layout {
    height: fit-content;
  }
  .block-heading {
    color: #01b0f2;
    font-size: 16px;
    text-align: left;
    font-weight: bold;
    align-self: start;
    margin-bottom: 30px;
  }
  .block-padding {
    padding: 30px 20px;
  }
  .block-padding p {
    margin-bottom: 30px;
  }
  @media(max-width: 415px) {
    .tab-panal li {
      margin-right: 10px !important;
    }
    .tab-panal a {
      font-size: 16px !important;
    }
  }
  .sb-avatar__text {
    border-radius: 50% !important;
  }
  .textHide {
    display: flex;
    width: 100%;
    color: #fff;
    margin-bottom: 2.66667px;
    position: relative;
    overflow: hidden;
  }
  .truncated-text{
    display: inline-block;
    position: relative;
    white-space: nowrap;
    font-size: 21px;
    text-overflow: ellipsis;
    font-weight: normal;
    width: 100%;
    overflow: hidden;
  }
  
  .boex-heading {
    font-size: 21px;
    line-height: 24px;
    color: #e5e5e5;
    font-weight: normal;
  }

  .truncat {
    color: #256fb9;
    font-size: 18px;
    padding: 8px 20px;
    border: 1px solid #256fb9;
    border-radius: 8px;
    background: transparent;
  }
  .following-box img {
    max-width: 99px;
    max-height: 99px;
    border-radius: 50%;
  }
  .sub-following-box {
    padding: 40px 0;
  }
  .following-main-box {
    padding: 30px;
  }
  .following-box {
    padding: 15px;
    margin-bottom: 20px;
    text-align: center;
    background: #101219;
    border-radius: 11px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
  .ant-tabs-tab {
    color: gray;
    font-size: 18px;
  }
  .ant-tabs-tab-active {
    color: #fff !important;
  }
  .ant-tabs-bar {
    border-bottom: none;
  }
  .custm-tabs {
    border-bottom: none;
    padding: 16px 0 8px 0;
    margin: 0 5px;
    width: 100%;
  }
  .custm-tabs-container {
    padding-bottom: 8px;
  }
  .tab-panal {
    padding-left: 0;
    left: 0;
    list-style-type: none;
  }
  .tab-panal li {
    display: inline-block;
    margin-right: 40px;
  }
  .tab-panal a {
    border-bottom: 1px solid transparent;
    border-bottom-width: unset;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    height: 100%;
    margin: 0;
    padding: 12px 10px;
    box-sizing: border-box;
    position: relative;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    text-decoration: none;
    font-weight: 300;
    font-size: 21px;
    color: gray;
  }
  .active {
    border-bottom: 2px solid #1890ff !important;
    border-bottom-width: unset !important;
    color: #ffffff !important;
  }


  .stream-title {
    background: rgb(16, 18, 25);
    padding: 0 30px 30px 30px;
    margin: 15px;

    .title {
      padding-top: 30px;
    }
    .title h3 {
      color: #01b0f2;
      font-size: 16px;
      font-weight: 300;
      line-height: 18px;
      letter-spacing: 1.4px;
    }
    .title p {
      color: #ffffff;
      line-height: 18px;
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.4px;
      word-spacing: 0.6px;
    }
  }

  .stream-inputs {
    .input {
      text-align: center;
    }
    .input input {
      border-radius: 4px !important;
      background: #161923;
      border-color: #085779;
      color: #fff;
    }
    .input input:hover {
      border-color: #01b0f2 !important;
    }
    .input input:focus {
      box-shadow: none;
    }
    button {
      border-radius: 4px;
      color: #01b0f2 !important;
      border: none;
      font-weight: bold;
      font-size: 16px;
      background: transparent;

      @media (max-width: 777px) and (min-width: 768px) {
        padding: 0 10px;
      }
      color: #fff;
      @media (max-width: 370px) {
        padding: 0 10px;
      }
    }
  }
  .drpdwn {
    overflow: hidden !important;
  }
  .stream-mychannel-button {
    padding-top: 30px;

    .button button {
      border-radius: 4px;
      padding: 9px 27px;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      width: 100%;
      background: transparent;
      color: #01b0f2 !important;
      border: 1px solid #085779;

      @media (max-width: 767px) {
        padding: 9px 10px;
      }
    }

    .button button:focus {
      outline: none;
    }

    @media (max-width: 767px) {
      text-align: center;
    }
  }
`;

export default GoLiveStyls;
