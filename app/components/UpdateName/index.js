/**
 *
 * UpdateName
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import {
  Input,
  Form,
  Button,
} from 'antd';
// import { saveState } from 'utils/persistState';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// eslint-disable-next-line
import { fromJS } from 'immutable';
// import fire from '../../utils/config';
// import makeSelectSettings from '../../containers/Settings/selectors';
import reducer from '../../containers/Settings/reducer';
import saga from '../../containers/Settings/saga';
import { toProps, propTypes } from '../../containers/Settings/constants';
// import saga from '../../containers/Settings/saga';
import { loginUser, appAccessToken } from '../../containers/App/selectors';
import { makeSelectGoLive } from '../../containers/GoLive/selectors';


import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';
import Wrapper from './UpdateStyle';
// const fireBase = fire.fire;

class UpdateName extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userInfoo: null,
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      // loginInfo: null,
    };
  }

  componentDidMount() {
    const uid = this.props.somo.descri.params.id;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    this.props.userinfoAction({ uid, config });
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.userInfoo !== nextProps.golive.userinfo) {
      const nameinfo = nextProps && nextProps.golive && nextProps.golive.userinfo;
      const username = nameinfo && nameinfo.publicInfo && nameinfo.publicInfo.name;
      this.setState({
        name: (this.state.name === '' || this.state.name !== undefined || this.state.name !== null) ? username : this.state.name,
        userInfoo: username,
      });
    }
  }


  handlerSubmit = async (e) => {
    e.preventDefault();
    const names = this.state.name;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    this.props.updatenameAction({ names, config });
  };
  handleUserName = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <Wrapper>
        <div className="avatr">
          <h3>Change Display Name</h3>
          <div className="dsply-nme">
            <Form.Item>
              {/* {getFieldDecorator('text', { initialValue: this.state.name }, {
                rules: [
                  {
                    type: 'text',
                    message: 'The input is not valid',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })( */}
              <Input
                name="name"
                size="large"
                // defaultValue={this.state.userInfoo}
                value={this.state.name}
                onChange={this.handleUserName}
                type="text"
                placeholder="Change Name"
                style={{
                  zIndex: '1',
                  maginBottom: '25px',
                  borrderRadius: '0',
                }}
              />
              {/* )} */}
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                type="primary"
                onClick={this.handlerSubmit}
                className="save"
              >
                save
              </Button>
            </Form.Item>
          </div>
        </div>
      </Wrapper>
    );
  }
}

UpdateName.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userinfoAction: PropTypes.func,
  updatenameAction: PropTypes.func,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  // UpdateName: makeSelectSettings(),
  golive: makeSelectGoLive(),
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

const withReducer = injectReducer({ key: 'UpdateName', reducer });
const withSaga = injectSaga({ key: 'UpdateName', saga });

// export default UpdateName;
const FoemNew = compose(
  withReducer,
  withSaga,
  withConnect
)(UpdateName);
const AddForm = Form.create({})(FoemNew);
export default AddForm;
