/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Layout, Row, Col } from 'antd';
import { connect } from 'react-redux';
import Header from 'components/Header/Loadable';
import Login from 'containers/Login/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import View from 'containers/View/Loadable';
import GoLive from 'containers/GoLive/Loadable';
import ProfileAbout from 'containers/ProfileAbout/Loadable';
import resetPassword from 'containers/ResetPassword/Loadable';
import AboutTrading from 'containers/AboutTrading/Loadable';
// import AboutPage from 'containers/AboutPage/Loadable';
import PrivacyPage from 'containers/PrivacyPage/Loadable';
import TosPage from 'containers/TosPage/Loadable';
import SetAccoutDetails from 'containers/SetAccoutDetails/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createStructuredSelector } from 'reselect';
import { fromJS } from 'immutable';
import moment from 'moment';
// import chatbox from '../../components/CommentBox/Loadable';
import { UpdateSetTokenAction } from './actions';
import { loginUser, appAccessToken, makeSelectCurrentUser } from './selectors';
// import { Row, Col } from '../../components/Common/index';
import AppWrapper from './appStyles';
import logo from '../../assets/images/logo/logo-white.png';
import { getAccessToken, refreshAppAccessToken } from './accessToken';
import { actions } from '../HomePage/constants';
import makeSelectHomePage from '../HomePage/selectors';

export class App extends React.Component {
  // eslint-disable-next-line
  static getDerivedStateFromProps(nextProps) {

    // const { loginUser } = nextProps;
    // if (loginUser !== null && loginUser !== undefined) {
    //   return {
    //     loginInfo: loginUser,
    //   };
    // }
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      // loginInfo: null,
      loaded: false,
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }

  async componentDidMount() {
    await this.getAppAccessToken();
  }

  async getAppAccessToken() {
    // const fireBaseToken = this.state.loginInfo.IdToken || '';
    const oldAccess = (this.state.appAccessToken && this.state.appAccessToken) || '';
    const oldAccessCreated = oldAccess.date;
    const oldAccessCreatedExpires = oldAccess.expiresIn;
    const expiresAt = moment(oldAccessCreated)
      .add(`${oldAccessCreatedExpires}`, 'seconds')
      .valueOf();
    const now = moment().valueOf();
    // this.setState({loaded: true})
    if (!oldAccess.appAccessToken || oldAccess === 'empty') {
      await getAccessToken(this.props.UpdateSetTokenAction, '', this.props.updateUserInfo);
      this.setState({ loaded: true });
    }
    if (expiresAt < now && oldAccessCreatedExpires !== -1) {
      await refreshAppAccessToken(
        oldAccess.refreshedToken,
        this.props.UpdateSetTokenAction
      );
      this.setState({ loaded: true });
    } else {
      // eslint-disable-next-line no-console
      console.log('expires');
    }

    this.setState({ loaded: true });
  }
  AuthenticatedRoute = ({ component, ...rest }) => this.props.authenticated ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect to="/" />
  );

  render() {
    // eslint-disable-next-line

    // const { userInfo, loginUser } = this.props;
    // const userName = userInfo && userInfo.setAbouttrading && userInfo.setAbouttrading.publicInfo && userInfo.setAbouttrading.publicInfo.name;
    // const loginname = loginUser && loginUser.name;
    // if (this.props.authenticated && ((userName === null || userName === undefined || userName === '') || (loginname === null || loginname === undefined || loginname === ''))) {
    //   return <Redirect to="/detail" />;
    // }
    const { history } = this.props;
    const { location } = history;
    if (this.state.loaded) {
      return (
        <AppWrapper>
          <Helmet titleTemplate="LiveTrading" defaultTitle="LiveTrading">
            <meta name="description" content="Broadcast Yourself Live" />
          </Helmet>
          <BrowserRouter>
            <Layout style={{ height: '100%' }}>
              <Layout.Header
                style={{
                  background: '#123e78',
                  height: '50px',
                }}
              >
                <div style={{ height: '100%' }}>
                  <Row>
                    <Col xs={8} sm={8} md={8} lg={6}>
                      <div className="logo">
                        <Link to="/">
                          <img src={logo} alt="#" />
                        </Link>
                      </div>
                    </Col>
                    <Col xs={16} sm={16} md={16} lg={18}>
                      <Header accessToken={this.getAppAccessToken} userInfo={this.props.userInfo} />
                    </Col>
                  </Row>
                </div>
              </Layout.Header>
              <Layout.Content style={{ height: '100%' }}>
                <TransitionGroup style={{ height: '100%' }}>
                  <CSSTransition
                    key={location.pathname}
                    classNames="fadeTranslate"
                    timeout={100}
                    mountOnEnter
                    unmountOnExit
                  >
                    <section
                      className="fix-container"
                      style={{ height: '100%' }}
                    >
                      <Switch>
                        <Route exect path="/p/privacy" component={PrivacyPage} />
                        <Route path="/p/terms" component={TosPage} />
                        {/* <Route path="/p/about" component={AboutPage} /> */}
                        <Route path="/login" component={Login} />
                        {window.screen.width <= 768 ? (
                          <Route path="/uu/:id/p" component={View} />
                        ) : (
                          <Route path="/r/:id" component={View} />
                        )}
                        {window.screen.width <= 768 ? (
                          <Route path="/u/:id/p" component={View} />
                        ) : (
                          <Route path="/u/:id" component={View} />
                        )}
                        <this.AuthenticatedRoute
                          path="/o/:id"
                          component={ProfileAbout}
                        />
                        <this.AuthenticatedRoute
                          path="/s"
                          component={GoLive}
                        />
                        <this.AuthenticatedRoute
                          path="/p/:id"
                          component={AboutTrading}
                        />
                        <this.AuthenticatedRoute
                          path="/detail"
                          component={SetAccoutDetails}
                        />
                        <Route
                          path="/reset-password"
                          component={resetPassword}
                        />
                        <Route
                          path="/chatbox/:id"
                          component={View}
                        />
                        <Route
                          path="/not-found"
                          render={() => (
                            <h1 style={{ color: '#fff' }}>Not Found</h1>
                          )}
                        />
                        <Route path="/" component={HomePage} />
                        <Route path="" component={NotFoundPage} />
                      </Switch>
                    </section>
                  </CSSTransition>
                </TransitionGroup>
              </Layout.Content>
            </Layout>
          </BrowserRouter>
        </AppWrapper>
      );
    }
    return null;
  }
}

App.defaultProps = {
  history: {},
  loginUser: () => { },
  authenticated: false,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    UpdateSetTokenAction: (payload) => dispatch(UpdateSetTokenAction(payload)),
    updateUserInfo: (payload) => dispatch(actions.loginuseedetailAction(payload)),
  };
}

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
  userInfo: makeSelectHomePage(),

  // loginUser: PropTypes.oneOfType([PropTypes.object]),
});
App.propTypes = {
  authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  history: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
  UpdateSetTokenAction: PropTypes.func,
  loginUser: PropTypes.oneOfType([PropTypes.object]),
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withRouter
)(App);
