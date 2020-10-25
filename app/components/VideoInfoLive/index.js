import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { Icon } from 'antd';
import VInfoLive from './videoInfoLiveStyle';

class VideoInfoLive extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { details, floItm, item, match } = this.props;
    const title = 'Untitled';
    const on = details && details.broadcasterListDetail && details.broadcasterListDetail.on === true;
    const created = item.created;
    const timestamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(created);
    return (
      <VInfoLive>
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
              {on ? (details && details.broadcasterListDetail && details.broadcasterListDetail.title) || (`live: ${details && details.name}`) : (details && details.title) || (details && details.title) || (floItm && floItm.title) || `live: ${details && details.name}`}
            </b>
          </h3>
          <p className="boex-heading">
            <span className="truncated-text clr-gry">
              {details && details.user && details.user.name
                ? details && details.user && details.user.name
                : (details && details.name) || 'no name'}
            </span>
          </p>
          <p className="hide-xs">
            <span className="eye">
              <Icon type="eye" />
              {floItm && floItm.views || (details && details.views) || 0}
            </span>
            <span className="team">
              <Icon type="calendar" />
              {timestamp}
            </span>
          </p>

        </div>
      </VInfoLive>
    );
  }
}

VideoInfoLive.defaultProps = {
  details: {},
  button: false,
};

VideoInfoLive.propTypes = {
  details: PropTypes.oneOfType([PropTypes.object]),
};

export default VideoInfoLive;
