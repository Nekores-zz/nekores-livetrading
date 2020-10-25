import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'antd';

const ChangePasswords = ({
  onChangeCurrentPassword,
  checkConfirm,
  onChangeNewPassword,
  checkPassword,
  getFieldDecorator,
  ChangePassword,
}) => (
  <div className="avatar-box upPassword">
    <h2>Change Password</h2>
    <Form.Item>
      <Input
        size="large"
        type="password"
        onChange={onChangeCurrentPassword}
        placeholder="Your current password"
      />
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('password', {
        rules: [
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            validator: checkConfirm,
          },
        ],
      })(
        <Input
          size="large"
          type="password"
          onChange={onChangeNewPassword}
          // secureTextEntry={true}
          placeholder="New password"
        />
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('confirm', {
        rules: [
          {
            required: true,
            message: 'Please confirm your password!',
          },
          {
            validator: checkPassword,
          },
        ],
      })(
        <Input
          size="large"
          type="password"
          onChange={onChangeNewPassword}
          // secureTextEntry={true}
          placeholder="Re-enter new password"
        />
      )}
    </Form.Item>
    <Form.Item>
      <Button type="primary" onClick={ChangePassword} className="butn">
          Update Password
      </Button>
    </Form.Item>
  </div>
);
ChangePasswords.propTypes = {
  onChangeCurrentPassword: PropTypes.func.isRequired,
  checkConfirm: PropTypes.func.isRequired,
  onChangeNewPassword: PropTypes.func.isRequired,
  checkPassword: PropTypes.func.isRequired,
  getFieldDecorator: PropTypes.func.isRequired,
  ChangePassword: PropTypes.func.isRequired,
};
export default ChangePasswords;
