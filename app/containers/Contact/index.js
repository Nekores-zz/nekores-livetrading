/**
 *
 * Contact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContact from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';

import saga from './saga';

export class Contact extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div>
          <h1 style={{ color: '#fff' }}>Contact Page</h1>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
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

const withReducer = injectReducer({ key: 'contact', reducer });
const withSaga = injectSaga({ key: 'contact', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Contact);
