import styled from 'styled-components';

const PopularStyl = styled.div`
  position: relative;
  @media (max-width: 1381px) {
    .ant-layout-content {
      padding: 0 6% 80px 6% !important;
    }
  }
  @media (max-width: 1130px) {
    .ant-layout-content {
      padding: 0 5% 80px 5% !important;
    }
  }
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 0 14px 80px 14px !important;
    }
  }
  .ant-layout {
    background: #161923;
  }
  .filter-div {
    transition: 0.8s all;
  }
  a:hover {
    text-decoration: none !important;
  }
  .custm-tabs-container {
    padding-bottom: 8px;
    border-bottom: 5px solid #1b1e28;
  }
  .custm-tabs {
    border-bottom: none;
    padding: 16px 0 8px 0;
    background: #1e212b;
    margin: 0 5px;
    background-image: linear-gradient(#161923, #20232c);
  }
  .tab-panal {
    text-align: center;
  }
  .tab-panal h4:active {
    border-bottom: 1px solid #aaa;
    border-bottom-width: unset;
  }

  .tab-panal h4 {
    border-bottom: 1px solid transparent;
    border-bottom-width: unset;
  }
  .tab-panal h4 {
    display: inline-block;
    height: 100%;
    margin: 0;
    padding: 12px 16px;
    box-sizing: border-box;
    position: relative;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    color: gray;
    font-size: 21px;
  }

  .imageStyle {
    height: auto;
    width: 100%;
  }
  .ant-tabs-bar {
    border-bottom: none;
    padding: 16px 0 8px 0;
    background: #1e212b;
    margin: 0 5px;
    background-image: linear-gradient(#161923, #20232c);
  }
  .ant-tabs-nav-container {
    padding-bottom: 8px;
    border-bottom: 5px solid #1b1e28;
  }
  .filtering {
    position: absolute;
    top: 28px;
    right: 2%;
    display: flex;
    justify-content: center;
  }
  .ant-tabs-nav {
    width: 100%;
  }
  .imageWrapper {
    position: relative;
    border-radius: 6px;
    background: #29374a;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    display: block;
    overflow: hidden;
    margin: 5px 0 3px 0;
    color: #fff;
    transition: 0.3s all;
    z-index: 1;
  }
  ${'' /* @media (max-width: 1600px) {
    .imageWrapper {
      min-height: 332px;
    }
  } */}
  .imagepop {
    overflow: hidden;
    width: 100%;
  }
  .imagepop img {
    transition: 0.4s all;
  }
  .imageWrapper:hover {
    transform: scale(1.02);
    z-index: 11;
    .imagepop img {
      transform: scale(1.2);
    }
  }
  ${'' /* .imageWrapper {
    @media (min-width: 768px) and (max-width: 991px) {
      min-height: 291px !important;
    }
  } */}
  .filtering .ant-input-suffix i {
    color: #fff;
  }
  .filtering .ant-input:hover {
    border-color: #01b0f2;
  }
  .filtering .ant-input {
    display: flex;
    justify-content: center;
    align-self: center;
    border-radius: 0;
    border-color: #0d668c;
    background: #0d0e10;
    color: #fff;
  }
  .filtr-btn i {
    color: #01b0f2 !important;
    font-size: 20px;
  }
  .filtr-btn {
    background: transparent;
    color: #fff;
    font-size: 16px;
    border: none;
  }
  .ant-tabs-tab {
    color: gray;
    font-size: 21px;
  }
  .ant-tabs-tab-active {
    color: #fff !important;
  }
  .noneDisplay {
    display: none;
  }
  .ant-tabs-nav-wrap {
    padding-left: 20px;
  }
  .liveImage img {
    height: 20px;
    top: 5%;
    left: 3%;
    position: absolute;
  }
  @media (min-width: 420px) and (max-width: 767px) {
    .col-xs-12 {
      width: 50%;
    }
  }
  .no-styl-typ a:hover {
  }
  .ant-col-xs-1,
  .ant-col-sm-1,
  .ant-col-md-1,
  .ant-col-lg-1,
  .ant-col-xs-2,
  .ant-col-sm-2,
  .ant-col-md-2,
  .ant-col-lg-2,
  .ant-col-xs-3,
  .ant-col-sm-3,
  .ant-col-md-3,
  .ant-col-lg-3,
  .ant-col-xs-4,
  .ant-col-sm-4,
  .ant-col-md-4,
  .ant-col-lg-4,
  .ant-col-xs-5,
  .ant-col-sm-5,
  .ant-col-md-5,
  .ant-col-lg-5,
  .ant-col-xs-6,
  .ant-col-sm-6,
  .ant-col-md-6,
  .ant-col-lg-6,
  .ant-col-xs-7,
  .ant-col-sm-7,
  .ant-col-md-7,
  .ant-col-lg-7,
  .ant-col-xs-8,
  .ant-col-sm-8,
  .ant-col-md-8,
  .ant-col-lg-8,
  .ant-col-xs-9,
  .ant-col-sm-9,
  .ant-col-md-9,
  .ant-col-lg-9,
  .ant-col-xs-10,
  .ant-col-sm-10,
  .ant-col-md-10,
  .ant-col-lg-10,
  .ant-col-xs-11,
  .ant-col-sm-11,
  .ant-col-md-11,
  .ant-col-lg-11,
  .ant-col-xs-12,
  .ant-col-sm-12,
  .ant-col-md-12,
  .ant-col-lg-12 {
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export default PopularStyl;
