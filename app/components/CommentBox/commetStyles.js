import styled from 'styled-components';

const Wrapper = styled.div`
  .sub-chat-flex {
    height: 90%;
    overflow: hidden !important;
  }
  @media (min-width: 992px) {
    
    .main-chat-div {
      padding-bottom: 90px !important;
    }
  }
  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    height: 471px;
    .main-chat-div {
      padding-top: 20px !important;
    }
  }
  .chatblock{
    background: #fff !important;
  }
  .webComposerBlock__3lT5b{
    display: flex;
    position: relative;
    border-top: 1px solid rgba(228,238,242,.12);
    padding: 4px 12px 4px 12px;
    background: #0d0d0d;
    box-shadow: 0 7px 10px 0 rgba(0,0,0,.2);
  }
  .comment_header {
    padding: 20px;
    background: #0f2037;
    position: fixed;
    width: 20.83333333%;
    right: 0;
    top: 0;
    z-index: 1;
    margin-top: 50px;

    h2 {
      color: #fff;
      text-transform: capitalize;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 1.1px;
      margin: 0;

      i {
        text-align: right;
        padding-top: 3px;
        color: #fff;
        float: right;
      }
    }
  }
  .main-chat-div {
    padding: 71px 0 150px 0;
    position: fixed;
    right: 0px;
    height: 100%;
    width: 20.83333333%;
    background: #161923;
    margin-top: -1px;
  }
  .chat-input {
    color: #fff;
    font-size: 15px;
    line-height: 18px;
    min-height: 24px;
    width: 100%;
    border: 0;
    padding: 0;
    outline: 0!important;
    background: none;
    resize: none;
    overflow: hidden;
  }
  .scrollDiv::-webkit-scrollbar {
    display: none;
  }

  .scrollDiv[orient="vertical"] {
      min-width: 15px !important;
    
  }
  
  .scrollDiv {
    height: 100%;
    position: relative;
    margin: 0;
    right: 0;
    
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-transition: 0.3s all;
    transition: 0.3s all;
    scrollbar-color: #ffffff33 #1c2635;

    
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px #fff;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 15px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(65, 131, 215);
      outline: 1px solid rgb(65, 131, 215);
      border-radius: 15px;
    }
    .fOIsfp {
      position: static;
    }
    h3 {
      color: #fff;
      opacity: 0.8;
      font-size: 15px;
      letter-spacing: 0.8px;
      margin: 0;
    }

    p {
      color: #fff;
      opacity: 0.8;
      font-size: 12px;
      letter-spacing: 0.8px;
      margin-bottom: 15px;
    }

    &:hover {
      overflow-y: scroll;
    }
  }
  .clickable__2DsTu {
    display: block;
    position: relative;
    min-height: 24px;
    padding: 6px;
    margin: 2px 0;
    color: #bfc5d7;
    word-wrap: break-word;
    overflow: hidden;
    transition: 0.1s ease-in-out;

  }
  .clickable__2DsTu:hover {
    background: hsla(0,0%,100%,.05);
  }
  .cmnt-img {
    height: 24px;
    width: 24px;
    margin-right: 10px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 6px;
  }
  .ant-input:focus {
    box-shadow: none;
  }
  .chat-input {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chatbox-detail h4 {
    color: rgb(55, 237, 59);
    /* color: #01b0f2; */
    margin: 0;
    display: inline-block;
    font-size: 16px;
    font-weight: 300;
    /* line-height: 32px; */
  }
  .chat-input-data{
    color: #fff;
    font-size: 15px;
    line-height: 18px;
    min-height: 24px;
    width: 100%;
    border: 0;
    padding: 0;
    outline: 0!important;
    background: none;
    resize: none;
    overflow: hidden;
  }
  .chat-inputs {
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-grow: 1;
    padding: 8px;
  }
  .chatbox-detail p {
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    display: inline;
    /* display: block; */
    /* line-height: 32px; */
  }
  .chatbox-detail {
    line-height: 24px;
    margin-left: 6px;
    font-size: 15px;
  }
  
  .chatbox-discription span {
    color: #0c91c6;
    float: right;
  }
  .comment__input span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .comment__input .anticon-smile {
    font-size: 24px;
    padding-right: 2px;
    color: #fff;
  }
  @media (min-width: 768px) {
    .comment__input .ellipsis {
      display: none;
    }
  }
  .comment__input img {
    width: 24px;
  }
  .comment__input .ellipsis {
    border: 0;
    color: #fff;
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    right: 20px;
    width: 30px;
    top: 5px;
    background: transparent;
  }
  .anticon-ellipsis {
    transform: rotate(90deg);
  }
  @media (max-width: 1280px) {
    .comment__input .anticon-smile {
      font-size: 18px;
    }
  }
  @media (max-width: 320px) {
    .ant-input {
      width: 86% !important;
    }
  }
  @media (max-width: 992px) and (min-width: 768px) {
    .main-chat-div {
      width: 25% !important;
    }
    .comment__input {
      width: 25% !important;
    }
  }
  @media (max-width: 767px) {
    position: relative !important;
  }
  @media (max-width: 767px) and (min-width: 576px) {
    .main-chat-div {
      position: relative !important;
      width: 100% !important;
      padding: 71px 0 70px 0;
    }
    .comment__input {
      position: relative !important;
      width: 100% !important;
    }
    .main-chat-div {
      height: 100% !important;
    }
  }
  @media (max-width: 414px) {
    .main-chat-div {
      height: 46%;
    }
  }
  @media (max-width: 375px) {
    .main-chat-div {
      height: 43%;
    }
  }
  @media (max-width: 360px) {
    .main-chat-div {
      height: 42% !important;
    }
  }
  @media (max-width: 320px) {
    .main-chat-div {
      height: 26% !important;
    }
  }
  @media (max-width: 767px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .comment__input .ellipsis {
      background: transparent;
    }
    .chat-input input:focus {
      transform: none;
      border: none;
    }
    .main-comment__input {
      bottom: 0;
      width: 100%;
      left: 0;
      padding: 0 15px;
      background: #161923;
    }

    .comment__input {
      border-radius: 4px;
      position: fixed !important;
      padding: 4px 10px !important;
      background: #0d0d0d !important;
      border: 1px solid grey;
      left: 0;
      bottom: 15px !important;
      margin: auto;
      width: 94% !important;
    }
    .main-chat-div {
      background: #0d0d0d;
      width: 100% !important;
      padding: 0;
    }
    .scrollDiv {
      background: #0d0d0d;
      position: relative;
    }
    .ant-input::placeholder {
      color: transparent;
    }
     /* .ant-input {
      height: fit-content !important;
      padding: 5px 20px !important;
      border: none;
      background: #0d0d0d !important;
    } */
    .chat-input {
      border: none;
    }
  }
  .comment__input {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 20.83333333%;
    {/* padding: 12px; */}
    background: #0d0d0d;
    .ant-form {
      width: 100%;
    }
    .grammarly-btn {
      display: none;
    }
    .ant-input::-webkit-scrollbar {
      display: none;
    }
    .ant-input {
      color: #fff;
    font-size: 15px;
    line-height: 18px;
    min-height: 24px;
    width: 100%;
    border: 0;
    padding: 0;
    outline: 0!important;
    background: none;
    resize: none;
    overflow: hidden;
    }

    button {
      border-radius: 5px;
      float: right;
      font-size: 14px;
    }

    @media (max-width: 991px) {
      button {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 780px) {
    .hide-xs {
      display: none;
    }
  }
`;

export default Wrapper;
