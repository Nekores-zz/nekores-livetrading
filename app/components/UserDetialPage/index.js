/**
 *
 * UsersDetailPage
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tabs, Col } from 'antd';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import butter from '../../assets/users/defaultavatar.png';
import Follower from '../Follower';
import Following from '../Following';
import UserTabInfo from '../UserTabInfo';
import Replays from '../Replays';
import Wrapper from './userStyl';
import AboutTab from './AboutTab';
class UsersDetailPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.setVide.pageNumber === prevState.pageNumber) {
      return {
        setVide: nextProps.setVide,
        playbacks: nextProps.playbacks,
        loading: false,
        pageNumber: nextProps.setVide.pageNumber,
        pageSize: nextProps.setVide.pageSize,
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
      redirect: false,
      setVide: {},
      loading: true,
      playbacks: [],
      isLoading: false,
      pageSize: 8,
      pageNumber: 0,
      scrolling: false,
      loadnumber: 3,
      followloadnumber: 3,
      tabs: [
        {
          tab: 'About',
          Component: AboutTab,
        },
        {
          tab: 'Replays',
          Component: Replays,
        },
        {
          tab: 'Followings',
          Component: Following,
        },
        {
          tab: 'Followers',
          Component: Follower,
        },
      ],
    };
  }
  componentDidMount() {
    fetch('https://lt-pb.livetrading.ch', {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    }).then((res) => {
      // eslint-disable-next-line
      console.log(res);
    });
  }

  componentDidUpdate() {
    // window.scrollTo(0, 0);
  }

  handleScroll = (followings, followers) => {
    const loadnumber = this.state.loadnumber;
    const num = loadnumber + 3;
    if (num <= followings.length) {
      this.setState({ loadnumber: num });
    } else {
      const total = followings.length;
      const remaining = (total - loadnumber) + loadnumber;
      if (total >= num) {
        this.setState({ loadnumber: remaining });
      }
    }
  }

  handlefollowScroll = (followers) => {
    const followloadnumber = this.state.followloadnumber;
    const num = followloadnumber + 3;
    if (num <= followers.length) {
      this.setState({ followloadnumber: num });
    } else {
      const total = followers.length;
      const remaining = (total - followloadnumber) + followloadnumber;
      if (total >= num) {
        this.setState({ followloadnumber: remaining });
      }
    }
  }
  loadMore = (number) => {
    const { setVide, pageNumber, isLoading, pageSize } = this.state;
    const { mainprop, config, homepageAction } = this.props;
    const uid = mainprop && mainprop.params && mainprop.params.id;
    if (!isLoading && setVide.pageNumber === pageNumber) {
      if ((setVide.pageSize * (setVide.pageNumber + 1)) <= setVide.totalNumber) {
        this.setState({ pageNumber: this.state.pageNumber + 1 }, () => homepageAction({ config, pageNumber: this.state.pageNumber, uid }));
      }
    }
  }
  handleReplays = (activeKey) => {
    const { mainprop } = this.props;
    const { pageNumber, setLoading } = this.state;
    const uid = mainprop && mainprop.params && mainprop.params.id;
    this.setState({ activeKey }, () => {
      if (this.state.activeKey === 'Replays') {
        this.props.homepageAction({ config: this.props.config, pageSize: pageNumber, uid, setLoading });
      }
    });
  }

  deletevideo = async (floItm) => {
    this.props.deleteAction({ config: this.props.config, playbackId: floItm });
    this.props.userdetail({ config: this.props.config });
  }
  render() {
    const aboutme = this.props.aboutProfile && this.props.aboutProfile.publicInfo;
    const socialLinks = this.props.aboutProfile && this.props.aboutProfile.socialLinks;
    const username = aboutme && aboutme.name;
    const image = aboutme && aboutme.image;
    const TabPane = Tabs.TabPane;
    const followers = (aboutme && aboutme.followers) || [];
    const followings = (aboutme && aboutme.followings) || [];
    const playbacks = this.props.playbacks || [];
    const totalViews = playbacks.length !== 0 && playbacks.map((item) => item.views).reduce((prev, next) => prev + next);
    const renderTabHeader = (tab) => (
      <div>
        {tab}{' '}{tab === 'Followings' && followings.length}
        {' '}{tab === 'Followers' && followers.length}
      </div>
    );
    const { setVide } = this.state;
    return (
      <Wrapper>
        <div className="user-info">
          <Tabs onChange={(activeKey) => this.handleReplays(activeKey)}>
            <TabPane
              tab={
                <UserTabInfo username={username} image={image} butter={butter} />
              }
              disabled
              key="7"
            />
            {
              this.state.tabs.map(({ tab, Component }) => {
                if (tab === 'About') {
                  return (
                    <TabPane tab={renderTabHeader(tab)} key={tab}>
                      <Component
                        aboutme={aboutme}
                        socialLinks={socialLinks}
                        totalViews={totalViews}
                      />

                    </TabPane>
                  );
                }
                if (tab === 'Replays') {
                  return (
                    <TabPane tab={renderTabHeader(tab)} key={tab}>
                      <Component
                        aboutme={aboutme}
                        publicuserinfo={aboutme}
                        match={this.props.mainprop}
                        deletevideo={this.deletevideo}
                        acthenticate={this.props.authenticated}
                        playbacks={playbacks}
                        loadMore={this.loadMore}
                      />

                    </TabPane>
                  );
                }
                if (tab === 'Followings') {
                  return (
                    <TabPane tab={renderTabHeader(tab)} key={tab}>
                      <Component
                        publicuserinfo={aboutme}
                        followings={followings}
                        follo={this.props.follo}
                        unfollo={this.props.unfollo}
                        handleScroll={this.handleScroll}
                        loadnumber={this.state.loadnumber}
                      />
                    </TabPane>
                  );
                }
                if (tab === 'Followers') {
                  return (
                    <TabPane tab={renderTabHeader(tab)} key={tab}>
                      <Component
                        publicuserinfo={aboutme}
                        followers={followers}
                        follo={this.props.follo}
                        unfollo={this.props.unfollo}
                        handleScroll={this.handleScroll}
                        handlefollowScroll={this.handlefollowScroll}
                      />
                    </TabPane>
                  );
                }
              })
            }
          </Tabs>
        </div>
      </Wrapper>
    );
  }
}

UsersDetailPage.defaultProps = {
};

UsersDetailPage.propTypes = {
  aboutProfile: PropTypes.oneOfType([PropTypes.object]),
  follo: PropTypes.func,
  unfollo: PropTypes.func,
  config: PropTypes.oneOfType([PropTypes.object]),
  mainprop: PropTypes.oneOfType([PropTypes.object]),
};

export default UsersDetailPage;
