/**
 *
 * Settings
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import injectSaga from 'utils/injectSaga';
// import { saveState } from 'utils/persistState';
import injectReducer from 'utils/injectReducer';
import { fromJS } from 'immutable';
import {
  Input,
  Form,
  Button,
  Row,
  Col,
  // Upload,
  // Icon,
  notification,
} from 'antd';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// eslint-disable-next-line
import fire from '../../utils/config';
// eslint-disable-next-line
import twitterProvider from '../../utils/config';
import { SettingStyl } from './settingsStyle';
import makeSelectSettings from './selectors';
import reducer from './reducer';

import { toProps, propTypes } from './constants';
import saga from './saga';
import { loginUser, appAccessToken } from '../../containers/App/selectors';
import { loginUserAction, UpdateUserAction } from '../App/actions';
// import LinkedAccounts from './linkedAccounts';
import BlockedUsers from '../../components/BlockedUsers';

import ChangePasswords from './changePassword';
import EmailForm from './emailForm';
const fireBase = fire.fire;
const google = fire.googleProvider;
const facebook = fire.facebookProvider;

class Settings extends React.Component {
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
      currentEmail: '',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      // userInformation: fromJS(this.props.loginUser).toJS()
    };
  }
  componentDidMount() {
    const userinfo = this.state;
    const uId = userinfo && userinfo.userId;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    this.props.userinfoAction({ config, uId });
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }

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
  onChangeCurrentEmail = (e) => {
    // this.props.updateUser({ name: "email", value: e.target.value });
    this.setState({ currentEmail: e.target.value });
  };
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
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
  handleSubmitEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    this.props.updateemailAction({ email, config });
  };

  // this.reauthenticate(this.state.currentPassword)
  //   .then(() => {
  // const user = fireBase.auth().currentUser;
  // user
  //   .updateEmail(this.state.email)
  //   // eslint-disable-next-line
  //   .then(() => {
  //     const updateInfo = { ...this.state.loginInfo };
  //     updateInfo.email = this.state.email;
  //     saveState(updateInfo);

  //     notification.success({
  //       message: 'Email Updated',
  //       description: 'Your Email has been succesfully Updated!',
  //     });
  //   })
  //   .catch((error) => {
  //     notification.error({
  //       message: 'Account',
  //       description: error.message,
  //     });
  //   });
  // })
  // .catch((error) => {
  //   notification.error({
  //     message: 'Account',
  //     description: error.message,
  //   });
  // });
  // };
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
  handleUpdateEmail = (e) => {
    // this.props.updateUser({ name: "email", value: e.target.value });
    this.setState({ email: e.target.value });
  };

  render() {
    const { userinfo, golive, unblockAction, userinfoAction, config } = this.props;
    const { getFieldDecorator } = this.props.form;
    const privatemail = userinfo && userinfo.privateInfo && userinfo.privateInfo.email;
    return (
      <div style={{ height: '100%' }}>
        <Helmet>
          <title>Settings</title>
          <meta name="description" content="Description of Settings" />
        </Helmet>
        <div className="settings-page">
          <SettingStyl>
            <Row>
              {/* <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <LinkedAccounts />
              </Col> */}
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <EmailForm
                  privatemail={privatemail}
                  getFieldDecorator={getFieldDecorator}
                  handleUpdateEmail={this.handleUpdateEmail}
                  handleSubmitEmail={this.handleSubmitEmail}
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <ChangePasswords
                  onChangeCurrentPassword={this.onChangeCurrentPassword}
                  checkConfirm={this.checkConfirm}
                  onChangeNewPassword={this.onChangeNewPassword}
                  checkPassword={this.checkPassword}
                  ChangePassword={this.ChangePassword}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
            </Row>
            <BlockedUsers golive={golive} unblockAction={unblockAction} userinfoAction={userinfoAction} config={config} />

          </SettingStyl>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
  appAccess: PropTypes.oneOfType([PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  settings: makeSelectSettings(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
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

const withReducer = injectReducer({ key: 'settings', reducer });
const withSaga = injectSaga({ key: 'settings', saga });

const FoemNew = compose(
  withReducer,
  withSaga,
  withConnect
)(Settings);

const AddForm = Form.create({})(FoemNew);

export default AddForm;
