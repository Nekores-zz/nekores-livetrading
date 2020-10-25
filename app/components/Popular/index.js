/**
 *
 * Popular
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Tabs, Layout, Col, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import VideoInfoLive from 'components/VideoInfoLive/Loadable';
import { fromJS } from 'immutable';
import Loader from 'components/Loader';
import FilterSystem from 'components/FilterSystem';
import PopularStyl from './PopularStyl';
import {
  makeSelectCurrentUser,
  loginUser,
  appAccessToken,
} from '../../containers/App/selectors';
import makeSelectHomePage from '../../containers/HomePage/selectors';
import makeSelectViewDetails from '../../containers/View/selectors';
import live from '../../assets/images/live.png';
import banner from '../../assets/images/party.png';
import Http from '../../utils/axios';
import BroadcastersQuery from './broadcasters.gql';

// import styled from 'styled-components';

class Popular extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      filter: false,
      loading: false,
      loginInfo: 'ssss',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }
  async componentDidMount() {
    const token = this.state.appAccessToken.appAccessToken;

    // const token = ;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };

    try {
      const response = await Http.post(
        '',
        { query: BroadcastersQuery },
        config
      );
      const { users } = response.data.data.sortBroadcasters;
      // eslint-disable-next-line
      this.setState({
        users,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }
  handleClick() {
    if (this.state.filter) {
      this.setState({
        filter: false,
      });
    } else {
      this.setState({
        filter: true,
      });
    }
  }

  render() {
    const Search = Input.Search;
    const { Content } = Layout;

    const TabPane = Tabs.TabPane;
    const broadcasters = this.state.users;
    // console.log(this.props.views, this.props.homePage);
    let loadingWrapper = null;
    if (this.state.loading) {
      loadingWrapper = (
        <div
          style={{
            background: '#101219',
            transition: '0.1s all',
            position: 'fixed',
            display: 'table',
            zIndex: 1111111,
            height: '100%',
            width: '100%',
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
          }}
        >
          <Loader />
        </div>
      );
    }
    return (
      <PopularStyl>
        <div>
          <div className={this.state.filter ? 'filter-div' : 'noneDisplay'}>
            <FilterSystem />
          </div>
          {Array.isArray(broadcasters) &&
            broadcasters.map((item) => (
              <Col
                key={item.uid}
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={6}
                className="xs-class no-styl-typ"
              >
                <Link
                  to={{
                    pathname: `/view/${item.uid}`,
                    state: item,
                  }}
                  style={{ textDecoration: 'none !important' }}
                >
                  <div className="imageWrapper">
                    <img
                      className="imageStyle"
                      alt="#"
                      src={
                        (item &&
                          item.broadcasterListDetail &&
                          item.broadcasterListDetail.banner) ||
                        banner
                      }
                    />
                    <div className="liveImage">
                      <img src={live} alt="#" />
                    </div>
                    <VideoInfoLive details={item} />
                  </div>
                </Link>
              </Col>
            ))}
        </div>
      </PopularStyl>
    );
  }
}

Popular.defaultProps = {
  loginUser: () => {},
  homePage: {},
  authenticated: false,
};

Popular.propTypes = {
  // authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loginUser: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  homePage: makeSelectHomePage(),
  views: makeSelectViewDetails(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Popular);
