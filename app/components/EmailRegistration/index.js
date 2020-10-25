/**
 *
 * EmailRegistration
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import RegistrationStyl from './registrationStyl';

const FormItem = Form.Item;
function EmailRegistration() {
  return (
    <RegistrationStyl>
      <div className="displ__style">
        <div className="center__box">
          <h5>
            To recover your password, please enter the email registration to
            your account.
          </h5>
          <FormItem>
            <Input
              // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
              placeholder="name@example.com"
              type="text"
              size="large"
            />
          </FormItem>
          <Button type="primary" size="large">
            Next
          </Button>
        </div>
      </div>
    </RegistrationStyl>
  );
}

EmailRegistration.propTypes = {};

export default EmailRegistration;
