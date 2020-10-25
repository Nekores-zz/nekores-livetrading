import styled from 'styled-components';

const Dropmenu = styled.div`
  z-index: 1111;
  .ant-menu-item a:hover {
    text-decoration: none;
  }
  .about-menu li a {
    color: #fff;
    letter-spacing: 1.6px;
    font-weight: 100;
    text-transform: capitalize;
    font-size: 16px;
  }
  li.ant-menu-item {
    background: #0f2037;
    margin: 0 !important;
  }
  .ant-menu-item:active {
    background-color: #162c4a !important;
  }
  .ant-menu-item:focus {
    background-color: #162c4a !important;
  }
  .ant-menu-item:hover {
    background-color: #162c4a !important;
  }
  .ant-menu {
    border-right: 0 !important;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #162c4a !important;
  }
`;

const Wrapper = styled.div`
  position: relative;
  background: #fff;
  border-bottom: none;
  transition: 0.3s all;
  height: 30px;
  .ant-collapse-header .arrow {
    color: #fff;
  }
  .admin-li a {
    line-height: 41px;
    margin-left: 10px;
    font-size: 20px;
  }
  ul li a {
    font-family: 'Roboto', sans-serif !important;
  }
  .admin-li span {
    width: 41px;
    height: 41px;
    border-radius: 50%;
  }
  .admin-li {
    padding: 15px 0 15px 18px !important;
    display: flex !important;
    alignitem: center;
  }
  .ant-collapse-header i.arrow {
    display: none !important;
  }
  .ant-collapse-header h3 {
    color: #fff;
    margin: 0;
    font-size: 21px;
  }
  ${'' /* @media(max-width:)
  .ant-collapse-header {

  } */}
  .name-lnk {
    padding-left: 20px;
  }
  .ant-collapse-header {
    text-align: left;
    background: #0f2037;
    border-radius: 0 !important;
    padding: 10px 0 10px 25px !important;
  }
  .ant-collapse {
    border: none;
    background-color: #0f2037;
  }

  .ant-collapse-content {
    padding-left: 40px;
    border-radius: 0;
    border: none;
    background-color: transparent;
    border-top: none !important;
  }
  .ant-collapse > .ant-collapse-item {
    border: none;
  }
  .ant-collapse-content-box {
    padding: 0;
  }
  .disply-infomat h3 {
    margin-left: 20px;
  }

  .disply-infomat {
    font-size: 22px;
    color: #fff;
  }
  .ant-menu-horizontal {
    border: none;
    line-height: 48px;
    text-align: right;

    .ant-menu-item {
      background-color: transparent;
      display: inline-block;
      border-bottom: none;
      margin-bottom: 0;
      font-size: 16px;
      color: #fff;
      float: none;
    }
    a {
      font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    text-decoration: none;
    }
    }
    .ant-layout-header {
      height: 50px;
      position: fixed;
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: #162c4a !important;
    }
    .ant-menu-item:hover {
      border-bottom: 2px solid #fff;
    }
  }

  .ant-dropdown {
    right: 0;
  }
  .ant-menu-horizontal .ant-menu-item:hover {
    border-bottom: none;
  }
  .logo {
    display: none !important;
  }
  .main-admin-drop-xs {
    display: none !important;
    padding: 0 27px 27px;
  }
  .dsply-lg .ant-avatar {
    margin-right: 0 !important;
  }
  .setting-admin .ant-avatar {
    margin-right: -5px;
  }
  .setting-admin {
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
  }

  .toggler-btn {
    position: relative;
    background: transparent;
    cursor: pointer;
    height: 37px;
    border: none;
    z-index: 111;
    margin-top: 7px;
  }
  .toggler-cross {
    position: relative;
    background: transparent;
    cursor: pointer;
    height: 37px;
    border: none;
    padding: 0 !important;
  }

  .toggler-cross i {
    color: #fff;
    font-size: 43px;
    cursor: pointer;
    display: block;
    line-height: 10px;
    margin-right: 0;
  }
  .toggler-cross .btnInstant1 {
    position: relative;
  }

  @media (min-width: 769px) {
    width: fit-content;
    .burgr-btn {
      line-height: 0 !important;
    }
    .ant-collapse {
      display: none;
    }
    .disply-infomat .arrow {
      display: inline-block !important;
    }
    .user-name-drop {
      display: flex;
      align-item: center;
      background: #123e78;
      
    }
    .dsply-sm {
      display: none !important;
    }
  }
  .pading {
    padding: 0;
  }
  .user-image {
    display: block;
    position: relative;
    border-radius: 50px;
  }
  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
    width: 100%;
    top: 0;
    left: 0;
    .ant-collapse-content {
      background-color: #0f2037;
    }
    .disply-langue {
      padding-left: 70px !important;
      background: #0f2037 !important;
    }
    .dsply-lg {
      display: none !important;
    }
    .disply {
      display: none !important;
    }
    .setting-admin {
      justify-content: flex-start;
      padding-left: 18px !important;
    }
    .ant-collapse-header li {
      padding-left: 15px !important;
      font-weight: 600;
    }
    .main-admin-drop-lg {
      display: none;
    }
    .main-admin-drop-xs i {
      font-size: 22px;
    }
    .anticon-down {
      display: none;
    }
    .main-admin-drop-xs li {
      font-weight: 600;
    }
    .main-admin-drop-xs {
      padding-left: 0px;
      font-size: 21px;
      display: block !important;
    }
    .main-admin-drop-xs a:hover {
      text-decoration: none;
    }
    .logo {
      display: block !important;
    }
    .ant-menu {
      padding-bottom: 28px;
    }
    .ant-menu-horizontal {
      ${''}
      background: #0f2037 !important;
      text-align: left;
      .ant-menu-item {
        display: block;
        padding-left: 27px;
        font-size: 21px;
      }
      .ant-menu-item a:hover {
        text-decoration: none;
      }
      .ant-menu-item i {
        font-size: 22px;
      }
    }
    .ant-dropdown-menu {
      position: fixed;
    }
  }
`;

const ToggleButton = styled.div`
  text-align: right;
  
  .user-image {
    display: block;
    position: relative;
    border-radius: 50px;
  }
  .small-scn {
    display: flex;
    a {
      line-height: 60px;
    }
    button {
      margin-top: 6px;
    }
  }
  .ant-avatar {
    margin-top: 10px;
  }
  .toggler-btn {
    position: relative;
    background: transparent;
    cursor: pointer;
    height: 37px;
    border: none;
    z-index: 111;
    padding-left: 5px;
  }

  i {
    color: #fff;
    font-size: 43px;
    cursor: pointer;
    display: block;
    margin: -33px 0;
    line-height: 0;
  }
  .toggler-cross {
    position: relative;
    background: transparent;
    cursor: pointer;
    height: 37px;
    border: none;
    z-index: 111;
    margin-top: 7px;
  }

  .toggler-cross i {
    color: #fff;
    font-size: 43px;
    cursor: pointer;
    margin: 0 !important;
    display: block;
    line-height: 0;
  }
  .toggler-cross .btnInstant1 {
    transform: rotate(45deg);
    position: relative;
    top: 0px;
  }
  .toggler-cross .btnInstant2 {
    visibility: visible;
    transform: rotate(-45deg);
  }
  .toggler-cross .btnInstant3 {
    display: none;
  }
  .ant-menu-item {
    padding: 5px;
    padding-left: 0;
  }

  a {
    color: #fff;
    font-size: 15px;
    letter-spacing: 0.3px;
    display: inline-block;
    transform: translateY(-6px);
  }
  @media (min-width: 768px) {
    width: fit-content;
    display: none;
  }
  @media (max-width: 768px) {
    display: block;
    line-height: 38px;
  }
`;

export default Wrapper;

export { ToggleButton, Dropmenu };
