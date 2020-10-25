/**
 *
 * GoLive
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Row, Col, Layout, Affix, Form } from 'antd';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { fromJS } from 'immutable';
import injectReducer from 'utils/injectReducer';
import { BrowserRouter, Link } from 'react-router-dom';

import ManageProfile from '../../components/ManageProfile';

import Live from '../../components/Live';
import { appAccessToken } from '../../containers/App/selectors';
import Settings from '../Settings/Loadable';
import { makeSelectGoLive, makeSelectPublishRTMP } from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import GoLiveStyls from './goliveStyl';
import saga from './saga';

export class GoLive extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      size: 'large',
      value: '',
      editTitle: '',
      visible: false,
      loading: true,
      copied: false,
      pathName: '',
      top: 50,
      firsturl: '',
      secondurl: '',
      urlpath: '',
      publishRTMPURL: props.PublishRTMP,
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }

  componentWillMount() {
    this.setState({
      pathName: this.props.location.pathname,
    });
  }

  componentDidMount() {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    this.props.genratekeyAction({ config });
    const uid = this.props.match.params.id;
    this.props.userinfoAction({ uid, config });
  }
  componentWillReceiveProps(nextProps) {
    const userinfo = nextProps.PublishRTMP && nextProps.PublishRTMP.userinfo;
    const twitterdata = nextProps.PublishRTMP && nextProps.PublishRTMP.twitterdata;
    const Playbackinfo = userinfo && userinfo.publicInfo && userinfo.publicInfo.playbacks;
    const lastPlayback = Playbackinfo && Playbackinfo[0];
    const locate = nextProps.location.pathname === this.props.location.pathname ? this.state.pathName : nextProps.location.pathname;
    this.setState({
      editTitle: lastPlayback && lastPlayback.title,
      twitterdata,
      pathName: locate,

    });
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value, copied: false });
  };

  onCopy = () => {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    this.props.genratekeyAction({ config, isCopied: this.isCopied });
  };

  isCopied = () => {
    this.setState({ copied: true });
  }

  handlerSubmit = async (e) => {
    e.preventDefault();
    const titles = this.state.editTitle;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    this.props.updatestreamAction({ config, titles });
  };

  tittleChange = (e) => {
    this.setState({ editTitle: e.target.value });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  renderLiveCompnent = () => {
    const { PublishRTMP: { rtmurl } } = this.props;
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    const sepUrl = rtmurl && rtmurl.url;
    const firsturl = sepUrl && sepUrl.split('/')[4];
    const twourl = sepUrl && sepUrl.split(firsturl);
    const secondurl = sepUrl && sepUrl.split('rtmp://live-publish.livetrading.ch/livetrading/');
    // const thirdurl = strint.split("/")[3].split("~")[1]
    return (
      <Live
        // firsturl={firsturl}
        secondurl={twourl && twourl[0]}
        urlpath={secondurl && secondurl[1]}
        editTitle={this.state.editTitle}
        changetitle={(e) => this.tittleChange(e)}
        submiton={(e) => this.handlerSubmit(e)}
        publish={(rtmurl && rtmurl.url) || ''}
        streamId={(rtmurl && rtmurl.streamId) || ''}
        oncopy={this.onCopy}
        url={(rtmurl && rtmurl.url) || ''}
        lastPlayback={this.state.editTitle}
        changeurl={this.onChange}
        getFieldDecorator={getFieldDecorator}
        FormItem={FormItem}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        showModal={this.showModal}
      />
    );
  }


  renderComponent = (path) => {
    const {
      telegramAction,
      snapchatAction,
      socilaprofileAction,
      facebookAction,
      updatenameAction,
      twitterAction,
      youtubeAction,
      userinfoAction,
      golive,
      popularAction,
      unblockAction,
    } = this.props;
    const teprop = this.props.match;
    const goalive = this.props.golive;
    const userinfo = goalive && goalive.userinfo;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    switch (path) {
      case '/s/profile':
        return <ManageProfile descri={teprop} socilaprofileAction={socilaprofileAction} facebookAction={facebookAction} updatenameAction={updatenameAction} twitterAction={twitterAction} telegramAction={telegramAction} snapchatAction={snapchatAction} youtubeAction={youtubeAction} userinfoAction={userinfoAction} twitterdata={this.state.twitterdata} />;
      case '/s/account':
        return <Settings action={popularAction} userinfo={userinfo} golive={golive} unblockAction={unblockAction} userinfoAction={userinfoAction} config={config} />;
      case '/s/live':
        return this.renderLiveCompnent();
      default:
        return null;
    }
  };
  render() {
    const { pathName } = this.state;
    const { Content } = Layout;
    // let loadingWrapper = null;
    // loadingWrapper = this.state.loading ? (
    //   <div
    //     style={{
    //       zIndex: 11111,
    //       display: 'table',
    //       height: '100%',
    //       width: '100%',
    //       background: 'black',
    //       position: 'fixed',
    //       top: 0,
    //       bottom: 0,
    //       right: 0,
    //       left: 0,
    //     }}
    //   >
    //     <Loader />
    //   </div>
    // ) : null;
    return (
      <GoLiveStyls>
        {/* {loadingWrapper} */}
        <Helmet>
          <title>GoLive</title>
          <meta name="description" content="Description of GoLive" />
        </Helmet>
        <div
          className="settings-page"
          style={{
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Layout>
            <Content style={{ padding: '0 6.5% 70px 6.5%', marginTop: '30px' }}>
              <BrowserRouter>
                <div>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div className="custm-tabs">
                      <div className="custm-tabs-container">
                        <Row>
                          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <Affix offsetTop={this.state.top}>
                              <ul className="tab-panal">
                                <li>
                                  <Link
                                    to="/s/live"
                                    onClick={() =>
                                      this.setState({
                                        pathName: '/s/live',
                                      })
                                    }
                                    value={'golive/live'}
                                    className={
                                      pathName === '/s/live'
                                        ? 'active'
                                        : 'notActive'
                                    }
                                  >
                                    Start Broadcast
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/s/profile"
                                    onClick={() =>
                                      this.setState({
                                        pathName: '/s/profile',
                                      })
                                    }
                                    className={
                                      pathName === '/s/profile'
                                        ? 'active'
                                        : 'notActive'
                                    }
                                  >
                                    Manage Profile
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/s/account"
                                    onClick={() =>
                                      this.setState({
                                        pathName: '/s/account',
                                      })
                                    }
                                    className={
                                      pathName === '/s/account'
                                        ? 'active'
                                        : 'notActive'
                                    }
                                  >
                                    Account
                                  </Link>
                                </li>
                              </ul>
                            </Affix>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  {this.renderComponent(this.state.pathName)}
                </div>
              </BrowserRouter>
            </Content>
          </Layout>
        </div>
      </GoLiveStyls>
    );
  }
}

GoLive.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  golive: makeSelectGoLive(),
  appAccess: appAccessToken(),
  PublishRTMP: makeSelectPublishRTMP(),
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

const withReducer = injectReducer({ key: 'goLive', reducer });
const withSaga = injectSaga({ key: 'goLive', saga });

const FoemNew = compose(
  withReducer,
  withSaga,
  withConnect
)(GoLive);

const AddForm = Form.create({})(FoemNew);
export default AddForm;
