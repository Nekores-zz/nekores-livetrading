/**
 *
 * LogVideos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Col, Button, Row, Input, Layout } from 'antd';
// import Videos from 'components/Videos';
import Popular from 'components/Popular';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogVideos from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import Wrapper from './LogVideosStyle';

import saga from './saga';

export class LogVideos extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      loading: true,
    };
  }
  render() {
    const Search = Input.Search;
    const { Content } = Layout;
    return (
      <Wrapper>
        <Helmet>
          <title>LogVideos</title>
          <meta name="description" content="Description of LogVideos" />
        </Helmet>
        <Layout>
          <Content style={{ padding: '0 12.5% 70px 12.5%', marginTop: '30px' }}>
            <BrowserRouter>
              <div>
                <div style={{ color: '#fff' }}>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div className="custm-tabs">
                      <div className="custm-tabs-container">
                        <Row>
                          <Col md={15} lg={15} xl={15} xxl={15}>
                            <ul className="tab-panal">
                              <li active>
                                <Link to="/loginVideos/Pop">popular</Link>
                              </li>
                              <li>
                                <Link to="/loginVideos/profile">Following</Link>
                              </li>
                              <li>
                                <Link to="/Videos">People</Link>
                              </li>
                              <li>
                                <Link to="/Contact">Contact</Link>
                              </li>
                            </ul>
                          </Col>
                          {/* <Col md={3} lg={3} xl={3} xxl={3} /> */}
                          <Col md={9}>
                            <div className="filtering">
                              <Search
                                placeholder=""
                                // onSearch={(value) => console.log(value)}
                                style={{ width: 200 }}
                              />
                              <Button className="filtr-btn" icon="filter">
                                {' ALL FILTER'}
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Switch>
                      <Route path="/loginVideos/Pop" component={Popular} />
                      <Route
                        path="/loginVideos/Videos"
                        render={() => <div>profile page here</div>}
                      />
                      <Route
                        path="/profile"
                        render={() => <div>profile page here</div>}
                      />
                      <Route
                        path="/"
                        render={() => <div>Another page here</div>}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </BrowserRouter>
          </Content>
        </Layout>
      </Wrapper>
    );
  }
}

LogVideos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  logvideos: makeSelectLogVideos(),
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

const withReducer = injectReducer({ key: 'logVideos', reducer });
const withSaga = injectSaga({ key: 'logVideos', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(LogVideos);
