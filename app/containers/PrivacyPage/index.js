/**
 *
 * PrivacyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPrivacyPage from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';

import saga from './saga';
import TosStyle from '../TosPage/tosStyle';
import Privay from './privacy';

class PrivacyPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <TosStyle>
        <Privay />
      </TosStyle>
    );
  }
}

PrivacyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  privacypage: makeSelectPrivacyPage(),
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

const withReducer = injectReducer({ key: 'privacyPage', reducer });
const withSaga = injectSaga({ key: 'privacyPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(PrivacyPage);
