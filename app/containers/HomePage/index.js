/**
 *
 * HomePage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import Loader from "components/Loader";
import { createStructuredSelector } from "reselect";
import { get } from "lodash";
import { compose } from "redux";
import { fromJS } from "immutable";
import LiveVideos from "components/LiveVideos/Loadable";
import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectHomePage from "./selectors";
import { appAccessToken, makeSelectCurrentUser, loginUser } from "../App/selectors";
import reducer from "./reducer";
import { toProps, propTypes } from "./constants";
import saga from "./saga";
import Wrapper from "./homePageStyle";
// eslint-disable-next-line
export class HomePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static getDerivedStateFromProps(nextProps) {
    const { loginUser } = nextProps;
    const currentUsername = get(this, "nextProps.homepage.setAbouttrading.publicInfo.name", "");
    // console.log('nextProps', nextProps);
    if (loginUser !== null && loginUser !== undefined) {
      return {
        loginInfo: loginUser || null,
        currentUsername,
        loading: false
      };
    }
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      loading: true,
      appAccessToken: props.appAccess ? fromJS(props.appAccess).toJS() : "empty"
    };
  }

  async componentDidMount() {
    this.props.defaultAction();
    const token = this.state.appAccessToken.appAccessToken;
    const usrId = this.state.loginInfo && this.state.loginInfo.userId;
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    await this.props.loginuseedetailAction({ config, usrId });
  }

  render() {
    const { match, popularAction, loginuseedetailAction, homepageAction } = this.props;
    const isAuthenticated = get(this, "props.isAuthenticated", false);
    const loading = this.props.homepage.userInfoLoading;
    if (isAuthenticated) {
      const publicInfo = get(this, "props.homepage.setAbouttrading.publicInfo");
      const name = get(publicInfo, "name", "");
      if (loading === false && name === null) {
        return <Redirect to="/detail" />;
      }
    }
    let loadingWrapper = null;
    // if (this.state.loading) {
    //   loadingWrapper = (
    //     <div
    //       style={{
    //         background: "black",
    //         position: "fixed",
    //         display: "table",
    //         height: "100%",
    //         zIndex: 11111,
    //         width: "100%",
    //         bottom: 0,
    //         right: 0,
    //         left: 0,
    //         top: 0
    //       }}
    //     >
    //       <Loader />
    //     </div>
    //   );
    // }
    return (
      <Wrapper>
        {loadingWrapper}
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <div style={{ color: "#fff" }}>
          <LiveVideos
            action={popularAction}
            homepageAction={homepageAction}
            loginuseedetailAction={loginuseedetailAction}
            match={match}
          />
        </div>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
  isAuthenticated: makeSelectCurrentUser(),
  appAccess: appAccessToken(),
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

const withReducer = injectReducer({ key: "homePage", reducer });
const withSaga = injectSaga({ key: "homePage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(HomePage);
