import styled from 'styled-components';
const VInfo = styled.div`
  padding: 10px 5px;
  .ant-modal .ant-modal-content {
    background-color: #fff !important;
  }
  .anticon-ellipsis {
    padding-left: 5px;
    transform: rotate(90deg);
  }
  .hvr:hover {
    .hvr::after {
      content: 'addd';
    }
  }
  .hvr:hover {
    content: 'unfollow';
  }
  button.ellipsis {
    padding: 0px 12px;
    font-size: 34px;
    line-height: 40px;
    z-index: 1111;
  }
  .userQuoteTwo {
    padding-left: 90px;
  }
  .anticon-ellipsis {
    padding-left: 10px;
  }
  .anticon-ellipsis:focus {
    outline: none;
  }
  .account-user-image {
    margin-top: 15px;
    margin-left: 20px;
    height: 56px;
    width: 56px;
  }
  .dis__flx {
    display: flex;
  }
  .ellipsis {
    padding: 0;
    background: transparent;
    color: #01b0f2;
    border: none;
  }
  .views i {
    margin-right: 12px;
    font-size: 20px;
  }
  .views span {
    padding-left: 0;
    font-size: 21px;
    color: #fff;
  }

  .views {
    max-width: 91px;
    margin-left: 20px;
    text-align: center;
    border-radius: 7px;
    display: inline-block;
    background: #101219;
    padding: 15px 16px !important;
  }
  @media (max-width: 375px) {
    .bshare{
      top: -2px !important;
    }
    .l-heght {
      line-height: 20px !important;
    }
  }
  @media (max-width: 767px) {
    background: #101219;
    .option{
      padding-top: 4px !important;
    }
    .account-user-image {
      margin-top: -1px;
      margin-left: 10px;
      height: 47px;
      width: 47px;
    }
    .follow-wrap {
      margin-top: 0 !important;
    }
    .userQuoteTwo {
      padding-top: 5px !important;
      padding-left: 0;
    }
    .views {
      display: none;
    }
    .username {
      display: none;
    }
    .ellipsis {
      padding: 0 !important;
    }
    .anticon-ellipsis {
      padding-left: 10px !important;
    }
  }
  @media (max-width: 1370px) {
    .userStaf {
      font-size: 18px !important;
    }
    .views i {
      font-size: 14px !important;
    }
    .views span {
      font-size: 14px !important;
      line-height: 14px !important;
    }
    .views {
      max-width: 75px !important;
      padding: 10px !important;
      margin-left: 10px !important;
    }
    .cstm-tooltip {
      display: flex;
      padding: 6px 18px !important;
    }
  }

  img {
    float: left;
    height: 45px;
  }
  p {
    margin-bottom: 0;
  }
  .userStaf {
    color: #fff;
    font-size: 21px;
    text-transform: capitalize;
  }
    @media (max-width: 767px) {
      font-size: 14px !important;
      padding-left: 12px;
      .sm-name {
        text-overflow: ellipsis !important;
        overflow: hidden; 
        white-space: nowrap;
      }
    }
  p span {
    font-size: 14px;
    padding-left: 10px;
    color: #01a8e7;
    letter-spacing: 0.8px;

    @media (max-width: 600px) {
      font-size: 16px;
      padding-left: 0;
    }
  }
  
  .team,
  .eye {
    font-size: 14px;
  }

  .username {
    font-size: 15px;
  }

  .bfollow {
    border-radius: 8px 0 0px 8px !important;
    border-color: #287ccf;
    background: #287ccf !important;
  }
  .bfollow span {
    padding-left: 0 !important;
    font-size: 16px !important;
  }
  .bshare i {
    font-size: 18px;
  }
  .share-btn i {
    font-size: 18px;
  }
  .share-btn {
    font-size: 16px !important;
    margin-left: 10px;
    font-weight: 300;
    background: #01b0f2;
    line-height: inharit;
    min-height: 46px;
    padding: 10px 35px;
    border-radius: 8px;
  }
  @media (max-width: 1370px) {
    .share-btn i {
      font-size: 14px !important;
    }
    .share-btn {
      padding: 6px 18px !important;
      min-height: 38px;
    }
    .share-btn span {
      font-size: 14px !important;
    }
    .comment__input .ant-input {
      width: 86% !important;
    }
  }
  @media (max-width: 981px) {
    .share-btn {
      min-height: 38px;
      padding: 6px 18px !important;
      border-radius: 8px 8pxs 8px 8px !important;
    }
  }
  .share-btn span {
    padding: 0;
    color: white;
    font-weight: 600;
    font-size: 18px;
  }
  .follow-wrap {
    float: right;
  }
  .l-heght {
    line-height: 35px;
  }
  @media (max-width: 992px) {
    .hide-sm {
      display: none;
    }
    .follow-wrap button {
      border-radius: 8px !important;
    }
    .bshare{
      display: none;
    }
    .hide-xs-tip {
      display: none !important;
    }
    .bfollow{
      border-radius: 8px 8px 8px 8px !important;
    }
    .anticon-ellipsis {
      padding-left: 0 !important;
    }
  }
  @media (max-width: 334px) {
    .ownUserShar i {

      font-size: 12px;
    }
    .ownUserShar span {
      font-size: 12px;
    }
    .ownUserShar{
      min-height: 30px;
      padding: 0px 8px !important;
      margin: 0;
    }
  }
  @media (min-width: 992px) {
    .share-sm {
      display: none;
    }
    .ownUserShar{
      display: none !important;

    }
    .account-user-image {
      display: none;
    }
    .hide-lg {
      display: none;
    }
    .ellipsis i {
      padding-left: 0px !important;
    }
    .ellipsis {
      padding: 0px 5px !important;
    }
  }

  @media (max-width: 892px) {
    
    .follow-wrap {
      display: flex;
      margin-top: 22px;
    }

    
  }

  @media (max-width: 780px) {
    .hide-xs {
      display: none;
    }
    .userQuote {
      margin-left: 6rem;
    }
  }

  .about-video {
    color: white;
    padding: 10px;
    h3,
    p {
      color: #d2d1d1;
    }
  }
  .userQuote {
    padding-left: 0;
  }
  .flx-cls {
    display: flex;
  }

  .option {
    display: flex;
  }
  .tool-tip {
    width: 0;
    left: 5px;
    height: 0;
    position: absolute;
    margin-left: -11px;
    border-style: solid;
    top: 35% !important;
    border-color: transparent;
    border-right-color: #123e78 !important;
    border-width: 7px 7px 7px 0 !important;
  }
  .cstm-tooltip span {
    padding-left: 0;
    font-size: 16px;
    line-height: 26px;
  }
  .cstm-tooltip {
    display: flex;
    min-height: 38px;
    width: fit-content;
    position: relative;
    padding: 10px 25px;
    border-radius: 0 8px 8px 0 !important;
    background: #123e78;
  }
`;
const Drpmenu = styled.div`
  ul {
    border-radius: 4px;
  }
  @media (min-width: 992px) {
    .share-sm {
      display: none;
    }
  }
`;
export default VInfo;
export { Drpmenu };
