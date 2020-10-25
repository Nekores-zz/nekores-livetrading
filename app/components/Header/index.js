import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Menu, Icon, Dropdown, Button, Collapse } from 'antd';
import Avatar from 'react-avatar';
import { createStructuredSelector } from 'reselect';
import { fromJS } from 'immutable';
import {
  makeSelectCurrentUser,
  loginUser,
  appAccessToken,
} from '../../containers/App/selectors';
import Wrapper, { ToggleButton, Dropmenu } from './menuStyle';
import Login from '../../containers/Login/index';
import { logoutUserAction } from '../../containers/App/actions';
import { Loginmenu, TogButton } from './loginmenu';
// import logo from '../../assets/images/logo/logo-white.png';

class Header extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    const loginU = nextProps.loginUser || null;
    if (loginUser) {
      return { loginInfo: loginU };
    }
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      authKey: '1',
      logoutCount: 123,
      current: 'brand',
      ModalText: 'Content of the modal',
      visible: false,
      showMenu: null,
      confirmLoading: false,
      loginInfo: null,
      publicInfo: '',
      links: [
        {
          name: 'Login',
          path: '/login',
        },
        {
          name: 'Sign Up',
          path: '/signup',
        },
        {
          name: 'logout',
          path: '/',
        },
      ],
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }


  showModal = () => {
    this.setState({ visible: true });
  };

  logoutCall = async () => {
    localStorage.clear();
    this.props.logout();
    setTimeout(async () => {
      await this.props.accessToken();
      // window.localStorage.clear();
      this.props.history.push('/');
    }, 600);
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({ visible: false, confirmLoading: false });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleNav = () => {
    this.setState({
      open: !this.state.open,
      togglerStyle: !this.state.togglerStyle,
    });
  };
  changeAuth = (activetTab) => {
    this.setState({
      authKey: activetTab,
    });
  };
  handlerNone = () => {
    this.setState({
      open: !this.state.open,
      togglerStyle: !this.state.togglerStyle,
    });
  };
  render() {
    const setAbouttrading = (this.props.userInfo && this.props.userInfo.setAbouttrading) || {};
    const publicInfo = (setAbouttrading && setAbouttrading.publicInfo) || {};
    const imageUrl = (publicInfo && publicInfo.image) || '';
    const name = (publicInfo && publicInfo.name) || '';
    const Panel = Collapse.Panel;
    const text = (
      <Dropmenu>
        <Menu
          key="text"
          style={{ backgroundColor: '#0f2037', borderRadius: '0' }}
        >
          {/* <Menu.Item key="About" onClick={this.handlerNone}>
            <Link to={'/p/about'} style={{ zIndex: '1', color: '#fff' }}>
              &nbsp; About us
            </Link>
          </Menu.Item> */}
          <Menu.Item key="Terms" onClick={this.handlerNone}>
            <Link to={'/p/terms'} style={{ zIndex: '1', color: '#fff' }}>
              &nbsp; Terms & condition
            </Link>
          </Menu.Item>
          <Menu.Item key="privacy" onClick={this.handlerNone}>
            <Link to={'/p/privacy'} style={{ zIndex: '1', color: '#fff' }}>
              &nbsp; Privacy Policy
            </Link>
          </Menu.Item>
        </Menu>
      </Dropmenu>
    );
    // console.log(this.state.loginInfo);
    const { loginInfo } = this.state;
    const emailName =
      loginInfo && loginInfo.user && loginInfo.user.displayName
        ? loginInfo.user.displayName
        : null;
    const menu = (
      <Dropmenu>
        <Loginmenu logout={this.logoutCall} />
      </Dropmenu>
    );
    const menuone = (
      <Dropmenu>
        <Menu
          key="menuone"
          className="about-menu"
          style={{
            border: '1px solid #677486a8',
            backgroundColor: '#0f2037',
            borderRadius: '0',
          }}
        >
          {/* <Menu.Item key="About" style={{ color: '#fff' }}>
            <Link to={'/p/about'} style={{ zIndex: '1' }}>
              &nbsp; About us
            </Link>
          </Menu.Item> */}
          <Menu.Item key="Terms" style={{ color: '#fff' }}>
            <Link to={'/p/terms'} style={{ zIndex: '1' }}>
              &nbsp; Terms & condition
            </Link>
          </Menu.Item>
          <Menu.Item key="privacy" style={{ color: '#fff' }}>
            <Link to={'/p/privacy'} style={{ zIndex: '1' }}>
              &nbsp; Privacy Policy
            </Link>
          </Menu.Item>
        </Menu>
      </Dropmenu>
    );
    return (
      <div id="header-bar">
        <Wrapper className={this.state.open ? 'opened_nav' : 'closed_nav'}>
          {this.props.authenticated ? (
            <Menu
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className="user-name-drop"
            >
              <Menu.Item key="settingss" className="dsply-sm setting-admin">
                <Link
                  to={{
                    pathname: `/p/${loginInfo && loginInfo.userId}`,
                  }}
                  onClick={this.handlerNone}
                  style={{ zIndex: '1' }}
                >
                  <Avatar
                    src={imageUrl && imageUrl}
                    className="user-image"
                    size={'30px'}
                    name={name}
                  />
                </Link>
                <Dropdown
                  overlay={menu}
                  className="main-admin-drop-lg"
                  trigger={['click']}
                >
                  <a className="ant-dropdown-link name-lnk">
                    {name || emailName}
                  </a>
                </Dropdown>
              </Menu.Item>
              <Collapse>
                <Panel
                  header={
                    <div
                      className="disply-infomat"
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Icon type="info-circle" />
                      <h3>About the Site</h3>
                    </div>
                  }
                  key="1"
                >
                  {text}
                </Panel>
              </Collapse>
              <Menu.Item className="disply">
                <Dropdown overlay={menuone} trigger={['click']}>
                  <a className="ant-dropdown-link">
                    About the Site
                    <Icon type="down" />
                  </a>
                </Dropdown>
              </Menu.Item>
              <Menu.Item className="dsply-lg setting-admin">
                <Link
                  to={{
                    pathname: `/p/${loginInfo && loginInfo.userId}`,
                  }}
                >
                  <Avatar
                    src={imageUrl && imageUrl}
                    className="user-image"
                    size={'30px'}
                    name={name}
                  />
                </Link>
              </Menu.Item>
              <Menu.Item key="linkdrop" className="dsply-lg setting-admin">
                <Dropdown
                  overlay={menu}
                  className=" main-admin-drop-lg"
                  trigger={['click']}
                >
                  <a className="ant-dropdown-link burgr-btn">
                    <Button className="toggler-cross">
                      <Icon
                        className="customToggler btnInstant1"
                        type="minus"
                      />
                      <Icon
                        className="customToggler btnInstant2"
                        type="minus"
                      />
                      <Icon
                        className="customToggler btnInstant3"
                        type="minus"
                      />
                    </Button>
                  </a>
                </Dropdown>
              </Menu.Item>
              <Menu className="main-admin-drop-xs">
                <Loginmenu logout={this.logoutCall} />
              </Menu>
            </Menu>
          ) : (
              <Menu
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{
                  background: '#123e78',
                  // height: '50px',
                  lineHeight: '50px',
                }}
              >
                <Collapse>
                  <Panel header={<h3> About</h3>} key="1">
                    {text}
                  </Panel>
                </Collapse>
                <Menu.Item className="disply">
                  <Dropdown overlay={menuone}>
                    <a className="ant-dropdown-link">
                      About
                    <Icon type="down" />
                    </a>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item
                  key="login"
                  onClick={(e) => {
                    // eslint-disable-next-line
                    e.preventDefault && e.preventDefault();
                    this.setState({ authKey: 'login' });
                    this.showModal();
                    this.handlerNone();
                  }}
                >
                  LOG IN
              </Menu.Item>
                <Menu.Item
                  key="signup"
                  onClick={(e) => {
                    // eslint-disable-next-line
                    e.preventDefault && e.preventDefault();
                    this.setState({ authKey: 'signup' });
                    this.showModal();
                    this.handlerNone();
                  }}
                >
                  SIGN UP
              </Menu.Item>
              </Menu>
            )}
        </Wrapper>
        <ToggleButton>
          {/* <Icon type="ellipsis" onClick={this.handleNav} /> */}
          {this.props.authenticated ? (
            <div className="small-scn">
              <Link
                to={{
                  pathname: `/p/${loginInfo && loginInfo.userId}`,
                }}
              >
                <Avatar
                  src={imageUrl && imageUrl}
                  className="user-image"
                  size={'30px'}
                  name={name}
                />
              </Link>
              <TogButton handlerNav={this.handleNav} clasStyl={this.state.togglerStyle ? 'toggler-cross' : 'toggler-btn'} />
            </div>
          ) : (
              <TogButton handlerNav={this.handleNav} clasStyl={this.state.togglerStyle ? 'toggler-cross' : 'toggler-btn'} />
            )}
        </ToggleButton>
        <Login
          open={this.state.visible}
          close={this.handleCancel}
          ok={this.handleOk}
          authKey={this.state.authKey}
          changeAuth={this.changeAuth}
        />
      </div>
    );
  }
}

Header.defaultProps = {
  logout: () => { },
  authenticated: false,
  history: {},
};

Header.propTypes = {
  logout: PropTypes.func,
  accessToken: PropTypes.func,
  authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  history: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    logout: () => dispatch(logoutUserAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withRouter
)(Header);
