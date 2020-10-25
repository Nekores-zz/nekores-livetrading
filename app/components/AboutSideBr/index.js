/**
 *
 * AboutSideBr
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import usimag from '../../assets/images/img1.png';

function AboutSideBr({ aboutme, socialLinks, totalViews }) {
  const lastPaylack = (aboutme && aboutme.broadcasterDetail && aboutme.broadcasterDetail.lastPaylack) || (aboutme && aboutme.user && aboutme.user.broadcasterDetail && aboutme.user.broadcasterDetail.lastPaylack);
  const untitle = 'un title';

  return (
    <div>
      <div className="outer-padings">
        <div className="padings">
          <div
            style={{
              background: '#101219',
              padding: '15px 20px',
            }}
          >
            <div className="views-box l-text" style={{ marginBottom: '8px' }}>
              <Icon type="eye" theme="outlined" />
              <span>
                {totalViews || 0}
                {' Total Views'}
              </span>
            </div>
            <div className="views-box l-text mb0">
              <Icon type="calendar" theme="outlined" />
              <span>{'Member since 14 oct 2018'}</span>
            </div>
          </div>
        </div>
        <div className="padings">
          <div
            style={{
              background: '#101219',
              padding: '15px 20px',
            }}
          >
            <div className="views-box">
              <h3>Social Network</h3>
              {socialLinks && socialLinks.instagram &&
                <a className="social-icon insta" onClick={() => window.open(`${socialLinks && socialLinks.instagram}`, '_blank')}>
                  <Icon type="instagram" theme="outlined" />
                </a>
              }
              {socialLinks && socialLinks.twitter &&
                <a className="social-icon twitt" onClick={() => window.open(`${socialLinks && socialLinks.twitter}`, '_blank')}>
                  <Icon type="twitter" theme="outlined" />
                </a>
              }
              {socialLinks && socialLinks.facebook &&
                <a className="social-icon faceb" onClick={() => window.open(`${socialLinks && socialLinks.facebook}`, '_blank')}>
                  <Icon type="facebook" theme="outlined" />
                </a>
              }
              {socialLinks && socialLinks.youtube &&
                <a className="social-icon faceb" onClick={() => window.open(`${socialLinks && socialLinks.youtube}`, '_blank')}>
                  <Icon type="youtube" theme="outlined" />
                </a>
              }
            </div>
            <br />
          </div>
        </div>
        <div className="padings">
          <div
            style={{
              background: '#101219',
              padding: '15px 20px',
            }}
          >
            <div className="views-box">
              <h3>Most Recent Broadcast</h3>
              <div className="img-hover">
                {lastPaylack
                  ? (
                    <Link
                      to={{
                        pathname: `/u/${lastPaylack && lastPaylack.uid}/p`,
                      }}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <div className="img-hover-sub">
                        <img
                          src={(lastPaylack && lastPaylack.cover) || usimag}
                          className="img-responsive img-over"
                          alt="#"
                        />
                        <div className="text-img-over">
                          <Avatar
                            src={(aboutme && aboutme.image) || (aboutme && aboutme.user && aboutme.user.image)}
                            name={(aboutme && aboutme.name) || (aboutme && aboutme.user && aboutme.user.name)}
                            size={52}
                            className="img-responsive br50"
                            alt="#"
                          />
                          <p className="mini-text-box" >
                            <span className="tittle">{(lastPaylack && lastPaylack.title) || untitle}</span>
                            <br />
                            <span>
                              {(aboutme && aboutme.name) || (aboutme && aboutme.user && aboutme.user.name) || 'Not Available'}
                            </span>
                            <br />
                            <span>
                              {'3 days a ago - '}
                              <span>
                                {(aboutme &&
                                  aboutme.broadcaster &&
                                  aboutme.broadcaster.views) ||
                                  0}
                                {' views'}
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : null}
                <p className="see-replays">
                  SEE ALL REPLAYS
                  <Icon type="table" theme="outlined" />
                </p>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

AboutSideBr.propTypes = {
  aboutme: PropTypes.oneOfType([PropTypes.object]),
  socialLinks: PropTypes.oneOfType([PropTypes.object]),
};

export default AboutSideBr;
