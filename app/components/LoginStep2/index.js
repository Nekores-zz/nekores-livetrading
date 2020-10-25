/**
 *
 * LoginStep2
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input } from 'antd';
const FormItem = Form.Item;
// import styled from 'styled-components';

function LoginStep2(props) {
  return (
    <div>
      <FormItem style={{ marginTop: '100px', marginBottom: '15px' }}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
          placeholder="First Name"
          value={props.state.firstname}
          onChange={(e) => {
            props.handleChange(e, 'firstname');
          }}
          size="large"
        />
      </FormItem>

      <FormItem style={{ marginBottom: '15px' }}>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />}
          type="text"
          placeholder="Last Name"
          value={props.state.lastname}
          onChange={(e) => {
            props.handleChange(e, 'lastname');
          }}
          size="large"
        />
      </FormItem>
    </div>
  );
}

LoginStep2.defaultProps = {
  state: {},
  handleChange: () => {},
};

LoginStep2.propTypes = {
  state: PropTypes.oneOfType([PropTypes.object]),
  handleChange: PropTypes.func,
};

export default LoginStep2;
