/**
 *
 * Follower
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import Skeleton from 'react-loading-skeleton';
import Avatar from 'react-avatar';
import followBtn from './../followBtn';


const Follower = ({ followers, follo, publicuserinfo, unfollo, handlefollowScroll, followloadnumber }) => {
  const loadMore = () => {
    handlefollowScroll(followers);
  };

  const simplebutton = (item) => {
    const isFollowing = publicuserinfo && Array.isArray(publicuserinfo.followings) && publicuserinfo.followings.findIndex((i) => i.uid === item.uid) !== -1;
    if (isFollowing) {
      return (
        <Button onClick={() => unfollo(item)} type="primary" className="share-btn bfollow">
          Following
        </Button>
      );
    }
    return (
      <Button onClick={() => follo(item)} type="primary" className="share-btn bfollow">
        Follow
      </Button>
    );
  };
  const displayItems = (followers, follo, publicuserinfo, unfollo, handlefollowScroll, followloadnumber) => {
    const followitems = [];
    const num = followloadnumber <= followers.length ? followloadnumber : followers.length;

    for (let index = 0; index < num; index++) {
      const element = (
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={6}
          xxl={6}
          style={{
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          <div className="following-box" style={{ minHeight: '328px' }}>
            <Link
              to={{
                pathname: `/o/${followers[index].uid}`,
                state: followers[index],
              }}
              className="ProfileAboutLink"
            >
              <div className="sub-following-box">
                <div className="sub__box">
                  <Avatar src={(followers[index].image)} name={followers[index].name} size="99px" alt="#" />
                </div>
              </div>
              <div className="following-text">
                <h3 className="boex-heading">
                  <b className="truncated-text">{(followers[index].name) || 'None'}</b>
                  <followBtn name="followers" />
                </h3>
                <div>
                </div>
                <p className="boex-heading">
                  <span className="truncated-text clr-gry pbox">
                  </span>
                </p>
              </div>
            </Link>
            {publicuserinfo && publicuserinfo.uid !== followers[index].uid ? simplebutton(followers[index]) : null}
          </div>
        </Col>
      );
      followitems.push(element);
    }
    return followitems;
  };

  const lstlodr = <Skeleton count={3} />;
  return (
    <div className="following-main-box">
      <Row>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={true || false}
          loader={lstlodr}
        >
          {displayItems(followers, follo, publicuserinfo, unfollo, handlefollowScroll, followloadnumber)}
        </InfiniteScroll>
      </Row>
    </div>
  );
};

Follower.propTypes = {
  followers: PropTypes.oneOfType([PropTypes.array]),
  publicuserinfo: PropTypes.oneOfType([PropTypes.object]),
  follo: PropTypes.oneOfType([PropTypes.func]),
  unfollo: PropTypes.oneOfType([PropTypes.func]),
};

export default Follower;
