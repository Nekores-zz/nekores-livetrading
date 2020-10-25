/**
 *
 * UsersDetail
 *
 */

import React from "react";
// import styled from 'styled-components';
import PropTypes from "prop-types";
import { Tabs } from "antd";
import butter from "../../assets/users/defaultavatar.png";
import Replays from "../Replays";
import Follower from "../Follower";
import Following from "../Following";
import UserTabInfo from "../UserTabInfo";
import Wrapper from "./usersdetailStyle";
import AboutTab from "./AboutTab";

class UsersDetail extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      pathName: "",
      loadnumber: 3,
      followloadnumber: 3,
      tabs: [
        {
          tab: "About",
          Component: AboutTab
        },
        {
          tab: "Replays",
          Component: Replays
        },
        {
          tab: "Followings",
          Component: Following
        },
        {
          tab: "Followers",
          Component: Follower
        }
      ]
    };
  }
  // componentWillMount() {
  //   this.setState({
  //     pathName: this.props,
  //   });
  // }

  // componentDidMount() {
  //   fetch('https://lt-pb.livetrading.ch', {
  //     headers: {
  //       'Content-Type': 'application/xml; charset=utf-8',
  //     },
  //   }).then((res) => {
  //     // eslint-disable-next-line no-console
  //     console.log(res);
  //   });
  // }
  // componentWillReceiveProps(nextProps) {
  //   const { pathname } = nextProps.location;
  //   this.setState({ pathName: pathname });
  // }

  componentDidUpdate() {
    window.scrollTo(0, 0);
    // previousLocation = this.props.location;
  }
  handleScroll = followings => {
    const loadnumber = this.state.loadnumber;
    const num = loadnumber + 3;
    if (num <= followings.length) {
      this.setState({ loadnumber: num });
    } else {
      const total = followings.length;
      const remaining = total - loadnumber + loadnumber;
      if (total >= num) {
        this.setState({ loadnumber: remaining });
      }
    }
  };
  handlefollowScroll = followers => {
    const followloadnumber = this.state.followloadnumber;
    const num = followloadnumber + 3;
    if (num <= followers.length) {
      this.setState({ followloadnumber: num });
    } else {
      const total = followers.length;
      const remaining = total - followloadnumber + followloadnumber;
      if (total >= num) {
        this.setState({ followloadnumber: remaining });
      }
    }
  };

  render() {
    const { aboutme } = this.props;
    const title = "Awesome! Video";
    const TabPane = Tabs.TabPane;
    const followers = (aboutme && aboutme.followers) || [];
    const followings = (aboutme && aboutme.followings) || [];
    const playbacks = (aboutme && aboutme.playbacks) || [];
    const lastPaylack = aboutme && aboutme.broadcasterDetail && aboutme.broadcasterDetail.lastPaylack;
    const totalViews =
      playbacks && playbacks.length !== 0 && playbacks.map(item => item.views).reduce((prev, next) => prev + next);
    const renderTabHeader = tab => (
      <div>
        {tab} {tab === "Followings" && followings.length} {tab === "Followers" && followers.length}
      </div>
    );
    const abouttrading = this.props.abouttrading;
    return (
      <Wrapper>
        <div className="user-info">
          <Tabs>
            <TabPane
              tab={
                <UserTabInfo
                  image={aboutme && aboutme.image && aboutme.image}
                  username={aboutme && aboutme.name}
                  butter={butter}
                />
              }
              disabled
              key="7"
            />
            {this.state.tabs.map(({ tab, Component }) => (
              <TabPane tab={renderTabHeader(tab)} key={tab}>
                <Component
                  aboutme={aboutme}
                  publicuserinfo={abouttrading && abouttrading.userInfo}
                  followers={followers}
                  followings={followings}
                  title={title}
                  unfollo={this.props.unfollo}
                  follo={this.props.follo}
                  playbacks={playbacks}
                  lastPaylack={lastPaylack}
                  match={this.props.match}
                  totalViews={totalViews}
                  handleScroll={this.handleScroll}
                  handlefollowScroll={this.handlefollowScroll}
                  loadnumber={this.state.loadnumber}
                  followloadnumber={this.state.followloadnumber}
                />
              </TabPane>
            ))}
          </Tabs>
        </div>
      </Wrapper>
    );
  }
}

UsersDetail.defaultProps = {
  aboutme: {}
};

UsersDetail.propTypes = {
  aboutme: PropTypes.oneOfType([PropTypes.object]),
  abouttrading: PropTypes.oneOfType([PropTypes.object]),
  follo: PropTypes.oneOfType([PropTypes.func]),
  unfollo: PropTypes.oneOfType([PropTypes.func]),
  match: PropTypes.oneOfType([PropTypes.object])
};

export default UsersDetail;
