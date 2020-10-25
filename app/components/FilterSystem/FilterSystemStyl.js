import styled from 'styled-components';
const Wrapper = styled.div`
  width: 99.5%;
  ${'' /* position: absolute;
  z-index: 111;
  margin: 0 4px;
  padding: 50px 0;
  background: #161923;
  opacity: 0.92;
  transition: 0.8s all; */}
  .filtter-container h3 {
    color: #fff;
    font-size: 21px;
  }
  .ant-table-column-has-filters {
    background: #161923;
  }
  .ant-select-selection__choice__remove {
    color: #fff;
  }
  .ant-table-column-has-filters {
    color: #e5e5e5;
  }
  .ant-select-selection__choice {
    padding: 5px 35px;
    height: auto !important;
    background: #123e78;
    color: #fff;
    font-size: 20px;
    border: none;
  }
  @media (max-width: 1367px) {
    .ant-select-selection__choice {
      padding: 5px 20px;
      font-size: 16px !important;
    }
    .ant-select-selection__placeholder {
      font-size: 18px !important;
    }
    .ant-select-selection {
      padding: 5px !important;
    }
    .ant-select-selection-selected-value {
      font-size: 16px !important;
    }
    .ant-select-selection--multiple {
      height: 40px !important;
    }
  }
  .ant-select-arrow {
    color: #2b87e2;
  }
  .custom-filter-dropdown {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background: #fff;
    padding: 8px;
  }
  .ant-select-selection:active {
    box-shadow: none;
  }
  .ant-select-selection:focus {
    box-shadow: none;
    border-color: #01b0f2;
  }
  .heading-three {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .ant-select-search {
    top: -65px;
    position: absolute;
    left: 8px;
  }
  .ant-select-selection {
    background: transparent;
    border-color: #45474f;
    padding: 15px 5px;
    border-radius: 0;
    color: #fff;
  }
  .ant-select-selection--multiple {
    height: 60px;
  }
  @media (min-width: 576px) {
    .ant-select {
      margin-bottom: 40px;
    }
  }
  .ant-select-dropdown-menu-item-selected,
  .ant-select-dropdown-menu-item-selected:hover {
    background-color: #232841 !important;
  }
  .keyverd .ant-select-enabled {
    width: 100% !important;
  }
  .keyverd .ant-select-enabled .ant-select-selection__rendered ul {
    position: absolute;
    width: 226px;
    top: 70px;
  }
  .ant-select-selection__placeholder {
    top: 12px;
    width: 100%;
    position: relative;
    font-size: 24px;
    color: #ddd;
  }
  .ant-select-selection__choice__disabled {
    display: none !important;
  }
  .ant-select-selection-selected-value {
    font-size: 24px;
    color: #e5e5e5;
  }
  .ant-select-selection--single {
    height: auto;
  }
  .ant-select {
    width: 80% !important;
  }
  .altr-div button {
    position: absolute;
    right: 30px;
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 30px;
  }
  @media (max-width: 576px) {
    .incentr {
      text-align: center;
    }
    .ant-select {
      width: 100% !important;
    }
    .heading-three {
      position: relative;
      right: auto;
      top: auto;
    }
    .altr-div {
      display: flex;
      justify-content: space-between;
    }
  }
  .custom-filter-dropdown input {
    width: 130px;
    margin-right: 8px;
  }

  .custom-filter-dropdown button {
    margin-right: 8px;
  }

  .highlight {
    color: #f50;
  }
`;
export default Wrapper;
