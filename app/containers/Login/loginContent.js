import React from 'react';
import propTypes from 'prop-types';
import { Button, Icon } from 'antd';

const LoginContent = ({ onSuccessTwitter }) => {
  <div className="login-sm-btns">
    <hr className="or-hr" />
    <p>Login in using Social Media to get quick access.</p>
    <Button
      className="fb-xs s-xs"
      // onClick={this.responseFacebook}
      type="primary"
      size="large"
    >
      <Icon type="facebook" />
    </Button>
    <Button
      className="g-xs s-xs"
      // onClick={this.responseGoogle}
      type="primary"
      size="large"
    >
      <Icon type="google" />
    </Button>
    <Button
      className="twitter-xs s-xs"
      //   onClick={onSuccessTwitter}
      type="primary"
      size="large"
    >
      <Icon type="twitter" />
    </Button>
  </div>;
};
LoginContent.propTypes = {
  onSuccessTwitter: propTypes.func.isRequired,
};
export default LoginContent;
