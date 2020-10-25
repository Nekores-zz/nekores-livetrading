import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';


export const Loginmenu = ({ logout }) => (
  <Menu key="menu" style={{ backgroundColor: '#0f2037', borderRadius: '0' }}>
    <Menu.Item key="golive">
      <Link to={'/s/live'} style={{ color: '#fff' }}>
        <Icon type="video-camera" />
        &nbsp; Start Live Broadcast
      </Link>
    </Menu.Item>
    <Menu.Item key="mychannel" style={{ color: '#fff' }}>
      <Link to={'/s/profile'} style={{ color: '#fff' }}>
        <Icon type="user" />
        &nbsp; Manage Profile
      </Link>
    </Menu.Item>
    <Menu.Item key="settings">
      <Link to={'/s/account'} style={{ color: '#fff' }}>
        <Icon type="setting" />
        &nbsp; Account
      </Link>
    </Menu.Item>
    <Menu.Item
      key="logout"
      onClick={logout}
      style={{ color: '#fff' }}
    >
      <Icon type="logout" />
      &nbsp; Logout
    </Menu.Item>
  </Menu>
);

// export const aboutnmenu = ({ logout })(
//   <Menu
//     key="text"
//     style={{ backgroundColor: '#0f2037', borderRadius: '0' }}
//   >
//     {/* <Menu.Item key="About" onClick={this.handlerNone}>
//       <Link to={'/p/about'} style={{ zIndex: '1', color: '#fff' }}>
//         &nbsp; About us
//       </Link>
//     </Menu.Item> */}
//     <Menu.Item key="Terms" onClick={this.handlerNone}>
//       <Link to={'/p/terms'} style={{ zIndex: '1', color: '#fff' }}>
//         &nbsp; Terms & condition
//       </Link>
//     </Menu.Item>
//     <Menu.Item key="privacy" onClick={this.handlerNone}>
//       <Link to={'/p/privacy'} style={{ zIndex: '1', color: '#fff' }}>
//         &nbsp; Privacy Policy
//       </Link>
//     </Menu.Item>
//   </Menu>
// );
export const TogButton = ({ handlerNav, clasStyl }) => (
  <Button className={clasStyl} onClick={handlerNav}>
    <Icon className="customToggler btnInstant1" type="minus" />
    <Icon className="customToggler btnInstant2" type="minus" />
    <Icon className="customToggler btnInstant3" type="minus" />
  </Button>
);
