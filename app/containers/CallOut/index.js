import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col } from '../../components/Common/index';

import makeSelectCallOut from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import Callout from './calloutStyle';
import saga from './saga';

export class CallOut extends React.pureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Callout>
        <Helmet>
          <title>CallOut</title>
          <meta name="description" content="Description of CallOut" />
        </Helmet>

        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
              <div className="title">
                <h2>Trade Crypto everywhere.</h2>
                <p>
                  All literary work contained within this page belongs to and is
                  the sole property of its respective
                  <br />
                  authors and publishers. Reproduction, copy or any other form
                  of use of the pieces contained
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="btn">
                <Button type="primary" size="large">
                  Sign Up <Icon type="right" />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Callout>
    );
  }
}

CallOut.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  callout: makeSelectCallOut(),
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

const withReducer = injectReducer({ key: 'callOut', reducer });
const withSaga = injectSaga({ key: 'callOut', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(CallOut);
