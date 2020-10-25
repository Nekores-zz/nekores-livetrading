import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUp from 'containers/SignUp/Loadable';
import SignIn from 'containers/SignIn/Loadable';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
// import { saveState } from 'utils/persistState';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { Modal, Tabs, Col, Row } from 'antd';
// eslint-disable-next-line
import fire from '../../utils/config';
// eslint-disable-next-line
import twitterProvider from '../../utils/config';

import makeSelectLogin from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import { actions } from '../HomePage/constants';
import { LoginWrapper } from './loginStyles';
import { UpdateSetTokenAction, loginUserAction } from '../App/actions';
import saga from './saga';
import { loginUser } from '../../containers/App/selectors';
import loginBackround from '../../assets/images/login.png';
import logoWhite from '../../assets/images/logo/logo-white.png';
import { getAccessToken } from './../App/accessToken';
const TabPane = Tabs.TabPane;
// const twitter = twitterProvider.twitterProvider;
// const google = twitterProvider.googleProvider;
// const facebook = twitterProvider.facebookProvider;

export class Login extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static getDerivedStateFromProps(nextProps) {
    const { loginUser } = nextProps;
    if (loginUser !== null && loginUser !== undefined) {
      return {
        loginInfo: loginUser || null,
      };
    }
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      socialSignup: {
        name: '',
        email: '',
        accessToken: '',
        expiresIn: null,
        picture: null,
        source: '',
        userId: '',
      },
      loginInfo: null,
      redirect_uri: 'http://localhost:8000/',
    };
  }

  // onSuccessTwitter = () => {
  //   const social = {};
  //   fire.fire
  //     .auth()
  //     .signInWithPopup(twitter)
  //     .then((response) => {
  //       social.accessToken = response.credential.accessToken;
  //       social.refreshToken = response.user.refreshToken;
  //       social.secret = response.credential.secret;
  //       social.name = response.additionalUserInfo.profile.name;
  //       social.picture = response.additionalUserInfo.profile.profile_image_url;
  //       social.expiresIn = response.expires_in;
  //       social.userId = response.user.uid;
  //       social.source = 'twitter';
  //       fire.fire
  //         .auth()
  //         .currentUser.getIdToken()
  //         .then((IdToken) => {
  //           social.IdToken = IdToken;
  //           this.props.loginUserAction(social);
  //           saveState(social);
  //           this.props.close();
  //         });
  //     });
  // };

  // onFailedTwitter = () => {
  //   // eslint-disable-next-line
  //   console.log('something went wrong');
  // };

  // responseGoogle = () => {
  //   fire.fire
  //     .auth()
  //     .signInWithPopup(google)
  //     .then((response) => {
  //       const social = {};
  //       social.accessToken = response.credential.accessToken;
  //       social.refreshToken = response.user.refreshToken;
  //       social.email = response.additionalUserInfo.profile.email;
  //       social.name = response.user.displayName;
  //       social.picture = response.additionalUserInfo.profile.picture;
  //       social.userId = response.additionalUserInfo.profile.id;
  //       social.source = 'google';
  //       fire.fire
  //         .auth()
  //         .currentUser.getIdToken()
  //         .then((IdToken) => {
  //           social.IdToken = IdToken;
  //           this.props.loginUserAction(social);
  //           saveState(social);
  //           this.props.close();
  //         });
  //     });
  // };

  // // getting response from facebook
  // responseFacebook = () => {
  //   fire.fire
  //     .auth()
  //     .signInWithPopup(facebook)
  //     .then((response) => {
  //       const social = {};
  //       social.accessToken = response.credential.accessToken;
  //       social.refreshToken = response.user.refreshToken;
  //       social.email = response.additionalUserInfo.profile.email;
  //       social.name = response.additionalUserInfo.profile.name;
  //       social.picture = response.additionalUserInfo.profile.picture.data.url;
  //       social.userId = response.additionalUserInfo.profile.id;
  //       social.source = 'facebook';
  //       fire.fire
  //         .auth()
  //         .currentUser.getIdToken()
  //         .then((IdToken) => {
  //           social.IdToken = IdToken;
  //           this.props.loginUserAction(social);
  //           saveState(social);
  //           this.props.close();
  //         });
  //     });
  // };
  // Cfacebook = () => {
  //   // eslint-disable-next-line
  //   console.log('auth with facebook');
  // };

  afterLogin = async () => {
    if (this.state.loginInfo && this.state.loginInfo.IdToken) {
      const firebaseIdToken = this.state.loginInfo.IdToken;
      await getAccessToken(this.props.UpdateSetTokenAction, firebaseIdToken, this.props.loginuseedetailAction);
    }
  };
  ChangeTabs = (activeKeys) => {
    this.props.changeAuth(activeKeys);
  };
  render() {
    const { loginInfo } = this.state;
    const token = loginInfo && loginInfo.refreshToken;
    const userI = loginInfo && loginInfo.userId;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    const { open, close } = this.props;
    return (
      <LoginWrapper>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <Modal
          className="login-model"
          visible={open}
          footer={null}
          width={'60%'}
          height={'80%'}
          bodyStyle={{ height: '520px' }}
          onCancel={close}
        >
          <Row>
            <Col
              md={12}
              lg={12}
              xl={12}
              xxl={10}
              className="no-pr"
              style={{ paddingRight: '0' }}
            >
              <div>
                <div
                  style={{
                    background: `url(${loginBackround})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '520px',
                  }}
                  className="login-content-left seema"
                >
                  <div
                    className="login-overlay"
                    style={{ height: '-webkit-fill-available' }}
                  >
                    <img alt="#" src={logoWhite} className="logo" />
                    {/* <p>
                    Login with Social Media to get <br /> quick access.
                  </p>

                  <Button
                    className="fb-style"
                    // onClick={this.responseFacebook}
                    type="primary"
                    size="large"
                  >
                    <Icon type="facebook" /> Continue with Facebook
                  </Button>

                  <Button
                    className="g-style"
                    // onClick={this.responseGoogle}
                    type="primary"
                    size="large"
                  >
                    <Icon type="google" /> Continue with Google
                  </Button>
                  <Button
                    className="twitter-style"
                    // onClick={this.onSuccessTwitter}
                    type="primary"
                    size="large"
                  >
                    <Icon type="twitter" /> Continue with Twitter
                  </Button> */}
                  </div>
                </div>
              </div>
            </Col>

            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              xxl={12}
              style={{ padding: '0' }}
            >
              <div className="login-content-right">
                <img alt="#" src={logoWhite} className="logo" />
                <Tabs activeKey={this.props.authKey} onChange={this.ChangeTabs}>
                  <TabPane tab="Log In" key="login">
                    <SignIn afterLogin={this.afterLogin} close={close} loginuseedetailAction={this.props.loginuseedetailAction} config={config} usrId={userI} />
                  </TabPane>
                  <TabPane tab="Sign Up" key="signup">
                    <SignUp afterLogin={this.afterLogin} close={close} />
                  </TabPane>
                </Tabs>
                {/* <div className="login-sm-btns">
                  <hr className="or-hr" />
                  <p>Login in using Social Media to get quick access.</p>
                  <Button
                    className="fb-xs s-xs"
                    // onClick={this.responseFacebook}
                    type="primary"
                    size="large"
                  >
                    <Icon type="facebook" />
                  </Button>

                  <Button
                    className="g-xs s-xs"
                    // onClick={this.responseGoogle}
                    type="primary"
                    size="large"
                  >
                    <Icon type="google" />
                  </Button>
                  <Button
                    className="twitter-xs s-xs"
                    // onClick={this.onSuccessTwitter}
                    type="primary"
                    size="large"
                  >
                    <Icon type="twitter" />
                  </Button>
                </div> */}
              </div>
            </Col>
          </Row>
        </Modal>
      </LoginWrapper>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  UpdateSetTokenAction: PropTypes.func,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  loginUser: loginUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
    loginUserAction: (payload) => dispatch(loginUserAction(payload)),
    UpdateSetTokenAction: (payload) => dispatch(UpdateSetTokenAction(payload)),
    loginuseedetailAction: (payload) => dispatch(actions.loginuseedetailAction(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Login);
