/**
 *
 * SignUpSteps
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Checkbox } from 'antd';
import UpstepsStyle from './upstepsStyle';
const FormItem = Form.Item;
function SignUpSteps(props) {
  const { getFieldDecorator } = props;
  return (
    <UpstepsStyle>
      <FormItem>
        <Input
          // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
          placeholder="Email"
          type="email"
          value={props.state.email}
          onChange={(e) => {
            props.handleChange(e, 'email');
          }}
          size="large"
        />
      </FormItem>
      <FormItem>
        <Input
          // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            props.handleChange(e, 'password');
          }}
          size="large"
        />
      </FormItem>
      {/* <FormItem className="checkboxStyl">
        {getFieldDecorator('agreement', {
          valuePropName: 'checked',
        })(
          <Checkbox type="checkbox" />
        )}
        <p>
          {'By Signing Up, you agree to our'}
          <span className="links"><Link to={'/p/terms'} style={{ zIndex: '1', color: '#01b0f2' }}> Terms of Service </Link></span>and
          <span className="links"><Link to={'/p/privacy'} style={{ zIndex: '1', color: '#01b0f2' }}> Privacy Policy</Link></span>.
        </p>
      </FormItem> */}
    </UpstepsStyle>
  );
}

SignUpSteps.defaultProps = {
  state: {},
  handleChange: () => { },
  close: () => { },
};

SignUpSteps.propTypes = {
  state: PropTypes.oneOfType([PropTypes.object]),
  handleChange: PropTypes.func,
  close: PropTypes.func,
};

export default SignUpSteps;
