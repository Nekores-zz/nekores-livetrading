/**
 *
 * SetAccoutDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { fromJS } from 'immutable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSetAccoutDetails from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import {
  appAccessToken,
  loginUser,
} from '../App/selectors';
import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';
import DisplayName from '../../components/DisplayName';
import EmailRegistration from '../../components/EmailRegistration';
import UploadAvatar from '../../components/UploadAvatar';
import { actions } from '../GoLive/constants';
import logoWhite from '../../assets/images/logo/logo-white.png';
import SetdetailsStyl from './setdetailsStyl';
import saga from './saga';

export class SetAccoutDetails extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static getDerivedStateFromProps(nextProps) {
    const { loginUser } = nextProps;
    if (loginUser !== null && loginUser !== undefined) {
      return {
        loginInfo: loginUser || null,
      };
    }
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      visible: 1,
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }

  async componentDidMount() {
    //   this.fetchChannel();
    const uid = this.state.loginInfo.userId;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    this.props.userinfoAction({ config, uid });
  }

  handleClickOne = () => {
    this.setState({
      visible: 2,
    });
  };


  handleClickTwo = () => {
    this.setState({
      visible: 3,
    });
    window.location.reload();
  };
  // handleClickThree() {
  //   this.setState({
  //     visible: 3,
  //   });
  // }

  render() {
    const { setaccoutdetails } = this.props;
    const setUserinfo = setaccoutdetails && setaccoutdetails.setUserinfo;

    return (
      <SetdetailsStyl>
        <div className="block">
          <img alt="#" src={logoWhite} className="logo" />
          <div className="centered">
            {this.state.visible === 1 && (
              <DisplayName
                match={this.props.match}
                handleClickOne={this.handleClickOne}
                updatenameAction={this.props.updatenameAction}
                Userinfo={setUserinfo && setUserinfo.publicInfo}
                updateUser={this.props.updateUser}
              />
            )}
            {this.state.visible === 2 && (
              <UploadAvatar
                match={this.props.match}
                handleClickTwo={this.handleClickTwo}
                Userinfo={setUserinfo && setUserinfo.publicInfo}
                history={this.props.history}
              />
            )}
            {/* {this.state.visible === 3 && (
              <EmailRegistration handleClickThree={this.handleClickThree} />
            )} */}
          </div>
        </div>
      </SetdetailsStyl>
    );
  }
}

SetAccoutDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  setaccoutdetails: makeSelectSetAccoutDetails(),
  appAccess: appAccessToken(),
  loginUser: loginUser(),

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
    updateUser: (payload) => dispatch(UpdateUserAction(payload)),
    loginUserAction: (payload) => dispatch(loginUserAction(payload)),
    // updatenameAction: (payload) => dispatch(actions.updatenameAction(payload)),
    // userinfoAction: (payload) => dispatch(actions.userinfoAction(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'setAccoutDetails', reducer });
const withSaga = injectSaga({ key: 'setAccoutDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SetAccoutDetails);
