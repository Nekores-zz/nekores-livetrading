/**
*
* BroadcastDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Tabs,
} from 'antd';
import { fromJS } from 'immutable';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Following from '../../components/Following';
import Follower from '../../components/Follower';
import Replays from '../../components/Replays';
import UserTabInfo from '../../components/UserTabInfo';
import { loginUser, appAccessToken, makeSelectCurrentUser } from '../../containers/App/selectors';
import butter from '../../assets/users/defaultavatar.png';
import AboutTab from './AboutTab';

class BroadcastDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authKey: '1',
      editDialog: false,
      visible: false,
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      loadnumber: 3,
      followloadnumber: 3,
      links: [
        {
          name: 'Login',
          path: '/login',
        },
        {
          name: 'Sign Up',
          path: '/signup',
        },
      ],

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


  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  handleScroll = (followings) => {
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


  showModal = () => {
    this.setState({ visible: true });
  };


  render() {
    const aboutme = this.props.channel;
    const username = aboutme && aboutme.user && aboutme.user.name;
    const image = aboutme && aboutme.user && aboutme.user.image;

    const title = 'No tittle';
    const TabPane = Tabs.TabPane;

    const followers = (aboutme && aboutme.user && aboutme.user.followers) || [];
    const followings = (aboutme && aboutme.user && aboutme.user.followings) || [];

    const playbacks = aboutme && aboutme.user && aboutme.user.playbacks ? aboutme.user.playbacks : aboutme && aboutme.playbacks;
    const totalViews = playbacks && playbacks.length !== 0 && playbacks.map((item) => item.views).reduce((prev, next) => prev + next);

    const livefollowers = (aboutme && aboutme.followers) || [];
    const livefollowings = (aboutme && aboutme.followings) || [];

    const followerlength = followers.length || livefollowers.length;
    const followinglength = followings.length || livefollowings.length;

    const followingUsers = livefollowings.length !== 0 ? livefollowings : followings;
    const followerUsers = livefollowers.length !== 0 ? livefollowers : followers;
    // const {socialLinks} = this.props.aboutProfile;
    const renderTabHeader = (tab) => (
      <div>
        {tab}{' '} {tab === 'Followings' && (followinglength)}
        {' '} {tab === 'Followers' && followerlength}
      </div>
    );
    const { publicuserinfo, unfollo, folow, deletevideo, mainprop, authenticated } = this.props;
    return (
      <div className="user-info" >
        <Tabs>
          <TabPane
            tab={
              <UserTabInfo username={username || (aboutme && aboutme.name)} image={image || aboutme.image} butter={butter} />
            }
            disabled
            key="7"
          />
          {
            this.state.tabs.map(({ tab, Component }) => (
              <TabPane tab={renderTabHeader(tab)} key={tab}>
                <Component
                  aboutme={aboutme}
                  followers={followerUsers}
                  followings={followingUsers}
                  title={title}
                  follo={folow}
                  unfollo={unfollo}
                  publicuserinfo={publicuserinfo}
                  playbacks={playbacks}
                  match={mainprop}
                  deletevideo={deletevideo}
                  loginUser={loginUser}
                  totalViews={totalViews}
                  acthenticate={authenticated}
                  handleScroll={this.handleScroll}
                  handlefollowScroll={this.handlefollowScroll}
                />
              </TabPane>
            ))
          }
        </Tabs>
      </div>
    );
  }
}


BroadcastDetail.defaultProps = {
  loginUser: () => { },
  button: false,
  authenticated: false,
  channel: {},
};
const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
});

BroadcastDetail.propTypes = {
  channel: PropTypes.oneOfType([PropTypes.object]),
  loginUser: PropTypes.oneOfType([PropTypes.object]),
  folow: PropTypes.oneOfType([PropTypes.func]),
  unfollo: PropTypes.oneOfType([PropTypes.func]),
  deletevideo: PropTypes.oneOfType([PropTypes.func]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
  publicuserinfo: PropTypes.oneOfType([PropTypes.object]),
  mainprop: PropTypes.oneOfType([PropTypes.object]),
};
const withConnect = connect(mapStateToProps);

export default compose(withConnect)(BroadcastDetail);
