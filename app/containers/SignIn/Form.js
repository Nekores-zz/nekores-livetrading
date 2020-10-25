import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const LoginForm = ({
  handleSubmit,
  handleChange,
  close,
  email,
  password,
  remember,
}) => (
  <Form onSubmit={handleSubmit} className="login-form">
    <FormItem style={{ marginTop: '10px' }}>
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
        placeholder="Email"
        value={email}
        onChange={(e) => handleChange(e, 'email')}
        size="large"
      />
    </FormItem>
    <FormItem style={{ marginBottom: '10px' }}>
      <Input
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => handleChange(e, 'password')}
        size="large"
      />w
    </FormItem>
    <FormItem style={{ marginBottom: '10px' }}>
      {/* <Checkbox checked={remember}>
        <span style={{ color: '#999' }}>Remember Me</span>
      </Checkbox> */}
    </FormItem>
    <FormItem>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        style={{ width: '100%', marginBottom: '5px' }}
        size="large"
      >
          Login
      </Button>
      <Link to="/reset-password" onClick={close}>
          Forget Password?
      </Link>
    </FormItem>
  </Form>
);

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  remember: PropTypes.bool.isRequired,
};

export default LoginForm;
