/**
 *
 * ProfileAbout
 *
 */

import React from "react";
import PropTypes from "prop-types";
import Loader from "components/Loader";
import { connect } from "react-redux";
import { fromJS } from "immutable";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import UsersDetail from "components/UsersDetail/Loadable";
import injectReducer from "utils/injectReducer";
import makeSelectProfileAbout from "./selectors";
import makeSelectAboutTrading from "../AboutTrading/selectors";
import reducer from "./reducer";
import { toProps, propTypes } from "./constants";
import saga from "./saga";
import { appAccessToken, makeSelectCurrentUser, loginUser } from "../App/selectors";
import Wrapper from "./ProfileAboutStyle";
// eslint-disable-next-line

export class ProfileAbout extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      loading: false,
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : "empty",
      appAccessToken: props.appAccess ? fromJS(props.appAccess).toJS() : "empty"
    };
  }

  componentDidMount() {
    const uid = this.props.match.params.id;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    this.props.aboutuserAction({
      config,
      uid
    });
    this.props.abouttradingAction({
      config
    });
    console.log(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.users !== nextProps.profileabout.findBroadcaster) {
      return {
        users: nextProps.profileabout.findBroadcaster,
        loading: false
      };
    }
    return {};
  }
  follo = (accessUid, followers) => {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const { match } = this.props;
    this.props.followAction({
      config,
      uid: accessUid && accessUid.uid,
      playId: match && match.params && match.params.id,
      followers
    });
  };
  unfollo = (accessUid, followers) => {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const { match } = this.props;
    this.props.unfollowAction({
      config,
      uid: accessUid && accessUid.uid,
      playId: match && match.params && match.params.id,
      followers
    });
  };
  render() {
    const { profileabout } = this.props;
    const userinform = profileabout && profileabout.findBroadcaster;
    const { location } = this.props;
    let loadingWrapper = null;
    if (this.state.loading) {
      loadingWrapper = (
        <div
          style={{
            zIndex: 11111,
            display: "table",
            height: "100%",
            width: "100%",
            background: "black",
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
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
        <div>
          <UsersDetail
            abouttrading={profileabout}
            aboutme={userinform}
            location={location}
            follo={this.follo}
            unfollo={this.unfollo}
            match={this.props.match}
          />
        </div>
      </Wrapper>
    );
  }
}

ProfileAbout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes
};

const mapStateToProps = createStructuredSelector({
  profileabout: makeSelectProfileAbout(),
  abouttrading: makeSelectAboutTrading(),
  appAccess: appAccessToken(),
  authenticated: makeSelectCurrentUser(),
  loginUser: loginUser()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch)
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "profileAbout", reducer });
const withSaga = injectSaga({ key: "profileAbout", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ProfileAbout);
