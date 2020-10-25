import styled from 'styled-components';

export const AccountSettingStyl = styled.div`
  background-color: #fff;
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
`;
