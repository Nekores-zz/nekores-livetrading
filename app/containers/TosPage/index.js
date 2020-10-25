/* eslint-disable react/no-unescaped-entities */
/**
 *
 * TosPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTosPage from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';

import saga from './saga';
import TosPages from './tospage';
import TosStyle from './tosStyle';

export class TosPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      heading: 'Heading 1',
    };
  }
  render() {
    return (
      <TosStyle>
        <TosPages />
      </TosStyle>
    );
  }
}

TosPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  tospage: makeSelectTosPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'tosPage', reducer });
const withSaga = injectSaga({ key: 'tosPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(TosPage);
