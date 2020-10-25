/**
 *
 * Replays
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import Skeleton from 'react-loading-skeleton';
import ReplayInfo from 'components/ReplayInfo/Loadable';
import two from '../../assets/images/settings.png';


const lstlodr = <Skeleton count={3} />;
const Replays = ({ aboutme, playbacks, match, deletevideo, publicuserinfo, acthenticate, loadMore }) =>
  (
    <div
      style={{
        background: '#161923',
        position: 'relative',
      }}
      className="following-main-box"
    >
      <div className="Videos-548">
        <Row>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={true || false}
            loader={lstlodr}
          >
            <div>
              {Array.isArray(playbacks) && playbacks.map((item) =>
                (item ?
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                    xxl={6}
                    style={{
                      paddingLeft: '4px',
                      paddingRight: '4px',
                    }}
                  >
                    <div className="video-overlay" >
                      <Link
                        to={window.screen.width <= 768 ? {
                          pathname: `/uu/${item && item.uid}/p`,
                          state: item,
                        } : {
                          pathname: `/r/${item && item.uid}`,
                          state: item,
                        }}
                        style={{ textDecoration: 'none !important' }}
                      >
                        <div className="imagepop" >
                          <div className="box-imag" >
                            <img
                              alt="#"
                              className="img-responsive img-over"
                              src={(item.cover) || two}
                            />
                          </div>
                        </div>
                      </Link>
                      <ReplayInfo details={aboutme} floItm={item} match={match} deletevideo={deletevideo} publicId={publicuserinfo && publicuserinfo.uid} acthenticate={acthenticate} />
                    </div>
                  </Col>
                  : null
                ))}
            </div>
          </InfiniteScroll>
        </Row>
      </div>
    </div>
  )
  ;
Replays.propTypes = {
  aboutme: PropTypes.object,
  playbacks: PropTypes.array,
  match: PropTypes.object,
  deletevideo: PropTypes.oneOfType([PropTypes.func]),
  publicuserinfo: PropTypes.oneOfType([PropTypes.object]),

};

export default Replays;
