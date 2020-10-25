import styled from 'styled-components';
const VInfoLive = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  flex-grow: 1;
  background: #29374a;
  position: relative;
  img {
    float: left;
    height: 45px;
  }
  .col-xs-12 {
    width: 100%;
  }
  p {
    margin-bottom: 7px;
    font-family: 'Roboto', sans-serif; !important;
  }
  p span {
    font-size: 16px;
    font-family: 'Roboto', sans-serif; !important;
    letter-spacing: 0.8px;
    padding-left: 7px;
    color: #fff;
    opacity: 0.9;

    @media (max-width: 380px) {
      display: inline-block;
    }
  }

  .boex-heading {
    font-family: 'Roboto', sans-serif; !important;
    font-size: 0.9em;
    font-weight: 500;
    width: 100%;
    overflow: hidden;
    margin-bottom: 0.1em;
  }
  .truncated-text {
    height: 1.25em;
    display: block;
    overflow: hidden;
    font-size: 16px;
    color: #fff;
    position: relative;
  }

  .user-image {
    display: block;
    position: relative;
    border-radius: 50px;
  }
  .live-vdo span {
    padding-left: 0;
  }

  .live-vdo {
    display: inline;
    margin-left: 8px;
    flex-grow: 1;
    width: 0;
  }
  .team i{
    margin-right: 3px;

  }
  .team {
    margin-left: 10px;

  }
  .team,
  .eye {
    color: #929292;
  }
  .vdo-cmnts {
    font-weight: 600;
    color: #fff;
  }
  .dot i{
    transform: rotate(90deg);
  }
  .username {
    display: block;
    font-size: 16px;
    opacity: 0.6;
    line-height: 1.1em;
    margin-top: 0.15em;
    overflow: hidden;
  }

  .share-btn {
    margin-left: 10px;
    padding: 2px 22px;
  }
  .share-btn span {
    color: white;
  }
  .hide-xs {
    margin-bottom: 0;
  }

  @media (max-width: 991px) {
    .hide-xs {
      display: none;
    }
  }
`;

export default VInfoLive;
