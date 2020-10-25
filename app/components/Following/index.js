/**
*
* Following
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import Skeleton from 'react-loading-skeleton';
import Avatar from 'react-avatar';

const Following = ({ followings, follo, publicuserinfo, unfollo, handleScroll, loadnumber }) => {
  const loadMore = () => {
    handleScroll(followings);
  };
  const simplebutton = (item) => {
    const isFollowing = publicuserinfo && Array.isArray(publicuserinfo.followings) && publicuserinfo.followings.findIndex((i) => i.uid === item.uid) !== -1;
    if (isFollowing) {
      return (
        <Button
          onClick={() => {
            const followers = publicuserinfo.followings.filter((i) => i.uid !== item.uid);
            unfollo(item, followers);
          }}
          type="primary"
          className="share-btn bfollow"
        >
          Following
        </Button>
      );
    }
    return (
      <Button
        onClick={() => {
          const followers = [...publicuserinfo.followings, item];
          follo(item, followers);
        }}
        type="primary"
        className="share-btn bfollow"
      >
        Follow
      </Button>
    );
  };

  const displayItems = (followings, follo, publicuserinfo, unfollo, handleScroll, loadnumber) => {
    const followitems = [];
    const num = loadnumber <= followings.length ? loadnumber : followings.length;

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
          <div className="following-box" style={{ minHeight: '328px ' }}>
            <Link
              to={{
                pathname: `/o/${followings[index].uid}`,
                state: followings[index],
              }}
              className="ProfileAboutLink"
            >
              <div className="sub-following-box">
                <div className="sub__box">
                  <Avatar src={(followings[index].image)} name={followings[index].name} size="99px" alt="#" />
                </div>
              </div>
              <div className="following-text">
                <h3 className="boex-heading">
                  <b className="truncated-text">{(followings[index].name) || 'None'}</b>
                </h3>
                <p className="boex-heading">
                  <span className="truncated-text clr-gry pbox">
                    {(followings[index].aboutme) || 'None'}
                  </span>
                </p>
              </div>
            </Link>
            {publicuserinfo && publicuserinfo.uid !== followings[index].uid ? simplebutton(followings[index]) : null}
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
          {displayItems(followings, follo, publicuserinfo, unfollo, handleScroll, loadnumber)}
        </InfiniteScroll>
      </Row>
    </div>
  );
};
Following.propTypes = {
  publicuserinfo: PropTypes.oneOfType([PropTypes.object]),
  follo: PropTypes.oneOfType([PropTypes.func]),
  unfollo: PropTypes.oneOfType([PropTypes.func]),
};

export default Following;
