/**
 *
 * ManageProfile
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Layout, Col, Row } from 'antd';
import { createStructuredSelector } from 'reselect';
import { fromJS } from 'immutable';
import {
  makeSelectCurrentUser,
  loginUser,
  appAccessToken,
} from '../../containers/App/selectors';
import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';

import ManageProfileStyle from './ManageProfileStyle';
import Avatar from '../Avatar';
import SocialProfile from '../SocialProfile';
import SocilaThumbnail from '../SocilaThumbnail';
import Discription from '../Discription';
import UpdateName from '../UpdateName';

class ManageProfile extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      size: 'large',
      value: '',
      loginInfo: null,
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      social: [{}],
    };
  }

  render() {
    const descrpt = this.props;
    const DemoBox = (props) => (
      <div className={`height-${props.value}`}>{props.children}</div>
    );
    const { Content } = Layout;
    const {
      telegramAction,
      snapchatAction,
      socilaprofileAction,
      facebookAction,
      updatenameAction,
      twitterAction,
      youtubeAction,
      userinfoAction } = this.props;
    return (
      <ManageProfileStyle>
        <Layout>
          <Content>
            <Row>
              <Col span={12} xs={24} sm={24} md={12} xl={12} xxl={12}>
                <Row>
                  <Col span={24} xs={24} sm={24} md={24} xl={24} xxl={24}>
                    <DemoBox value={100}>
                      <UpdateName somo={descrpt} updatenameAction={updatenameAction} userinfoAction={userinfoAction} />
                    </DemoBox>
                  </Col>
                  <Col span={24} xs={24} sm={24} md={24} xl={24} xxl={24}>
                    <DemoBox value={100}>
                      <Avatar somo={descrpt} key="avatar" />
                    </DemoBox>
                  </Col>
                  <Col span={12} xs={24} sm={24} md={24} xl={24} xxl={24}>
                    <DemoBox value={100}>
                      <Discription somo={descrpt} />
                    </DemoBox>
                  </Col>
                </Row>
              </Col>
              <Col span={12} xs={24} sm={24} md={12} xl={12} xxl={12}>
                <Row>
                  <Col span={24} xs={24} sm={24} md={24} xl={24} xxl={24}>
                    <DemoBox value={100}>
                      <SocilaThumbnail />
                    </DemoBox>
                  </Col>
                  <Col span={24} xs={24} sm={24} md={24} xl={24} xxl={24}>
                    <DemoBox value={100}>
                      <SocialProfile socilaprofileAction={socilaprofileAction} youtubeAction={youtubeAction} facebookAction={facebookAction} twitterAction={twitterAction} telegramAction={telegramAction} snapchatAction={snapchatAction} />
                    </DemoBox>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
      </ManageProfileStyle>
    );
  }
}

ManageProfile.defaultProps = {
  loginUser: () => { },
  updateUser: () => { },
  homePage: {},
  authenticated: false,
};
ManageProfile.propTypes = {
  // authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // loginUser: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
  updatenameAction: PropTypes.oneOfType([PropTypes.func]),
  telegramAction: PropTypes.oneOfType([PropTypes.func]),
  snapchatAction: PropTypes.oneOfType([PropTypes.func]),
  socilaprofileAction: PropTypes.oneOfType([PropTypes.func]),
  facebookAction: PropTypes.oneOfType([PropTypes.func]),
  twitterAction: PropTypes.oneOfType([PropTypes.func]),
  youtubeAction: PropTypes.oneOfType([PropTypes.func]),
  userinfoAction: PropTypes.oneOfType([PropTypes.func]),

};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  // golive: makeSelectGoLive(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loginUserAction: (payload) => dispatch(loginUserAction(payload)),
    updateUser: (payload) => dispatch(UpdateUserAction(payload)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(ManageProfile);
