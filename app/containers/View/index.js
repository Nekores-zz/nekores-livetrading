import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import VideoPlayer from 'components/VideoPlayer/Loadable';
import injectReducer from 'utils/injectReducer';
import { appAccessToken, loginUser } from '../../containers/App/selectors';
import makeSelectView from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import saga from './saga';

if (!('toJSON' in Error.prototype)) {
  // eslint-disable-next-line
  Object.defineProperty(Error.prototype, 'toJSON', {
    value() {
      const alt = {};

      Object.getOwnPropertyNames(this).forEach(function (key) {
        alt[key] = this[key];
      }, this);

      return alt;
    },
    configurable: true,
    writable: true,
  });
}

export class View extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      users: {},
      loading: true,
      broadcasters: undefined,
      // pathName: '',
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }
  componentDidMount() {
    const { loginUser, updateView, match } = this.props;
    const userId = (loginUser && loginUser.userId) || null;
    if (userId) {
      updateView({ id: userId });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.broadcasters !== nextProps.view.broadcasters) {
      this.setState({
        url: nextProps.match.url,
        broadcasters: nextProps.view.broadcasters,
        loading: false,
      });
    }
  }

  render() {
    let loadingWrapper = null;
    if (this.state.loading) {
      loadingWrapper = (
        <div
          style={{
            background: 'black',
            position: 'fixed',
            display: 'table',
            height: '100%',
            zIndex: 11111,
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
    const { view, history } = this.props;
    const users = this.state.users;
    const match = this.props.match;
    const publicuser = view && view.publicuser;
    return (
      <div>
        {/* {loadingWrapper} */}
        <Helmet>
          <title>View</title>
          <meta name="description" content="Description of View" />
        </Helmet>
        <div style={{ color: '#fff', backgroundColor: '#141414' }}>
          <VideoPlayer
            playbacksAction={this.props.playbacksAction}
            userpublicAction={this.props.publicuserAction}
            deleteAction={this.props.deleteAction}
            channel={users}
            mainprops={match}
            streamId={this.state.streamId}
            videoAction={this.props.videoAction}
            broadcasters={this.state.broadcasters}
            followAction={this.props.followAction}
            unfollowAction={this.props.unfollowAction}
            publicuser={publicuser}
            updatetitleAction={this.props.updatetitleAction}
            blockuserAction={this.props.blockuserAction}
            unblockuserAction={this.props.unblockuserAction}
            joinliveAction={this.props.joinliveAction}
            location={this.props.location}
            reportAction={this.props.reportAction}
            history={history}
            loginUser={this.props.loginUser}
            publishplaybacksAction={this.props.publishplaybacksAction}
            viewreplaysAction={this.props.viewreplaysAction}
          />
        </div>
      </div>
    );
  }
}

View.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  view: makeSelectView(),
  appAccess: appAccessToken(),
  loginUser: loginUser(),
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
const withReducer = injectReducer({ key: 'view', reducer });
const withSaga = injectSaga({ key: 'view', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(View);
