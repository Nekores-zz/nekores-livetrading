/**
 *
 * AccountSettings
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import injectSaga from 'utils/injectSaga';
import { saveState } from 'utils/persistState';
import injectReducer from 'utils/injectReducer';
import {
  Input,
  Form,
  Button,
  Icon,
  Upload,
  Tabs,
  notification,
  Alert,
} from 'antd';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// eslint-disable-next-line
import fire from '../../utils/config';
// eslint-disable-next-line
import twitterProvider from '../../utils/config';
import { AccountSettingStyl } from './settingsStyle';
import makeSelectSettings from './selectors';
import reducer from './reducer';
import { Row, Col } from '../../components/Common/index';
import { toProps, propTypes } from './constants';
import saga from './saga';
import avatar from '../../assets/images/avatar.png';
import BgImage from '../../assets/images/settings.png';
import { loginUser } from '../../containers/App/selectors';
import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';
const fireBase = fire.fire;
const google = fire.googleProvider;
const facebook = fire.facebookProvider;

class AccountSettings extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static getDerivedStateFromProps(nextProps) {
    const loginU = nextProps.loginUser || null;
    if (loginUser) {
      return {
        loginInfo: loginU,
      };
    }
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      formLayout: 'vertical',
      email: '',
      loginInfo: null,
      oldPassworld: '',
      newPassword: '',
      currentPassword: '',
      // userInformation: fromJS(this.props.loginUser).toJS()
    };
  }
  onChangeCurrentPassword = (e) => {
    this.setState({
      currentPassword: e.target.value,
    });
  };
  onChangeNewPassword = (e) => {
    this.setState({
      newPassword: e.target.value,
    });
  };
  ChangePassword = (e) => {
    e.preventDefault();
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        const user = fireBase.auth().currentUser;
        const data = this.state.newPassword;
        user
          .updatePassword(data)
          .then(() => {
            notification.success({
              message: 'Password Updated',
              description: 'Your Password has been succesfully Updated!',
            });
          })
          .catch((error) => {
            notification.error({
              message: 'Account',
              description: error.message,
            });
          });
      })
      .catch((error) => {
        notification.error({
          message: 'Account',
          description: error.message,
        });
      });
  };
  handleSubmitEmail = (e) => {
    e.preventDefault();

    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        const user = fireBase.auth().currentUser;
        user
          .updateEmail(this.state.email)
          // eslint-disable-next-line
          .then(function() {
            const updateInfo = { ...this.state.loginInfo };
            updateInfo.email = this.state.email;
            saveState(updateInfo);

            notification.success({
              message: 'Email Updated',
              description: 'Your Email has been succesfully Updated!',
            });
          })
          .catch((error) => {
            notification.error({
              message: 'Account',
              description: error.message,
            });
          });
      })
      .catch((error) => {
        notification.error({
          message: 'Account',
          description: error.message,
        });
      });
  };
  reauthenticatePassword = () => {
    const user = fireBase.auth().currentUser;
    const token = this.state.userInformation.accessToken;
    const credential = google.credential(null, token);
    // console.log(credential);
    return user.reauthenticateAndRetrieveDataWithCredential(credential);
  };
  reauthenticate = (currentPassword) => {
    const user = fireBase.auth().currentUser;
    const details = this.state.loginInfo;
    if (details.source === 'google') {
      const token = details.accessToken;
      const credential = google.credential(null, token);
      // console.log(credential);
      return user.reauthenticateAndRetrieveDataWithCredential(credential);
    } else if (details.source === 'facebook') {
      const token = details.accessToken;
      const credential = facebook.credential(null, token);

      return user.reauthenticateAndRetrieveDataWithCredential(credential);
    } else if (details.source === 'twitter') {
      const token = details.accessToken;
      const secret = details.secret;
      // eslint-disable-next-line
      const credential = twitterProvider.fire.firebase_.auth.TwitterAuthProvider.credential(
        token,
        secret
      );

      return user.reauthenticateAndRetrieveDataWithCredential(credential);
    }
    // eslint-disable-next-line
    const cred = fireBase.firebase_.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };
  handleSubmitName = (e) => {
    e.preventDefault();
    const name = this.state.name;
    this.writeUserData(name);
    this.setState({
      name: '',
    });
    // console.log("save state done!")
  };
  writeUserData = (name) => {
    if (name) {
      const user = fireBase.auth().currentUser;
      user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          const updateInfo = this.state.loginInfo;
          updateInfo.name = name;
          saveState(updateInfo);
          this.props.updateUser({ name: 'name', value: name });
          notification.success({
            message: 'Account Updated',
            description: 'Your Account has been succesfully Updated!',
          });
        })
        .catch((error) => {
          notification.error({
            message: 'Account',
            description: error.message,
          });
          // An error happened.
        });
    } else {
      notification.error({
        message: 'Username Empty',
        description: 'Please enter a Display Name',
      });
    }
  };
  callback = (key) => {
    // eslint-disable-next-line
    console.log(key);
  };
  handleUpdateEmail = (e) => {
    // this.props.updateUser({ name: "email", value: e.target.value });
    this.setState({ email: e.target.value });
  };
  handleUserName = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div style={{ height: '100%' }}>
        <Helmet>
          <title>AccountSettings</title>
          <meta name="description" content="Description of Settings" />
        </Helmet>
        <div
          className="settings-page"
          style={{
            backgroundImage: `url(${BgImage})`,
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <AccountSettingStyl>
            <div className="setting-bar">
              <div className="container">
                <Row>
                  <Col md={1} lg={1} />
                  <Col md={12} lg={12} className="xs-box">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                      <TabPane tab="Edit Profile" key="1">
                        <Row>
                          <Col xs={0} md={2} />
                          <Col md={8} className="xs-padding">
                            <div className="avatar">
                              <img src={avatar} alt="#" />
                              <br />
                              <Upload>
                                <p
                                  style={{
                                    color: '#1890ff',
                                    marginBottom: '24px',
                                  }}
                                >
                                  <Icon type="upload" /> Change Avatar
                                </p>
                              </Upload>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={0} md={2} lg={2} />
                          <Col xs={12} md={8} lg={8} className="xs-padding">
                            <Input
                              name="name"
                              size="large"
                              value={this.state.name}
                              onChange={this.handleUserName}
                              type="text"
                              placeholder="Change Name"
                              style={{
                                zIndex: '1',
                                marginBottom: '25px',
                                borderRadius: '0',
                              }}
                            />
                          </Col>
                          <Col col={12} className="xs-padding">
                            <Form.Item>
                              <Button
                                size="large"
                                type="primary"
                                onClick={this.handleSubmitName}
                                style={{ borderRadius: '0', padding: '0 90px' }}
                              >
                                <Icon type="save" />
                                Update Profile
                              </Button>
                            </Form.Item>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tab="Update Email Address" key="2">
                        <Row>
                          <Col md={2} />
                          <Col
                            md={8}
                            style={{ paddingTop: '20px' }}
                            className="xs-padding"
                          >
                            <Alert
                              message="As an added layer of security, you will be required to authenticate any changes using your password"
                              type="info"
                              showIcon
                            />
                            <div className="name-update">
                              <Form.Item label="Update Your Email">
                                <Input
                                  size="large"
                                  type="email"
                                  value={this.state.email}
                                  placeholder="Please Enter Your New Email"
                                  onChange={this.handleUpdateEmail}
                                  style={{ borderRadius: '0', zIndex: '1' }}
                                />
                              </Form.Item>
                              <Form.Item label="Enter Password">
                                <Input
                                  size="large"
                                  type="password"
                                  value={this.state.currentPassword}
                                  onChange={this.onChangeCurrentPassword}
                                  placeholder="Please Enter Your Current password to Proceed"
                                  style={{ borderRadius: '0', zIndex: '1' }}
                                />
                              </Form.Item>
                            </div>
                          </Col>
                          <Col col={12} className="xs-padding">
                            <Form.Item>
                              <Button
                                size="large"
                                type="primary"
                                onClick={this.handleSubmitEmail}
                                style={{ borderRadius: '0', padding: '0 90px' }}
                              >
                                <Icon type="save" />
                                Update Email
                              </Button>
                            </Form.Item>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tab="Change Password" key="3">
                        <Row>
                          <Col md={2} />
                          <Col md={8} className="xs-padding">
                            <div className="name-update">
                              <Form.Item label="Current Password">
                                <Input
                                  size="large"
                                  type="password"
                                  value={this.state.currentPassword}
                                  onChange={this.onChangeCurrentPassword}
                                  placeholder="Please Enter Your Current password to Proceed"
                                  style={{ borderRadius: '0', zIndex: '1' }}
                                />
                              </Form.Item>

                              <Form.Item label="New Password">
                                <Input
                                  size="large"
                                  type="password"
                                  value={this.state.newPassword}
                                  onChange={this.onChangeNewPassword}
                                  // secureTextEntry={true}
                                  placeholder="Please Enter Your Current password to Proceed"
                                  style={{ borderRadius: '0', zIndex: '1' }}
                                />
                              </Form.Item>
                            </div>
                          </Col>
                          <Col col={12} className="xs-padding">
                            <Form.Item>
                              <Button
                                size="large"
                                type="primary"
                                onClick={this.ChangePassword}
                                style={{ borderRadius: '0', padding: '0 90px' }}
                              >
                                <Icon type="save" />
                                Update Password
                              </Button>
                            </Form.Item>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tab="Manage Accounts" key="4">
                        <div className="name-update">
                          <Row>
                            <Col md={2} />
                            <Col md={8} className="xs-padding">
                              <div className="linked-accounts">
                                <div className="headings">
                                  <h2>Manage Linked Accounts</h2>
                                </div>
                                <div className="link-box">
                                  <Icon type="facebook" /> &nbsp;Facebook
                                  <a>Unlink</a>
                                </div>

                                <div className="link-box">
                                  <Icon type="google-plus" /> &nbsp;Google Plus
                                  <a>link</a>
                                </div>

                                <div className="link-box">
                                  <Icon type="twitter" /> &nbsp;Twitter
                                  <a>link</a>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </TabPane>
                    </Tabs>
                  </Col>
                </Row>
              </div>
            </div>
          </AccountSettingStyl>
        </div>
      </div>
    );
  }
}

AccountSettings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  AccountSettings: makeSelectSettings(),
  loginUser: loginUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
    loginUserAction: (payload) => dispatch(loginUserAction(payload)),
    updateUser: (payload) => dispatch(UpdateUserAction(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'AccountSettings', reducer });
const withSaga = injectSaga({ key: 'AccountSettings', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AccountSettings);
