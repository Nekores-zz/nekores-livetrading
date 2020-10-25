import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  background-color: #161923;
  overflow: hidden;
  .dplayer {
    display: none !important;
  }
  .comment-box-chat {
    display: none;
  }
  .palayerbox {
    width: 100%;
    padding-left: 8px;
  }
  .about {
    padding-right: 10px;
  }
  .ant-tabs-tab {
    font-weight: 300 !important;
  }
  .tab-head{

    font-weight: 400 !important;
  }
  .main-home-box {
    width: 100%;
  }
  .views-box {
    text-align: left !important;
  }
  @media (max-width: 768px) {
    .first-tab,
    .ant-tabs {
      display: block !important;
    }
    .outer-padings {
      padding-top: 10px !important;
    }
    .ant-tabs-tab p {
      font-size: 15px !important;
    }

    .social-icon .anticon {
      height: 36px !important;
      width: 36px !important;
      font-size: 20px !important;
      line-height: 36px !important;
    }
  }
  @media (min-width: 768px) {
    .video-info-clas {
      display: none;
    }
  }
`;

export default Wrapper;
