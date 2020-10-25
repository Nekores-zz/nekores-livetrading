/**
 *
 * MyDetail
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
function MyDetail({ aboutme }) {
  return (
    <div>
      <div className="outer-padings">
        <div className="padings about">
          <div
            style={{
              background: '#101219',
              padding: '25px',
              color: '#eee',
            }}
          >
            <h3
              style={{
                textTransform: 'capitalize',
                fontWeight: '200',
              }}
            >
              About me
            </h3>
            <br />
            <br />
            <p

              style={{
                letterSpacing: '1.5px',
                fontWeight: '300',
                lineHeight: '160%',
                wordSpacing: '0.5px',
              }}
            >{aboutme && aboutme.user && aboutme.user.aboutme ? aboutme.user.aboutme : aboutme && aboutme.aboutme || 'This live trader is lazy and has not written an about me.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

MyDetail.propTypes = {
  aboutme: PropTypes.oneOfType([PropTypes.object]),
};

export default MyDetail;
