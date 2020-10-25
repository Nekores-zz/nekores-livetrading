import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Tabs, Layout, Col, Row, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { fromJS } from 'immutable';
import Loader from 'components/Loader';
import InfiniteScroll from 'react-infinite-scroller';
import { get } from 'lodash';
import Skeleton from 'react-loading-skeleton';

// import VideoInfoLive from 'components/VideoInfoLive/Loadable';
import { toProps } from '../../containers/HomePage/constants';
import Live from './live';
// import Filter from './filter';
// import FilterSystem from 'components/FilterSystem';
import LiveWrapper from './liveStyles';
import {
  makeSelectCurrentUser,
  loginUser,
  appAccessToken,
} from '../../containers/App/selectors';
import makeSelectHomePage from '../../containers/HomePage/selectors';
import makeSelectViewDetails from '../../containers/View/selectors';
import live from '../../assets/images/live.png';
import banner from '../../assets/images/party.png';

class LiveVideos extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.homePage.sortBroadcasters !== prevState.sortBroadcasters) {
      return {
        replays: nextProps.homePage.sortBroadcasters.replays,
        liveBroadcasters: nextProps.homePage.sortBroadcasters.sortBroadcasters,
        publicUser: nextProps.homePage.setAbouttrading && nextProps.homePage.setAbouttrading.publicInfo,
        loading: false,
        playbacks: nextProps.homePage.playbacks || [],
      };
    }
    return {
      relays: prevState.sortBroadcasters,
      loading: false,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      users: {},
      online: {},
      replays: {},
      filter: false,
      loading: true,
      playbacks: [],
      isLoading: false,
      top: 50,
      pageSize: 12,
      pageNumber: 0,
      scrolling: false,
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }
  componentDidMount() {
    this.fetchVideos(this.state.pageNumber);
    // this.fetchFollowVideos();
  }
  // ordered(items) {
  //   return 1;
  // }
  // fetchFollowVideos = async () => {
  //   const token = this.state.appAccessToken.appAccessToken;
  //   const config = {
  //     headers: { Authorization: `bearer ${token}` },
  //   };
  //   this.props.loginuseedetailAction({ config });
  // }

  fetchVideos = (pageNumber) => {
    this.setState({ isLoading: true });
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    if (!this.state.isLoading) {
      this.props.homepageAction({
        config,
        pageSize: pageNumber,
        setLoading: (isLoading) => this.setState({ isLoading }),
      });
    }
  }

  toggleSearch() {
    const searchbox = document.querySelector('.searchbox');
    searchbox.classList.toggle('displayBlock');
  }

  loadMore = () => {
    const { replays } = this.state;
    if (!this.state.isLoading && replays.pageNumber === this.state.pageNumber) {
      if ((replays.pageSize * (replays.pageNumber + 1)) <= replays.totalNumber) {
        // const pageSize = replays.pageSize + 16;
        this.setState({ pageNumber: this.state.pageNumber + 1 }, () => this.fetchVideos(this.state.pageNumber));
        // this.fetchVideos(this.state.pageNumber + 1);
      }
    }
  }

  loadadd = (pageNumber) => {
    const { replays } = this.state;
    if (replays.pageSize * replays.pageNumber <= replays.totalNumber) {
      const pageSize = replays.pageSize + 16;
      if (pageSize !== this.state.pageSize) {
        this.setState({ pageSize });
      }
      this.fetchVideos(this.state.pageNumber);
    }
  }

  toggle = (value) => {
    this.setState({ loading: value });
  }

  render() {
    const { match } = this.props;
    const { liveBroadcasters, publicUser, playbacks } = this.state;
    const followingReplay = publicUser && publicUser.followings;
    const broadcaster = liveBroadcasters && liveBroadcasters.users;
    // if (broadcaster instanceof Array) {
    //   broadcaster = broadcaster.sort((a, b) => b.created - a.created);
    // }

    // const playbacks = replays && replays.playbacks;
    // if (playbacks instanceof Array) {
    //   playbacks = playbacks.sort((a, b) => b.created - a.created);
    // }
    const { Content } = Layout;
    const TabPane = Tabs.TabPane;
    let loadingWrapper = null;
    if (this.state.loading) {
      loadingWrapper = (
        <div
          style={{
            background: '#101219',
            transition: '0.1s all',
            position: 'fixed',
            display: 'table',
            zIndex: 1111111,
            height: '100%',
            width: '100%',
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
          }}
        >
          <Loader />
        </div>
      );
    }
    const lstlodr = <Skeleton count={3} />;
    // sort((a, b) => b.created - a.created)
    return (
      <LiveWrapper>
        {loadingWrapper}
        <Layout >
          <Content style={{ padding: '0 12.5% 70px 12.5%', marginTop: '30px' }}>
            <Row>
              <Tabs defaultActiveKey="1">

                <TabPane tab="Popular" key="Popularoffline">
                  <h5 className="online">Live</h5>
                  <Row>
                    {broadcaster && broadcaster.length > 0 ? Array.isArray(broadcaster) && broadcaster.map((item, index) => (
                      <Col
                        xs={24}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={6}
                        className="xs-class no-styl-typ"
                        key={index}
                      >
                        <Link
                          to={window.screen.width <= 768 ? {
                            pathname: `/u/${item &&
                              item.broadcaster &&
                              item.broadcaster.streamUid}/p`,
                            state: item,
                          } : {
                            pathname: `/u/${item &&
                                item.broadcaster &&
                                item.broadcaster.streamUid}`,
                            state: item,
                          }}
                          style={{
                            textDecoration: 'none !important',
                          }}
                        >
                          <Live
                            item={item}
                            live={live}
                            banner={banner}
                            match={match}
                          />
                        </Link>
                      </Col>
                    )) : <p style={{ color: '#507191', marginLeft: '20px', fontSize: '12px' }}>No broadcasts available</p>}
                  </Row>
                  <Row>
                    <h5 className="online">replays</h5>
                    <div id="scrollableDiv">
                      <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadMore}
                        hasMore={true || false}
                        loader={lstlodr}
                        key="infinite1"
                      >
                        <div key="Replaysloader">
                          {playbacks && playbacks.length > 0 ? Array.isArray(playbacks) &&
                            playbacks.map((item, index) => (
                              <Col
                                key={item.uid}
                                xs={24}
                                sm={12}
                                md={8}
                                lg={8}
                                xl={6}
                                className="xs-class no-styl-typ"
                              >
                                <Link
                                  to={window.screen.width <= 768 ? {
                                    pathname: `/uu/${item && item.uid}/p`,
                                    state: item,
                                  } : { pathname: `/r/${item && item.uid}`, state: item }}
                                  style={{
                                    textDecoration: 'none !important',
                                  }}
                                >
                                  <Live
                                    item={item}
                                    live={live}
                                    banner={banner}
                                    match={match}
                                  />
                                </Link>
                              </Col>
                            )) : <p style={{ color: '#507191', marginLeft: '20px', fontSize: '12px' }}>No playbacks aviliable</p>}
                        </div>
                      </InfiniteScroll>
                    </div>
                  </Row>
                </TabPane>
                {this.props.authenticated
                  ? <TabPane tab="Following" key="Following">
                    <InfiniteScroll
                      pageStart={0}
                      loadMore={this.loadMore}
                      hasMore={true || false}
                      loader={lstlodr}
                      key="infinite2"

                    >
                      <div id="scrollableDiv" key="Followloader">
                        {Array.isArray(followingReplay && followingReplay) &&
                          followingReplay.map((item, index) => (
                            <div key={item.uid}>
                              {item.playbacks.map((repls, ind) => (
                                <Col
                                  key={ind}
                                  xs={24}
                                  sm={12}
                                  md={8}
                                  lg={8}
                                  xl={6}
                                  className="xs-class no-styl-typ"
                                >
                                  <Link
                                    to={{
                                      pathname: `/r/${repls && repls.uid}`,
                                      state: repls,
                                    }}
                                    style={{ textDecoration: 'none !important' }}
                                  >
                                    <Live item={item} floItm={repls} live={live} match={match} />
                                  </Link>
                                </Col>
                              ))
                              }
                            </div>
                          ))}
                      </div>
                    </InfiniteScroll>
                  </TabPane> : null}
              </Tabs>
            </Row>
          </Content>
        </Layout>
      </LiveWrapper>
    );
  }
}

LiveVideos.defaultProps = {
  dispatch: PropTypes.func.isRequired,
  loginUser: () => { },
  homePage: {},
  authenticated: false,
};

LiveVideos.propTypes = {
  authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loginUser: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
  homepageAction: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
    // homepageAction: (payload) => dispatch(homepageAction(payload)),
  };
}

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  homePage: makeSelectHomePage(),
  views: makeSelectViewDetails(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(LiveVideos);
