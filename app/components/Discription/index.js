/**
 *
 * Discription
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Input, Radio, notification } from 'antd';
import reducer from '../../containers/Settings/reducer';
import saga from '../../containers/Settings/saga';
import { toProps, propTypes } from '../../containers/Settings/constants';
import {
  loginUser,
  appAccessToken,
  makeSelectCurrentUser,
} from '../../containers/App/selectors';
import updateAboutMe from './about.gql';
import getUserInfo from './aboutmeDetail.gql';
import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';
import Http from '../../utils/axios';
import DiscriptionStyl from './DiscriptionStyl';
// const fireBase = fire.fire;

class Discription extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      cancelDisply: false,
      previousState: null,
      userInfoo: null,
    };
  }
  async componentDidMount() {
    const uid = this.props.somo.descri.params.id;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };

    try {
      const response = await Http.post(
        '',
        { query: getUserInfo, variables: { uid } },
        config
      );
      const userInfo =
        (response.data &&
          response.data.data &&
          response.data.data.getUserInfo &&
          response.data.data.getUserInfo.publicInfo.aboutme) ||
        null;
      // eslint-disable-next-line
      this.setState({
        userInfoo: userInfo,
        previousState: userInfo,
        loading: false,
      });
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }

  handlerSubmit = async (e) => {
    e.preventDefault();
    const userInfoo = this.state.userInfoo;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await Http.post(
        '',
        {
          query: updateAboutMe,
          variables: { aboutme: userInfoo },
        },
        config
      );
      const {
        data: { aboutme },
      } = response;
      // eslint-disable-next-line
      this.setState({
        loading: false,
      });
      notification.success({
        message: 'Update',
        description: 'You update succesfully',
      });
    } catch (e) {
      // eslint-disable-next-line
      notification.error({
        message: 'Error',
        description: 'try again',
      });
    }
  };
  // eslint-disable-next-line
  handleCancelClick = async (e) => {
    this.setState({
      userInfoo: this.state.previousState,
    });
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await Http.post(
        '',
        {
          query: updateAboutMe,
          variables: { aboutme: this.state.previousState },
        },
        config
      );
      const {
        data: { aboutme },
      } = response;
      // eslint-disable-next-line
      this.setState({
        loading: false,
      });
      // eslint-disable-next-line
    } catch (e) {
      this.setState({
        loading: false,
      });
    }
  };
  handleAboutme = (e) => {
    this.setState({ userInfoo: e.target.value });
    if (e.target.value) {
      this.setState({ cancelDisply: true });
    } else {
      this.setState({ cancelDisply: false });
    }
  };
  render() {
    const { TextArea } = Input;
    return (
      <DiscriptionStyl>
        <div className="descript-box">
          <div className="item">
            <h3>About</h3>
            <p>
              Enter your channel description here and let the LiveTrading
              community know who you are.
            </p>
          </div>
          <div className="item">
            <TextArea
              rows={4}
              name="aboutme"
              value={this.state.userInfoo}
              onChange={this.handleAboutme}
            />
            <br />
          </div>
          <div className="item">
            <Radio.Group>
              <Radio.Button
                value="large"
                className="cancel"
                style={{
                  display: this.state.cancelDisply ? 'inline-block' : 'none',
                }}
                onClick={this.handleCancelClick}
              >
                CANCEL
              </Radio.Button>
              <Radio.Button
                value="large"
                className="save"
                onClick={this.handlerSubmit}
              >
                save
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </DiscriptionStyl>
    );
  }
}

Discription.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  loginUser: loginUser(),
  appAccess: appAccessToken(),
  authenticated: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
    loginUserAction: (payload) => dispatch(loginUserAction(payload)),
    updateUser: (payload) => dispatch(UpdateUserAction(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'Discription', reducer });
const withSaga = injectSaga({ key: 'Discription', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Discription);
