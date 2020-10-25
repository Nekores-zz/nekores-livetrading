import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background: #161923;
  }
  
  .zeeee{
    position: relative;
    color: #fff;
  }
  a{

  font-family: 'Roboto', sans-serif !important;
  }
  button{
    font-family: 'Roboto', sans-serif !important;

  }
  p{
    font-family: 'Roboto', sans-serif !important;
  }
  li{
    font-family: 'Roboto', sans-serif !important;
  }
  span{
    font-family: 'Roboto', sans-serif !important;
  }
  .loader-hidden {
    display: none;
  }
  .loader-active {
    display: block;
  }
  .ant-steps-dot{
    justify-content: inherit;
  }
  .ant-steps-item-icon {
    margin-left: -2px !important;
  }
  .ant-steps-dot .ant-steps-item-tail {
    left: -8px !important;
  }
  .ant-steps-item-wait
  .ant-steps-item-icon
  > .ant-steps-icon
  .ant-steps-icon-dot {
  background-color: #fff;
  }
  .loader {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex: 0 1 auto;
    flex-shrink: 0;
    max-width: 100%;
    flex-basis: 100%;
    -ms-flex: 0 1 auto;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
  .ball-pulse-sync > div {
    width: 15px;
    margin: 2px;
    height: 15px;
    border-radius: 100%;
    display: inline-block;
    background-color: #fff;
    animation-fill-mode: both;
  }
  .ball-pulse-sync > div:nth-child(1) {
    animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
  }
  #app {
    background-color: #252525;
    height: 100%;
    width: 100%;
  }
  .ant-layout {
    background: #161923;
  }
  .fix-container{
    background: #161923;
  }
  @media(max-width: 767px) {
    .fix-container{
      background:#0d0d0d;
    }
  }
  
  .ant-layout-content{
    padding-top: 50px;
  }

 
  @media(min-width: 992px){
    
    .settings-page .setting-bar{
      margin-top: 0 !important;
    }
    .ant-layout-header{
      position: fixed;
      z-index: 99;
      width: 100%;
    }
  }
  .ant-notification{
    right: 0;
    bottom: 0;
    left: 0;
    top: 50px !important;
    z-index: 1111;
    margin: auto;
  }
  .no-padding: {
    padding: 0;
  }

  .no-pr: {
    padding-right: 0;
  }

  .no-pl:{
    padding-left: 0;
  }

  button {
    background-color: #01B0F2;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .fadeTranslate-enter {
    opacity: 0;
  }

  .fadeTranslate-enter.fadeTranslate-enter-active {
    opacity: 1;
    transition: opacity 800ms ease-in;
  }

  .fadeTranslate-exit {
    opacity: 0;
  }

  // header styles
  #header-bar {
    justify-content: flex-end;
    display: flex;
  }
  .ant-menu-item{
    padding-left: 10px;
    padding-right: 10px;
  }
  .ant-menu-horizontal > .ant-menu-item > a {
    color: white;
  }
  .ant-dropdown > .ant-dropdown-menu > .ant-dropdown-menu-item {
    padding-left: 10px;
    padding-right: 10px;
  }
  .fadeTranslate-exit.fadeTranslate-exit-active {
    opacity: 1;
    transition: opacity 800ms ease-in, transform 800ms ease-in-out;
  }
  @media(max-width: 768px) {
  .ant-layout-header{
    padding: 0 15px;
  }
    .opened_nav {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: 0.6s all ease-in-out;
    }
    .closed_nav {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-100%);
      transition: 0.6s all ease-in-out;
    }
  }
  
  @media (min-width: 991px) {
    .container {
      width: 900px;
    }
  }
  input{
    border-radius: 0;
  }
  
  .ant-tabs-nav-container-scrolling {
    padding-right: 0;
    padding-left: 0;
  }
  .ant-modal-close-x{
    color: #a9b7b7;
  }
  .chatblock{
    background: #fff !important;
  }
  @media(max-width 479px){
    .login-model {
      margin: 0;
      top: 50px;
    }
  }
  .login-model {
    padding-bottom: 0;
    
    .ant-modal-body {
      height: 415px;
      overflow: hidden;
      
      button, input {
        border-radius: 0;
      }
      .login-sm-btns  {
        color : #c0c1c1;
      }
      @media (min-width: 992px){
        .login-sm-btns {
          display: none;
        }
      }
      @media (max-width: 992px){
        
        .no-pr {
          display: none;
        }
        .logo-xs{
          height: 90px;
          padding : 15px 0 29px 0;
        }
        .login-sm-btns {
          text-align: center;
        }
      }
      @media (max-width: 322px){
        .twitter-xs{
          margin-top: 16px;
        }
      }
      hr.or-hr{
        padding: 0;
        border: none;
        border-top: 1px solid #333;
        color: #c0c1c1;
        margin-top: 10px;
      } 
      hr.or-hr:after{
        content: 'or';
        display: inline-block;
        position: relative;
        top: -0.9em;
        font-style: italic;
        font-size: 1.5rem;
        padding: 0 1.7em;
        background: #131313;

      }
      .s-xs{
        font-size : 30px;
        height : auto;
        padding : 10px 19px;
        position : relative;
        border: none;
      }
      .fb-xs {
        background : #385773;
      }
      .g-xs{
        background : #754738;
        margin-left: 16px;
      }
      .twitter-xs{
        background : #376778;
        margin-left: 16px;
      }
      .no-pr{
        padding-right: 0 !important;
      }
      .login-overlay span {
        opacity: 1 !important;
      }
      .ant-checkbox-wrapper{
        font-family: 'Roboto', sans-serif !important;

      }
      .ant-checkbox{

        font-family: 'Roboto', sans-serif !important;
      }
      .fb-style, .kep-login-facebook{
        background-color: #085cb1;
        border-color: #085cb1;
        width: 100%;
        color: #fff;
        text-transform: capitalize;
        padding: 4px 0;
        margin-bottom: 20px;

      }
      .fb-style:hover {
          background-color: #3B5998;
        }
        
      }
      .g-style {
        background-color: #c2310b;
        border-color: #c2310b;
        margin-bottom: 20px;
        width: 100%;
        padding: 4px 0;
        color: white;
        border-color: #c2310b;
      }
      .g-style:hover{
        background-color: #C20806;
      }

      .twitter-style {
        background-color: #0b90c2;
        border-color: #0b90c2;
        width: 100%;
        color: #fff;
        font-size: 16px;
        padding: 4px 0 10 0;
        margin-bottom: 20px;
      }
      .twitter-style:hover{
        background-color: #00B6F1;
        color: white;
      }

    }
    .login-overlay{
      text-align: center;
      padding: 70px 30px;
      background-color: rgba(0, 0, 0, .2);
    }
    .login-content-left {
      background-position: center;
      background-size: cover;

    p{
      color: white;
      font-size: 20px;
      font-weight: 100;
      line-height: 133%;
      margin-top: 7px;
    }

    .logo {
      height: 60px;
    }
  }
  .ant-tooltip-arrow{
    margin-left: -11px;
    border-right-color: #123e78 !important;
    top: 46% !important;
    left: 0px !important;
    border-width: 7px 7px 7px 0 !important;

  }
  .ant-tooltip{
    padding-left: 0 !important;
    margin-left: -10px;
    z-index: 111;

  }

  .ant-tooltip-inner{
    border-radius: 0 8px 8px 0 !important;
    margin-left: -4px !important;
    background: #123e78;
    padding: 10px 12px !important;
    min-height: 46px;
  }

  @media(max-width: 1375px){
    .ant-tooltip-inner{
      padding: 8px 12px !important;
      min-height: 38px;
    }
  }

  .stream-mychannel-button .ant-modal .ant-modal-content{
      background: #fff !important;
    }
  .ant-tooltip-open{
    border-radius: 0 !important;
  }
  @media(max-width: 991px) {
  .login-model .ant-modal-body{
    height: auto;
    }
  }


  .login-content-right .ant-tabs-nav{
    width: 50%;
  }
  .login-content-right{
    background-color: #131313;
    color: white;
    height: 50%;
    padding: 40px;
    .ant-tabs-nav-container {
      margin-bottom: -4px;
    }
    .ant-input {
      background: #212121;
      border-color: #212121;
      color: #fff;
      padding: 8px 18px;
      border-radius: 4px !important;
    }
    .ant-tabs-ink-bar {
      height: 4px;
    }

    .ant-tabs-bar {
      border-bottom: 4px solid #777;
      
      .ant-tabs-ink-bar {
        width: 100% !important;
      }

      .ant-tabs-nav .ant-tabs-tab {
        text-align: center;
        width: 100%;
        font-weight: 300;
        font-size: 16px;
        padding: 16px;
        margin: 0;
        color: #999;
      }
      
      .ant-tabs-nav .ant-tabs-tab-active {
        color: #1890ff;
      }
    }
  }
  @media(max-width: 816px) and (min-width: 767px){
    .login-model{
      width: auto !important;
    }
  }
  .ant-modal .ant-modal-content{
    background-color: #131313;
  }
  .avatar-uploader .ant-upload img{
    max-width: 100% !important;
  }
  .modeltltte input {
    padding: 8px 10px 8px 0;
    width: 90%;
    outline: none;
    border-bottom: 1px solid #aaaaaaa3;
    margin: auto 14px;
  }
  .modeltltte .ant-modal-header {

    border-bottom: 0;
  }
  .modeltltte .ant-modal-content {
    background-color: #fff !important;

  }
  .modeltltte .ant-modal-footer {
    border-top: 0;
    background-color: #fff !important;

  }
  .transparent .social-icon{
    border-radius: 4px;
  }
  .transparent{
    background: transparent;
    outline: none;
    margin-left: 10px;
  }
  .SocialMediaShareButton{
    display: inline-block;
  }
  .ant-modal-content {
    background-color: transparent;
  }
  .ant-dropdown{
    position: fixed;
    z-index: 1111;
  }

  .ant-modal-body{
    padding: 0;
  }
  .ant-select-dropdown::-webkit-scrollbar {
    width: 6px;
  }

  .ant-select-dropdown::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #1c2635;
    border-radius: 10px;
  }

  .ant-select-dropdown::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease-in-out;
  }
  .ant-select-dropdown-menu-item:hover{

    color: #fff !important;
    background-color: #34374980 !important;


  }
  .ant-select-dropdown-menu-item{
    color: #fff;
    background-color: #232841 !important;
  }
  .ant-select-dropdown {
    z-index: 111111 !important;
    transform: translateY(0px);
    position: fixed !important;
    max-height: 100px;
    border-radius: 0;
    pointer-events: all;
    transition: opacity 300ms cubic-bezier(0.25, 0.8, 0.25, 1) , transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1) , -webkit-transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 99;
    flex-direction: column;
    background: #232841;
    border: solid rgba(228,238,242,0.22);
    border-width: 0 2px 2px 2px;
    overflow-y: scroll;
  }
  .ant-layout-header{
    position: fixed;
    width: 100%;
    z-index: 1111111;
  }
  .ant-tabs {
    font-family: 'Roboto', sans-serif !important;
  }
  .settings-page{
    background-color: #101010;
    color: #fff;
    height: 595px;
    .ant-tabs-bar{
      margin: 0;
    }
    .ant-form-item-control{
      text-align: center;
    }
    input{
      margin-bottom: 15px !important;
    }
    .avatar {
      text-align: center;
      padding: 30px 0 0 0;
      @media(max-width: 767px){
        padding: 25px 0 0 0 !important;
        p{
          margin-bottom: 15px !important;
        }
        img {
          height: 100px !important;
        }
      }
      img {
        height: 110px;
        padding-bottom: 5px;
      }
      a{
        padding: 10px;
      }
    }
    .name-update{
      padding: 30px 0;
      @media(max-width: 767px){
        padding-top: 15px !important;
        padding-bottom: 10px !important;
      }
      .ant-row{
        margin-bottom: 15px !important;
      }
    }
    .name-update label{
      color: #fff;
    }

    .update-email a {
      font-size: 16px;
      margin-bottom: 5px;
      letter-spacing: 0.4px;
    }
    .linked-accounts {
      padding: 20px 0;
      .headings{
        padding: 10px 0 1px 0;
        
          h2{
            color: white;
            font-weight:100;
            margin-bottom: 3px;
          }
      }
      .link-box{
        border: 1px solid;
        padding: 13px;
        margin: 10px 0;
        color: #fff;
        i{
          color: white;
        }
        a{
          float: right;
        }
        a:hover{
          cursor:pointer;
        }

      }
    }
    .setting-bar {
      background-color: #fff;
      height: 44px;
      width: 100%;
    }

    .reset-password .ant-form .ant-form-item {
      margin-bottom: 0;
    }
  

    // steps styles

  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  // .steps-action {
  //   margin-top: 24px;
  // }

  // steps upload picture

  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
 
}

.dplayer-menu.dplayer-menu-show{
  display: none !important;
}
.dplayer-controller .dplayer-icons .dplayer-setting, .dplayer-controller .dplayer-icons .dplayer-subtitle-btn{
  display: none !important;
}
.ant-message-notice:first-child {
    margin-top: 50px !important;
  }
@media(max-width: 892px){
  
  // video player margin remove 
  .dplayer-no-danmaku{
    margin: 0!important;
  }

  // video player col-xs-12 padding remove  
  .videoStyles__Wrapper-jyagei .col-xs-12{
    padding: 0 !important;
  }
  .followingStyle__Followings-keGcKq .col-xs-12{
    padding: 0 15px !important;

  } 
  .followersStyle__Follow-jRAJpb .col-xs-12{
    padding: 0 15px !important;
  }
  .Videos-548 .col-xs-12{
    padding: 10px 10px 5px 5px !important;
  }
}
.clr-gry{
    color: #929292 !important;
    
  }
@media(min-width: 893px){
  .userQuote{
    display: none;
  }
}



`;
