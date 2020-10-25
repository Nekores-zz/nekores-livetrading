import styled from 'styled-components';
const TosStyle = styled.div`
  position: relative;
  background: #212c3d;
  height: auto;
  .tos-page {
    @media (min-width: 992px) {
      display: block;
      width: 960px;
      max-width: 100%;
      margin: 0 auto;
    }
    @media (min-width: 767px) and (max-width: 991px) {
      display: block;
      width: 960px;
      max-width: 100%;
      margin: 0 auto;
    }
  }
  .privacy-Text {
    padding: 64px 0;
  }
  .bui-padding {
    padding-top: 64px;
  }
  h1 {
    font-size: 42px;
    font-weight: 100;
    text-align: center;
    line-height: 1.1;
    color: #01b0f2;
    margin: 0;
    padding-top: 28px;
  }
  .ant-menu-item {
    text-align: right;
  }
  .ant-tabs-tab {
    color: #fff;
  }
  .ant-tabs-tab:hover {
    color: #01b0f2 !important;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: #01b0f2 !important;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: transparent;
    color: #01b0f2;
  }
  .bold {
    color: #0075d5;
  }
  .list_heading {
    margin-left: 20px;
  }
  .knoledg {
    font-size: 18px;
    font-weight: 300;
    word-spacing: 8px;
  }
  h4 {
    color: #01b0f2;
    text-decoration: none;
    transition: color 150ms;
    font-size: 16px;
    font-weight: normal;
    line-height: 32px;
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 16px;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    line-height: 32px;
    letter-spacing: 0.01em;
  }
`;

export default TosStyle;
