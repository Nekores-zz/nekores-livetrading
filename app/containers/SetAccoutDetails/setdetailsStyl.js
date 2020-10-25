import styled from 'styled-components';
const SetdetailsStyl = styled.div`
  height: 100%;
  width: 100%;
  display: table;
  .block {
    text-align: center;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .center__box {
    width: 350px;
    display: inline-block;
  }
  @media (max-width: 575px) {
    .center__box {
      width: 100% !important;
    }
    .centered {
      padding: 15px;
    }
    .block img {
      display: block;
      padding: 0 15px;
      height: 45px;
    }
    .block {
      display: block;
      padding-top: 50px;
    }
  }
  h5 {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
  input::-webkit-input-placeholder {
    color: #fff !important;
  }
  button {
    width: 100%;
    color: #000;
    background: #01b0f2;
    margin-top: 15px;
  }

  input[type='text']::-webkit-input-placeholder {
    color: #fff !important;
  }
  input {
    background: #242731;
    color: #fff;
    border: 3px solid #1a2936;
    padding: 8px 18px;
    border-radius: 4px !important;
  }
  .displ__style {
    margin: 50px auto;
    text-align: center;
  }
`;

export default SetdetailsStyl;
