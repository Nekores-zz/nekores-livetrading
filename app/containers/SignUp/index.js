import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form } from 'antd';
import makeSelectSignUp from './selectors';
import reducer from './reducer';
import { toProps, propTypes } from './constants';
import saga from './saga';
import SignUpConfirmation from '../../components/SignUpConfirmation';
import SignUpSteps from '../../components/SignUpSteps';
import SignupForm from './SignupForm';
import icon from '../../images/icon-384x384.png';

export class SignUp extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      current: 0,
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: icon,
        },
      ],
    };
  }

  next() {
    // this.props.history.push('/');
    // const current = this.state.current - 1;
    // this.setState({ current });
    this.props.close();
  }

  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    this.doSignup();
  };
  handleUploadCancel = () => this.setState({ previewVisible: false });


  handleUploadPreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleUploadChange = ({ fileList }) => this.setState({ fileList });

  handleReset = () => {
    this.setState({
      current: 1,
      email: '',
      password: '',
    });
  };

  doSignup() {
    const { email, password } = this.state;
    this.props.signupAction({
      email,
      password,
      handleReset: () => this.handleReset(),
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { current } = this.state;
    const steps = [
      {
        title: 'Account Details',
        content: [
          <SignUpSteps
            close={this.props.close}
            handleChange={this.handleChange}
            state={this.state}
            getFieldDecorator={getFieldDecorator}

          />,
        ],
      },
      {
        title: 'Confirmation Code',
        content: [<SignUpConfirmation close={this.props.close} />],
      },

    ];
    return (
      <SignupForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        close={this.close}
        current={current}
        next={() => this.next()}
        steps={steps}
      />
    );
  }
}
SignUp.defaultProps = {
  close: () => { },
};

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  close: PropTypes.func,
  ...propTypes,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignUp(),
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

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });


const FoemNew = compose(
  withReducer,
  withSaga,
  withConnect
)(SignUp);

const AddForm = Form.create({})(FoemNew);
export default AddForm;
