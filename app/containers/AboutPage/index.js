/**
 *
 * AboutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAboutPage from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';

import saga from './saga';

export class AboutPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>AboutPage</title>
          <meta name="description" content="Description of AboutPage" />
        </Helmet>
        <div>
          <h1 style={{ color: '#fff' }}>About us Page</h1>
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  aboutpage: makeSelectAboutPage(),
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

const withReducer = injectReducer({ key: 'aboutPage', reducer });
const withSaga = injectSaga({ key: 'aboutPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AboutPage);
