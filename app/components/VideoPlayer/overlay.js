import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'antd';
const Overlay = ({ textHead, subText }) => (
  <div className="video-overlay-video">
    <div className="videospan">
      <Icon type="disconnect" />
      <h2>{textHead}</h2>
      <p>{subText}</p>
    </div>
    {/* <div className="videos-over">
      <div className="para">
        <p>Popular Streams</p>
        <img src={imgovrly} alt="#" />
      </div>
      <img src={imgovrly} alt="#" />
      <img src={imgovrly} alt="#" />
    </div> */}
  </div>
);
Overlay.propTypes = {
  subText: PropTypes.oneOfType([PropTypes.string]),
  textHead: PropTypes.oneOfType([PropTypes.string]),
};
export default Overlay;
