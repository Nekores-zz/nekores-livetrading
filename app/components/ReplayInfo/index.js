/**
*
* ReplayInfo
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { Icon, Dropdown, Menu } from 'antd';
import VInfoLivestyl, { Drpmenu } from './vInfoLivestyl';

class ReplayInfo extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { details, floItm, item, deletevideo, publicId, acthenticate } = this.props;
    const on = details && details.broadcasterListDetail && details.broadcasterListDetail.on === true;
    const created = details.created;
    const timestamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(created);
    const mymenu = (
      <Drpmenu >
        <Menu style={{ minWidth: 'auto' }}>
          <Menu.Item key="Delete" onClick={() => deletevideo(floItm.uid)} >Delete Playback</Menu.Item>
        </Menu>
      </Drpmenu>
    );
    return (
      <VInfoLivestyl>
        <Avatar
          src={
            details && details.user && details.user.image
              ? details && details.user && details.user.image
              : details && details.image
          }
          name={
            details && details.user && details.user.name
              ? details && details.user && details.user.name
              : details && details.name
          }
          size={'52px'}
          className="user-image"
        />
        <div className="live-vdo">
          <h3 className="boex-heading">
            <b className="truncated-text">
              {on ? (details && details.broadcasterListDetail && details.broadcasterListDetail.title) || (`live: ${details && details.name}`) : (floItm && floItm.title) || (details && details.user && details.user.broadcasterListDetail && details.user.broadcasterListDetail.title) || (details && details.title) || `live: ${details && details.name}`}
            </b>
          </h3>
          <p className="boex-heading">
            <span className="truncated-text clr-gry">
              {details && details.user && details.user.name
                ? details && details.user && details.user.name
                : (details && details.name)}
            </span>
          </p>
          <p className="hide-xs">
            {/* <span className="team">
              <Icon type="team" />
              {(details && details.user && details.user.followers && details.user.followers.length) ? details.user.followers.length : (details && details.followers && details.followers.length) || (item && item.followers && item.followers.length) || 0}
            </span> */}
            <span className="eye">
              <Icon type="eye" />
              {(floItm && floItm.views) || (details && details.views) || 0}
            </span>
            <span className="team">
              <Icon type="calendar" />
              {timestamp}
            </span>
          </p>
          {acthenticate && (details.userId === publicId || details.uid === publicId) ?
            (<span className="dot" >
              <Dropdown overlay={mymenu}>
                <Icon type="ellipsis" style={{ color: '#fff' }} />
              </Dropdown>
            </span>) : null}
        </div>
      </VInfoLivestyl>
    );
  }
}

ReplayInfo.defaultProps = {
  details: {},
  button: false,
};

ReplayInfo.propTypes = {
  details: PropTypes.oneOfType([PropTypes.object]),
  floItm: PropTypes.oneOfType([PropTypes.object]),
  item: PropTypes.oneOfType([PropTypes.object]),
  deletevideo: PropTypes.oneOfType([PropTypes.func]),
  publicId: PropTypes.oneOfType([PropTypes.object]),
};

export default ReplayInfo;
