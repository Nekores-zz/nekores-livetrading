/**
 *
 * SignUpConfirmation
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Icon } from 'antd';
import ConfirmationStyl from './confirmationStyl';

function SignUpConfirmation() {
  return (
    <ConfirmationStyl>
      <div>
        <span className="icon-tick">
          <Icon type="check" />
        </span>
        <p>A confirmation message has been sent. Please verify your email.</p>
      </div>
    </ConfirmationStyl>
  );
}

SignUpConfirmation.propTypes = {};

export default SignUpConfirmation;
