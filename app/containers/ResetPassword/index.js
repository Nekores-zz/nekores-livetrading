/**
 *
 * ResetPassword
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Alert, notification } from 'antd';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import fire from '../../utils/config';

import { Col } from '../../components/Common/index';
import makeSelectResetPassword from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';

import saga from './saga';

const FormItem = Form.Item;

export class ResetPassword extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };

  Ok = () => {
    this.setState({
      email: '',
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email;
    fire.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        notification.success({
          message: 'Email Sent',
          description:
            'An email having your password recovery link has been sent!',
        });
      })
      .catch(() => {
        notification.error({
          message: 'Error',
          description: 'Trouble sending recovery email',
        });
      });
  };

  render() {
    return (
      <div className="container reset-password" style={{ padding: '100px 0' }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Col lg={2} md={2} sm={12} xs={12} />
          <Col lg={8} md={8} sm={12} xs={12}>
            <FormItem>
              <Alert
                // message="Informational Notes"
                description="Please enter a valid email address to receive the password recovery email."
                type="info"
                showIcon
              />
              <Input
                prefix={
                  <Icon
                    type="user"
                    value={this.state.value}
                    style={{
                      color: 'rgba(0,0,0,.25)',
                    }}
                  />
                }
                placeholder="Email address"
                name="email"
                size="large"
                style={{ marginTop: '10px' }}
                onChange={this.onChange}
              />
            </FormItem>
            <FormItem>
              <Button
                value="large"
                type="primary"
                htmlType="submit"
                size="large"
                style={{ width: '100%' }}
                className="login-form-button"
              >
                Recover Password
              </Button>
            </FormItem>
          </Col>
        </Form>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  resetpassword: makeSelectResetPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'resetPassword', reducer });
const withSaga = injectSaga({ key: 'resetPassword', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ResetPassword);
