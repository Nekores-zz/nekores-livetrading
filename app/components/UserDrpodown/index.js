/**
 *
 * UserDrpodown
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

import { Menu, Dropdown, Modal, Badge, Icon } from 'antd';
import Infodropdown from './InfodropdownStyle';
const confirm = Modal.confirm;
export const UserDrpodown = (props) => {
  const { img, user, userId, name, handlerBlockUser, loginUserInfo, shomodel, handleUserId } = props;
  const uid = userId;
  const showConfirm = () => {
    confirm({
      wrapClassName: 'modeltltte',
      title: 'Do you want to Block this person?',
      onOk() { handlerBlockUser(uid); },
      onCancel() { },
    });
  };
  const menu = (
    <Infodropdown>
      <Menu
        style={{
          boxShadow: '0 15px 15px rgba(0, 0, 0, 48%)',
        }}
      >
        <Menu.Item
          key="1"
          className="userInfoDropdown"
          style={{ display: 'flex' }}
        >
          <Link to={`/o/${userId}`} style={{ color: '#fff' }}>
            <div style={{ width: 'fit-content', display: 'inline-block' }}>
              <Avatar src={img} size={52} name={name} round="50%" icon="user" />
              <Badge status="success" />
            </div>
            <span style={{ marginLeft: '10px' }} className="chatUserName">
              {name}
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => { shomodel(); handleUserId(userId); }} >
          <Icon type="exclamation-circle" />
          {'Report'}
        </Menu.Item>
        <Menu.Item key="3" onClick={showConfirm}>
          <Icon type="close-circle" />
          Block
        </Menu.Item>
        {/* <Menu.Item key="4">
          <Icon type="rocket" />
          Kick
        </Menu.Item> */}
        <Menu.Item key="5">
          <Icon type="sound" />
          mute
        </Menu.Item>
      </Menu>
    </Infodropdown>
  );
  return (
    <Infodropdown>
      <Dropdown overlay={menu} placement="bottomCenter">
        <h3>
          {name}
          &nbsp;
        </h3>
      </Dropdown>
    </Infodropdown>
  );
};

export const FollowDrpodown = (props) => {
  const { img, user, userId, name, loginUserInfo } = props;
  const menu = (
    <Infodropdown>
      <Menu
        style={{
          boxShadow: '0 15px 15px rgba(0, 0, 0, 48%)',
        }}
      >
        <Menu.Item
          key="1"
          className="userInfoDropdown"
          style={{ display: 'flex' }}
        >
          <Link to={'/ProfileAbout'} style={{ color: '#fff' }}>
            <div style={{ width: 'fit-content' }}>
              <Avatar src={img} name={name} size={52} round="50%" icon="user" />
              <Badge status="success" />
            </div>
            <span style={{ marginLeft: '10px' }} className="chatUserName">
              {name}
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user-add" />
          {'Follow '}
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          {'View Profile'}
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="flag" />
          {'Issue'}
        </Menu.Item>
      </Menu>
    </Infodropdown>
  );
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <a className="ant-dropdown-link">
        name
        <h3 style={{ display: 'inline-block', color: '#84ddff' }}>
          {name}
          &nbsp;
        </h3>
      </a>
    </Dropdown>
  );
};

UserDrpodown.propTypes = {};
