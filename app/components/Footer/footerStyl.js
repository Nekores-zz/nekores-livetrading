import styled from 'styled-components';
const WraperFooter = styled.div`
  background: #0f2037;
  padding: 50px 0;
  color: #f7f7f7;
  .ant-layout {
    background: #0f2037;
  }
  @media (min-width: 1600px) {
    #mainFooter .ant-layout-content {
      padding: 0 14.5% !important;
    }
  }
  @media (max-width: 1600px) {
    #mainFooter .ant-layout-content {
      padding: 0 11.5% !important;
    }
  }
  @media (max-width: 1200px) {
    #mainFooter .ant-layout-content {
      padding: 0 3.5% !important;
    }
  }
  @media (max-width: 991px) {
    #mainFooter .ant-layout-content {
      padding: 0 2% !important;
    }
    ul {
      padding-left: 5px !important;
    }
  }
  @media (max-width: 576px) {
    .margn-t {
      text-align: center;
      margin-top: 50px;
    }
  }

  h3 {
    color: #f7f7f7;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
  .newsletter {
    margin-bottom: 15px;
  }
  #mainFooter .ant-layout-content {
    margin-top: 0;
  }
  ul li {
    margin-bottom: 5px;
  }
  ul a {
    color: #f7f7f7;
    font-size: 14px;
    font-weight: 300;
  }
  .social-icon span {
    color: #f7f7f7;
  }
  .social-icon .ant-input-search {
    max-width: 270px;
  }
  .social-icon i.anticon {
    color: #f7f7f7;
    margin-right: 20px;
  }
  .copyright {
    font-size: 10px;
  }
  .ant-input-search.ant-input-search-enter-button > .ant-input {
    padding: 10px 5px 14px 10px !important;
    background: transparent;
    border: 1px solid #fff;
    color: #f7f7f7;
    height: 40px;
  }
  input::placeholder {
    color: #f7f7f7;
  }
  .ant-input-suffix span {
    color: #2699fb !important;
  }
  .ant-input-search > .ant-input-suffix > .ant-input-search-button {
    background: #fff;
    height: 40px;
  }
  .adres a {
    font-size: 12px !important;
  }
`;
export default WraperFooter;
