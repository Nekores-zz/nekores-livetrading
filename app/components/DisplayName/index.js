/**
 *
 * DisplayName
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// eslint-disable-next-line
import { fromJS } from 'immutable';

import { Input, Icon, Form, Button, notification } from 'antd';
import {
  toProps,
  propTypes,
} from '../../containers/SetAccoutDetails/constants';
import { loginUser, appAccessToken } from '../../containers/App/selectors';
import updateUserName from './UpdateName.gql';
import getUserInfo from './aboutMe.gql';

import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';
import Http from '../../utils/axios';

import NameStyl from './nameStyl';

class DisplayName extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    // console.log(nextProps);
    const loginU = nextProps.loginUser || null;
    if (loginUser) {
      return {
        loginInfo: loginU,
      };
    }
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userInfoo: null,
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
    };
  }
  // async componentDidMount() {
  //   this.fetchChannel();
  // }
  handlerSubmit = async (e) => {
    // e.preventDefault();
    const { Userinfo } = this.props;
    const name = this.state.name || (Userinfo && Userinfo.name);
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    this.props.updateUser({ name: 'name', value: name });
    this.props.updatenameAction({ config, names: name });
    if (name) {
      this.props.handleClickOne();
    }
  };


  handleUserName = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const FormItem = Form.Item;
    const { Userinfo } = this.props;
    const name = Userinfo && Userinfo.name;

    return (
      <NameStyl>
        <div className="displ__style">
          <div className="center__box">
            <span className="icon-tick">
              <Icon type="check" />
            </span>
            <h5>
              You have verified your email.
              <br /> Registration Sucessful
            </h5>
            <h5>Set a Display Name (optional)</h5>
            <FormItem>
              <Input
                placeholder="name"
                type="text"
                size="large"
                onChange={this.handleUserName}
                value={this.state.name || name}
              />
            </FormItem>
            <p>{"Don't worry, you can change this later"}</p>
            <Button type="primary" size="large" onClick={this.handlerSubmit}>
              Next
            </Button>
          </div>
        </div>
      </NameStyl>
    );
  }
}

DisplayName.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  // DisplayName: makeSelectSettings(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
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


export default compose(
  withConnect
)(DisplayName);
