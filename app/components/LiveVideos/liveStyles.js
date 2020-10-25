import styled from 'styled-components';

const LiveWrapper = styled.div`
  position: relative;
  .css-19bon8n {
    background-repeat: no-repeat;
    background-image: radial-gradient(circle 70px, #1d20290d 100%, #1d20290d 0);
    background-color: #191c2663;
    height: 50px;
    animation: 0.8s ease-in-out 0s infinite normal none running animation-16jpnkj !important;
}
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
  @media (min-width: 576px) {
    .fltrClos {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 0 14px 80px 14px !important;
    }
  }
  ${'' /* .ant-input-search input {
    width: 30px;
    padding: 5px !important;
  } */}
  .fltrClos {
    background: transparent;
    position: absolute;
    font-size: 30px;
    right: 10px;
    color: #fff;
    border: 0;
    z-index: 1;
  }
  .displayBlock {
    display: block;
  }

  .ant-tabs-tab-active .ant-tabs-tab {
    font-weight: 100;
    text-transform: capitalize;
    letter-spacing: 1.1px;
  }
  .spinner{
    font-size: 54px;
    z-index: 111111;
    left: 0;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .serch-btn {
    border-radius: 0;
    border-color: #0d668c;
    background: #0d0e10;
    color: #fff;
  }
  .ant-layout {
    background: #161923;
  }
  .noneDisplay {
    margin: 0;
    height: 0;
    opacity: 0;
    width: 100%;
    height: auto;
    z-index: 111;
    padding: 50px 0;
    position: absolute;
    transition: 0.03s all;
    background: rgba(22, 25, 35, 0.92);
    transform: translateY(-500px);
  }
  .filterDiv {
    position: absolute;
    top: 30px;
    opacity: 1;
    width: 100%;
    height: 100%;
    transform: translateY(1);
    transition: 0.03s all;
    z-index: 111;
    margin: 0;
    height: auto;
    padding: 50px 0;
    background: rgba(22, 25, 35, 0.92);
  }
  @media (max-width: 576px) {
    .filterDiv {
      top: -30px !important;
    }
    .ant-affix {
      .filterDiv {
        top: 0px !important;
      }
    }
    .filtering {
      right: 0 !important;
    }
  }
  a:hover {
    text-decoration: none !important;
  }
  .custm-tabs-container {
    padding-bottom: 8px;
    border-bottom: 5px solid #1b1e28;
  }
  .custm-tabs {
    margin: 0;
    border-bottom: none;
    background: #1e212b;
    padding: 16px 0 8px 0;
    background-image: linear-gradient(#161923, #20232c);
  }
  .tab-panal h4:active {
    border-bottom-width: unset;
    border-bottom: 1px solid #aaa;
  }
  .tab-panal h4 {
    border-bottom: 1px solid transparent;
    border-bottom-width: unset;
  }
  .tab-panal h4 {
    margin: 0;
    color: gray;
    height: 100%;
    font-size: 21px;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    padding: 12px 16px;
    text-decoration: none;
    display: inline-block;
    box-sizing: border-box;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .online {
    margin-left: 5px;
    color: #fff;
    margin-top: 5px;
    font-weight: 300;
    letter-spacing: 2.6px;
    text-transform: uppercase;
  }
  .ant-tabs-bar {
    margin: 0 5px;
    background: #1e212b;
    border-bottom: none;
    padding: 16px 0 8px 0;
    background-image: linear-gradient(#161923, #20232c);
  }
  .ant-tabs-nav-container {
    padding-bottom: 8px;
    border-bottom: 5px solid #1b1e28;
  }
  .filtering {
    position: absolute;
    right: 7%;
    display: flex;
    z-index: 1;
    justify-content: center;
  }
  .ant-affix {
    height: 70px;
    z-index: 1111;
    background: #161923;
    width: 100%;
    .filtering {
      top: 10px !important;
      right: 0 !important;
    }
    .filterDiv {
      top: 42px;
    }
  }
  .ant-select-dropdown-menu-item {
    background-color: #000;
  }
  .box-imag img {
    top: 50%;
    left: 50%;
    opacity: 1;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    transform: translate(-50%, -50%);
    animation: b-fade-image-in 300ms 1 linear;
  }
  .active {
    border-bottom: 2px solid #1890ff !important;
    border-bottom-width: unset !important;
    color: #ffffff !important;
  }
  .box-imag:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  .box-imag {
    vertical-align: baseline;
    transition: 0.3s all;
    position: relative;
    background: #000;
    font-size: 100%;
    font: inherit;
    padding: 0;
    margin: 0;
    border: 0;
  }
  @media (max-width: 1020px) {
    .filtering {
      top: -20px !important;
      right: 0 !important;
      width: 100%;
    }
    .ant-input-search {
      width: 98% !important;
      margin-left: 2%;
    }
    .searchbox {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    .filtering {
      right: 0;
    }
  }
  .ant-tabs-nav {
    width: 100%;
  }
  .imageWrapper {
    z-index: 1;
    color: #fff;
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    background: #29374a;
    margin: 5px 0 3px 0;
    transition: 0.3s all;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }
  .imagepop {
    overflow: hidden;
    width: 100%;
    transition: 0.3s all;
  }
  .imagepop img {
    transition: 0.4s all;
  }
  .imageWrapper:hover {
    transform: scale(1.02);
    z-index: 11;
    .box-imag {
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
    justify-content: center;
    border-color: #0d668c;
    background: #0d0e10;
    align-self: center;
    border-radius: 0;
    display: flex;
    color: #fff;
  }
  .filtr-btn i {
    color: #01b0f2 !important;
    font-size: 20px;
  }
  .filtr-btn {
    background: transparent;
    font-size: 16px;
    border: none;
    color: #fff;
  }
  .ant-tabs-tab {
    color: gray;
    font-size: 21px;
    font-weight: 100;
    text-transform: capitalize;
    letter-spacing: 1.1px;
  }
  @media (max-width: 650px) {
    .ant-tabs-tab {
      margin-right: 10px;
      float: left;
    }
    .ant-tabs-ink-bar {
      display: none !important;
    }
  }
  .ant-tabs-tab-active {
    color: #fff !important;
  }

  .ant-tabs-nav-wrap {
    padding-left: 20px;
  }
  .liveImage img {
    position: absolute;
    height: 20px;
    left: 3%;
    top: 5%;
  }
  @media (min-width: 420px) and (max-width: 767px) {
    .col-xs-12 {
      width: 50%;
    }
  }
  .tab-panal li {
    display: inline-block;
  }

  .tab-panal a {
    border-bottom-width: unset;
    border-bottom: 2px solid transparent;
  }
  .tab-panal a {
    text-decoration: none;
  }
  .tab-panal {
    padding-left: 0;
    text-align: left;
    position: relative;
    list-style-type: none;
  }
  .tab-panal a {
    margin: 0;
    color: gray;
    height: 100%;
    font-size: 21px;
    cursor: pointer;
    font-weight: 500;
    padding: 12px 30px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    box-sizing: border-box;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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

export default LiveWrapper;
