import React from 'react';
import { Input, Form, Button } from 'antd';
import PropTypes from 'prop-types';
const EmailForm = ({
  getFieldDecorator,
  handleUpdateEmail,
  handleSubmitEmail,
  privatemail,
}) => (
  <div className="avatar-box upemail">
    <h2>Change Email</h2>
    <div className="dsply">
      <Form.Item>
        {getFieldDecorator('email', { initialValue: privatemail }, {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(
          <Input
            size="large"
            type="email"
            // value={email}
            placeholder="Please Enter Your New Email"
            onChange={handleUpdateEmail}
          />
        )}
      </Form.Item>
      {/* <Form.Item>
            <Input
            size="large"
            type="password"
            key="updateEmail"
            value={this.state.currentPassword}
            onChange={this.onChangeCurrentPassword}
            placeholder="Please Enter Your Current Email to Proceed"
            style={{ borderRadius: '0', zIndex: '1' }}
            />
        </Form.Item> */}
      <Form.Item>
        <Button
          size="large"
          type="primary"
          onClick={handleSubmitEmail}
          className="butn"
        >
          CHANGE EMAIL
        </Button>
      </Form.Item>
    </div>
  </div>
);
EmailForm.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
  handleUpdateEmail: PropTypes.func.isRequired,
  handleSubmitEmail: PropTypes.func.isRequired,
  privatemail: PropTypes.string,
};

export default EmailForm;
