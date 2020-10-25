import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .ant-layout {
    background: #161923;
  }

  .main-home-box::-webkit-scrollbar {
    width: 6px;
  }

  .main-home-box::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #1c2635;
    border-radius: 10px;
  }

  .main-home-box::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease-in-out;
  }
  .liveImage {
    height: 22px;
    top: 12%;
    left: 3%;
    position: absolute;
    @media (max-width: 550px) {
       {
        top: 17%;
        left: 6%;
      }
    }
    @media (max-width: 892px) and (min-width: 551px) {
       {
        top: 13%;
        left: 5%;
      }
    }
  }
  @media (min-width: 992px) {
    .dplayer-video-current {
      height: 100% !important;
    }
  }
  .css-19bon8n {
    background-repeat: no-repeat;
    background-image: radial-gradient(circle 70px, #1d20290d 100%, #1d20290d 0);
    background-color: #191c2663;
    height: 50px;
    animation: 0.8s ease-in-out 0s infinite normal none running animation-16jpnkj !important;
  }
  .dplayer-video-wrap {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 0;
    padding: 56.25% 0 0 0; /* 100%/16*9 = 56.25% = Aspect ratio 16:9 */
    overflow: hidden;
    border: 0;
  }
  .dplayer-video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .dplayer-video-current {
    display: inline-block;
  }
  .ant-tabs-tab {
    text-transform: capitalize;
  }
  .dplayer-no-danmaku {
    background-color: #272727;
  }
  .userTab:hover {
    text-decoration: none;
  }
  .img-hover .text-img-over img {
    margin-top: 5px;
  }
  .img-hover .text-img-over p {
    padding-left: 15px;
    text-align: left;
  }
  .simple-text-box {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .img-hover .text-img-over {
    display: inline-flex !important;
    background: #353b44;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
  }
  .outer-padings {
    padding: 30px 15px 5px 15px;
  }
  .padings {
    padding: 10px 0;
  }
  .about p {
    font-size: 14px;
    line-height: 16px;
    color: #ddd;
  }
  .paragraps {
    text-align: center;
  }
  .about h2 {
    font-size: 50px;
    color: #eee;
  }
  .about h3 {
    font-size: 27px;
    color: #eee;
  }
  .br50 {
    border-radius: 50%;
  }
  .mini-text-box span {
    font-size: 16px;
  }
  .tittle {
    color: #fff;
  }
  .img-hover-sub {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
  }
  .img-hover {
    overflow: hidden;
  }
  .first-tab .ant-tabs-ink-bar {
    width: 0 !important;
  }
  .see-replays i {
    margin-left: 10px;
    font-size: 16px !important;
  }
  .see-replays {
    margin-left: 10px;
    font-size: 16px !important;
    font-weight: 600;
    color: #eee;
    padding: 30px 0 0 0;
    float: right;
    margin-bottom: 0;
  }
  .userTab span {
    color: #fff;
  }
  .tab-head {
    margin-left: 24px;
    font-size: 27px;
    font-weight: 100;
  }
  @media (max-width: 1375px) and (min-width: 768px) {
    .about h2 {
      font-size: 42px;
    }
  }
  @media (max-width: 1375px) {
    .mini-text-box span {
      font-size: 12px !important;
    }
    .mini-text-box {
      padding-left: 10px !important;
    }
    .tab-head {
      margin-left: 15px;
      font-size: 18px !important;
    }
    .first-tab .ant-tabs-tab {
      padding: 3px 5px 14px 5px !important;
    }
    .ant-tabs-tab {
      font-size: 18px !important;
    }
  }
  .userTab .ant-avatar {
    margin: 0 15px 5px 10px;
  }
  .views-box .anticon {
    font-size: 21px;
    margin-right: 15px;
    color: #fff;
  }
  .social-icon .anticon-twitter {
    background: #0084c1;
  }
  .social-icon .anticon-instagram {
    background: #af2573;
    margin-left: 0;
  }
  .social-icon .anticon-facebook {
    background: #123e78;
  }
  .following-text {
    cursor: pointer;
    display: block;
    margin-top: 2.66667px;
    font-size: 14px;
    align-items: center;
    z-index: 0;
    padding: 8px 16px;
  }
  .boex-heading {
    display: flex;
    width: 100%;
    color: #fff;
    margin-bottom: 2.66667px;
    position: relative;
    overflow: hidden;
  }
  .truncated-text {
    display: inline-block;
    position: relative;
    white-space: nowrap;
    font-size: 21px;
    text-overflow: ellipsis;
    font-weight: normal;
    width: 100%;
    overflow: hidden;
  }
  .pbox {
    font-size: 12px !important;
  }
  .social-icon i {
    height: 54px;
    width: 54px;
    margin-right: 10px !important;
    font-size: 30px !important;
    line-height: 54px;
    border-radius: 50%;
  }
  .social-icon i {
    @media (min-width: 1600px) {
      margin-right: 25px !important;
      margin-left: 10px !important;
    }
    @media (max-width: 1367px) {
      margin-right: 10px !important;
      margin-left: 0px !important;
    }
  }
  @media (max-width: 1367px) {
    .user-image {
      width: 42px !important;
      height: 42px !important;
    }
  }
  
  .views-box h3 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 20px;
    text-align: left;
  }
  .mb0 {
    margin-bottom: 0;
  }
  .views-box {
    color: #bbb;
    font-size: 14px;
    @media (max-width: 1050px) and (min-width: 767px) {
      text-align: center;
    }
  }
  .l-text {
    display: flex;
    text-align: left !important;
  }
  @media (max-width: 575px) {
    .first-tab,
    .ant-tabs {
      display: none;
    }
    
  .user-info {
    margin-top: 0 !important;
    }
  }
  ${'' /* @media (min-width: 768px) {
    .main-home-box {
      height: auto;
    }
  } */}
  @media (min-width: 768px) {
    .main-home-box {
      overflow-y: scroll;
      height: -webkit-fill-available;
    }
  }
  ${'' /* .dplayer-video-wrap::before {
    position: absolute;
    content: '';
    background: #fff;
    height: 100%;
    width: 100%;
    z-index: 1111;
    top: 0;
  } */}
  .dplayer-video-wrap::after {
    position: absolute;
    content: '';
    background: #fff;
    height: 100%;
    width: 100%;
    z-index: 1111;
  }
  
  .video-overlay-video {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0 !important;
    border-radius: 0 !important;
    background-color: rgba(15, 32, 55, 0.93);
    z-index: 2;
    .overlay-off & {
      z-index: 0;
    }
  }
  .controls {
    position: absolute !important;
    width:100%;
    height:8.0971659919028340080971659919028%;
    position:relative;
  }
 
  @media (max-width: 480px) and (min-width: 400px){
    .video-overlay-video {
      height: 37vh !important;
    }
    #video {
      height: 37vh !important;
    }
    
  }
  @media (max-width: 399px){
    .video-overlay-video {
      height: 32.2vh !important;
    }
    #video {
      height: 32vh !important;
    }
    
  }
  @media (min-width: 767px) {
    #video {
      max-height: 100vh !important;
    }
    
  }
  @media (max-width: 767px) and (min-width: 481px){
    .video-overlay-video {
      height: 50vh !important;
    }
    #video {
      height: 50vh !important;
    }
    .ant-tabs-tab {
      font-size: 15px !important;
      margin-right: 0px !important;
      padding: 12px 13px !important;
    }
    .about h2 {
      font-size: 34px !important;
    }
    .user-info {
      display: none;
      margin-top: 0 !important;
    }
  }
  .videos-over {
    top: 48%;
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .videos-over p{
    font-size: 18px;
  }
  .videos-over img{
    margin-right: 20px;
  }
  @media(max-width: 1500px){
    .videos-over img{
      max-width: 260px !important;
    }
    .videospan h2{
      font-size: 26px !important;
    }
    .videospan i{
      font-size: 50px !important;
    }
    .videospan p {
      font-weight: 16px !important;
    }
    .para p {
      font-weight: 16px !important;
    }

  }
  .para {
    display: inline-block;
    text-align: left;
  }
  .videospan h2{
    font-size: 30px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 6px;
  }
  .videospan {
    margin: 0;
    position: absolute;
    top: 45%;
    left: 50%;
    text-align: center;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .videospan i{
    font-size: 57px;
  }
  @media (max-width: 992px) {
    .user-info {
      .social-icon i {
        margin-top: 10px;
      }
      .ant-tabs-extra-content button {
        display: none;
      }
      .ant-tabs-nav .ant-tabs-tab-disabled {
        display: none;
      }
      .ant-tabs-nav .ant-tabs-tab {
        font-size: 12px;
        margin-right: 15px;
      }
      .username-xs {
        display: inherit;
      }
    }
    .hide-xs {
      display: none;
    }
    .see-replays {
      margin-left: 0;
    }
  }

  .user-info {
    margin-top: 10px;

    .folowng-num {
      color: #fff;
      margin-left: 5px;
    }
    .ant-tabs-tab-active {
      color: #fff !important;
    }
    .ant-tabs-nav .ant-tabs-tab {
      color: #bbb;
      font-weight: 300;
      letter-spacing: 1.4px;
      font-size: 21px;
    }

    .username-xs {
      display: none;
      button {
        float: right;
      }
      h3 {
        color: white;
      }
    }

    .ant-tabs-bar {
      margin: 0px 0 5px 0;
      border-color: #13315a;
    }
  }

  .video-overlay {
    z-index: 1;
    color: #fff;
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    background: #29374a;
    margin: 5px 0 3px 0;
    -webkit-transition: 0.3s all;
    transition: 0.3s all;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }
  .ProfileAboutLink:hover {
    text-decoration: none;
  }
  .video-overlay-xs {
    background: #1d2533;
    position: relative;
    width: 100%;
    font-size: 14px;
    padding: 10px 15px;
    color: #fff;
    transition: 0.5s all;
    bottom: 0;
  }
  .video-overlay-xs h5 {
    font-size: 14px;
    margin: 0;
    color: #fff;
  }
  .video-container {
    position: relative;
  }
  .Videos-548 {
    margin-left: 10px;
  }
  .img-over {
    position: relative;
    display: inline-block;
    width: 100%;
    min-height: 160px;
  }
  .date-time {
    color: #929292;
  }
  .user-image {
    display: block;
    position: relative;
    border-radius: 50px;
  }
  .dplayer 
  .dplayer-no-danmaku {
    background: #fff;
  }
  .dplayer-paused
  .imagepop {
    overflow: hidden;
    width: 100%;
    transition: 0.3s all;
  }
  .box-imag:before {
    content: '';
    display: block;
    padding-top: 56.25%;
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
  .following-box img {
    width: 100%;
    height: 100%;
  }
  .sub-following-box {
    padding: 40px 0;
    text-align: center;
  }
  .sub__box {
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
  }
  .following-main-box {
    padding: 30px;
  }
  .following-box {
    padding: 15px;
    margin-bottom: 20px;
    text-align: center;
    background: #101219;
    border-radius: 11px;
  }
  .noVideo {
    position: absolute;
    top: 45%;
    margin: auto;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 892px) {
    .dplayer-no-danmaku {
      margin: 0 !important;
    }

    .Videos-548 .col-xs-12 {
      padding: 10px 10px 5px 5px !important;
    }
  }
  h1 {
    color: white;
  }

  .ant-tabs-nav .ant-tabs-tab .anticon {
    margin-right: 5px;
  }
  @media (max-width: 767px) and (min-width: 560px) {
    .Videos-548 .col-xs-12 {
      width: 50%;
    }
  }
`;

export default Wrapper;
