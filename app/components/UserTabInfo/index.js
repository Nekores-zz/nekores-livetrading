/**
*
* UserTabInfo
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Icon } from 'antd';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';
import Wrapper from './wraper';
function UserTabInfo({ image, username }) {
  return (
    <div className="userTab">
      <Wrapper>
        <Avatar
          src={image}
          size={52}
          name={username}
          style={{ borderRadius: '50%', overFlow: 'hidden' }}
        />
      </Wrapper>
      <b className="tab-head">
        {username || 'UnNamed'}
      </b>
      <Icon
        type="check-circle"
        theme="outlined"
        style={{ color: '#01b0f2', marginLeft: '10px' }}
      />
    </div>
  );
}

UserTabInfo.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
};

export default UserTabInfo;
