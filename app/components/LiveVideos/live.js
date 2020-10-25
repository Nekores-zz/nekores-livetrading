import React from 'react';
import PropTypes from 'prop-types';
import VideoInfoLive from 'components/VideoInfoLive/Loadable';
const Live = ({ item, live, floItm, match }) => (
  <div className="imageWrapper">
    <div className="imagepop">
      <div className="box-imag">
        <img
          className="imageStyle"
          alt="banner"
          src={
            (item &&
              item.broadcasterListDetail &&
              item.broadcasterListDetail.banner
              ? item.broadcasterListDetail.banner
              : item && item.cover) || floItm && floItm.cover
          }
        />
      </div>
    </div>
    {item &&
      item.broadcasterListDetail &&
      item.broadcasterListDetail.on === true ?
      (
        <div className="liveImage">
          <img src={live || null} alt="live" />
        </div>
      ) : null}
    <VideoInfoLive details={item} floItm={floItm} item={item} match={match} />
  </div>
);
Live.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]),
  live: PropTypes.oneOfType([PropTypes.string]),
};
export default Live;
