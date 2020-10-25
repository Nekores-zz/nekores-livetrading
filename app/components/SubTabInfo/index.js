/**
*
* SubTabInfo
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropType from 'prop-types';

function SubTabInfo({ Tabname, aboutmeInfo }) {
  // const followers = aboutmeInfo && aboutmeInfo.length;
  // const followings = aboutmeInfo && aboutmeInfo.length;
  return (
    <div>
      {Tabname}
      {/* <b className="folowng-num">
        {followers || followings || 0}
      </b> */}
    </div>
  );
}

SubTabInfo.propTypes = {
  Tabname: PropType.string,
  aboutmeInfo: PropType.array,
};

export default SubTabInfo;
