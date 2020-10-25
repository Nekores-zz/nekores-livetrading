/**
 *
 * AboutTrading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAboutTrading from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import UsersDetailPage from '../../components/UserDetialPage';
import saga from './saga';
import {
  appAccessToken,
  makeSelectCurrentUser,
  loginUser,
} from '../App/selectors';
import Wrapper from './abouttradingStyle';

export class AboutTrading extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.abouttrading.userInfo !== prevState.userInfo) {
      return {
        userInfo: nextProps.abouttrading.userInfo,
        loading: false,
      };
    }
    return {
      userInfo: prevState.userInfo,
      loading: false,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      loading: true,
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }
  componentDidMount() {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    this.props.abouttradingAction({
      config,
    });
  }

  follo = (accessUid, followers) => {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    const { match } = this.props;
    this.props.followAction({ config, uid: accessUid && accessUid.uid, playId: match && match.params && match.params.id, followers });
  };
  unfollo = (accessUid, followers) => {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    const { match } = this.props;
    this.props.unfollowAction({ config, uid: accessUid && accessUid.uid, playId: match && match.params && match.params.id, followers });
  };

  render() {
    const { videosAction, abouttrading } = this.props;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    let loadingWrapper = null;
    if (this.state.loading) {
      loadingWrapper = (
        <div
          style={{
            zIndex: 11111,
            display: 'table',
            height: '100%',
            width: '100%',
            background: 'black',
            position: 'fixed',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <Loader />
        </div>
      );
    }
    return (
      <Wrapper>
        {loadingWrapper}
        <Helmet>
          <title>ProfileAbout</title>
          <meta name="description" content="Description of ProfileAbout" />
        </Helmet>
        <UsersDetailPage
          aboutProfile={this.state.userInfo}
          aboutlogin={this.state.loginInfo}
          button
          mainprop={this.props.match}
          follo={this.follo}
          unfollo={this.unfollo}
          deleteAction={this.props.deleteAction}
          config={config}
          userdetail={this.props.abouttradingAction}
          authenticated={this.props.authenticated}
          homepageAction={videosAction}
          setVide={abouttrading && abouttrading.setVideos}
          playbacks={abouttrading && abouttrading.playVideo}
        />
      </Wrapper>
    );
  }
}
AboutTrading.defaultProps = {
  history: {},
  loginUser: () => { },
  authenticated: false,
};
AboutTrading.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  abouttrading: makeSelectAboutTrading(),
  appAccess: appAccessToken(),
  authenticated: makeSelectCurrentUser(),
  loginUser: loginUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'aboutTrading', reducer });
const withSaga = injectSaga({ key: 'aboutTrading', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AboutTrading);
