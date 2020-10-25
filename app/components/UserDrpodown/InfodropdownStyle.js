import styled from 'styled-components';

export const Infodropdown = styled.div`
  display: inline;
  margin-right: 2px;
  font-weight: 700;
  word-break: break-all;
  .ant-menu-item a:hover {
    text-decoration: none;
  }
  li.ant-menu-item {
    background: rgb(29, 37, 51, 90%);
    margin: 0 !important;
    font-size: 16px;
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
    right: 50px;
  }
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background-color: #162c4a !important;
  }
  h3 {
    color: #01b0f2 !important;
    margin: 0 !important;
    display: inline-block !important;
    font-size: 15px !important;
    font-weight: 700 !important;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #162c4a !important;
  }
  .ant-menu {
    background-color: #1f2735;
    width: 190px;
  }
  .ant-menu-item {
    color: #ffffff;
  }
  .userInfoDropdown a {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .userInfoDropdown {
    background-color: #101219 !important;
    padding: 15px;
    height: auto;
    color: #fff;
    flex-grow: 1;
    text-transform: uppercase;
    font-size: 1.3rem;
    white-space: nowrap;
    margin-left: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ant-badge {
    position: absolute;
    margin-left: -12px;
    margin-top: 20px;
  }
  .ant-badge-status-dot {
    width: 14px;
    height: 14px;
    right: -1px;

  }
  .ant-avatar {
    position: relative;
  }
  .chatUserName {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1600px) {
    .chatUserName {
      font-size: 21px;
    }
    .ant-menu {
      width: 280px !important;
    }
  }
  @media (min-width: 1300px) {
    .ant-menu {
      width: 200px !important;
    }
  }
`;
export default Infodropdown;
