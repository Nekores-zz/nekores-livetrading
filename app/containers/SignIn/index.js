import React from 'react';
// import { saveState } from 'utils/persistState';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import { notification } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import fire from '../../utils/config';
import { loginUserAction } from '../App/actions';
import makeSelectSignIn from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import saga from './saga';
import { get } from 'lodash';
import LoginForm from './Form';

export class SignIn extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static getDerivedStateFromProps(nextProps, prevState) {
    const usersId = nextProps && nextProps.usrId;
    if (prevState.usrId !== usersId) {
      return {
        usrId: usersId,
      };
    } return {};
  } 
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      usrId: '',
      loginAttempts: 0,
    };
  }
  componentDidMount() {
    const attempt = get(localStorage, 'loginAttempts', 0);
    this.setState({
      loginAttempts: attempt,
    });
    //   const { config } = this.props;
    //   const { usrId } = this.state;
    //   this.props.loginuseedetailAction({ config, usrId });
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, loginAttempts } = this.state;
    this.setState({
      loginAttempts: parseInt(loginAttempts) + 1,
    });
    localStorage.setItem('loginAttempts', loginAttempts);
    if (loginAttempts < 5) {
      this.props.loginAction({
        email,
        password,
        close: this.props.close,
        afterLogin: this.props.afterLogin,
      });
    } else {
      alert('You have reached the maximum number of unsuccessful log in attempts. Please try again later.');
    }
  };

  render() {
    const { email, password, remember } = this.state;
    return (
      <div>
        <LoginForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          email={email}
          password={password}
          remember={remember}
          close={this.props.close}
        />
      </div>
    );
  }
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propTypes,
};
const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...toProps(dispatch),
    loginUserAction: (payload) => dispatch(loginUserAction(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SignIn);
