import styled from 'styled-components';
export const StepsWrapper = styled.div`
  position: relative;
  .ant-steps .ant-steps-item .ant-steps-item-icon {
    margin-left: 2px;
    color: white;
  }
  .ant-steps .ant-steps-item-tail {
    margin-left: 8px;
  }
  .ant-steps-dot .ant-steps-item-tail {
    left: -4px;
  }
  .ant-steps-item-wait
    .ant-steps-item-icon
    > .ant-steps-icon
    .ant-steps-icon-dot {
    background: #fff;
  }
  button {
    background-color: #01b0f2 !important;
  }
  .ant-steps-item-title {
    opacity: 0;
  }
  .steps-action {
    text-align: center;
  }
`;
