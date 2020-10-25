import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button } from 'antd';

const SignupForm = ({ current, handleSubmit, steps, next }) => (
  <Form className="login-form">
    <div className="steps-content" style={{ marginTop: '-45px' }}>
      {steps[current].content}
    </div>
    <div className="steps-action" style={{ textAlign: 'center' }}>
      {current < steps.length - 1 && (
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{
            width: '100%',
            marginBottom: '15px',
            marginTop: '9px',
            background: '#01b0f2',
            borderRadius: '7px',
          }}
          size="large"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button
          type="primary"
          size="large"
          style={{
            marginBottom: '15px',
            background: '#01b0f2',
            borderRadius: '7px',
          }}
          onClick={next}
        >
          {'Okay'}
        </Button>
      )}
    </div>
  </Form>
);
SignupForm.PropTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  current: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  steps: PropTypes.object.isRequired,
};
export default SignupForm;
