/**
 *
 * Loader
 *
 */

import React from 'react';
import LoaderStyl from './LoaderStyle';
// import styled from 'styled-components';

function Loader() {
  return (
    <LoaderStyl>
      <div className="la-ball-pulse-sync">
        <div />
        <div />
        <div />
      </div>
    </LoaderStyl>
  );
}

Loader.propTypes = {};

export default Loader;
