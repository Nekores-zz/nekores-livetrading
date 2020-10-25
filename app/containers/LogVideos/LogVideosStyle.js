import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #161923;
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
  .custm-tabs-container {
    padding-bottom: 8px;
    border-bottom: 5px solid #1b1e28;
  }
  .custm-tabs {
    width: 100%;
    margin: 0 5px;
    background: #1e212b;
    border-bottom: none;
    padding: 16px 0 8px 0;
    background-image: linear-gradient(#161923, #20232c);
  }
  .tab-panal li {
    display: inline-block;
  }
  .tab-panal {
    list-style-type: none;
  }
  .tab-panal a:active {
    border-bottom-width: unset;
    border-bottom: 1px solid #aaa;
  }
  .tab-panal a:focus {
    border-bottom-width: unset;
    border-bottom: 1px solid #aaa;
  }
  .tab-panal a:actived {
    border-bottom-width: unset;
    border-bottom: 1px solid #aaa;
  }
  .tab-panal a {
    border-bottom-width: unset;
    border-bottom: 1px solid transparent;
  }
  .tab-panal a {
    color: #fff;
    text-decoration: none;
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
  .filtering {
    top: 10px;
    right: 2%;
    display: flex;
    position: absolute;
    justify-content: center;
  }
  .filtering .ant-input-suffix i {
    color: #fff;
  }
  .filtering .ant-input:hover {
    border-color: #01b0f2;
  }
  .filtering .ant-input {
    color: #fff;
    display: flex;
    border-radius: 0;
    align-self: center;
    background: #0d0e10;
    border-color: #0d668c;
    justify-content: center;
  }
  .filtr-btn i {
    font-size: 20px;
    color: #01b0f2 !important;
  }
  .filtr-btn {
    color: #fff;
    border: none;
    font-size: 16px;
    background: transparent;
  }
`;

export default Wrapper;
