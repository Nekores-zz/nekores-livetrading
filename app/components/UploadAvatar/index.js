/**
 *
 * UploadAvatar
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Upload, Icon, notification, message, Button, Modal } from 'antd';
import { compose } from 'redux';
import { saveState } from 'utils/persistState';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fromJS } from 'immutable';
import fire from '../../utils/config';
import { Link } from 'react-router-dom';
import {
  makeSelectCurrentUser,
  loginUser,
  appAccessToken,
} from '../../containers/App/selectors';
import makeSelectViewDetails from '../../containers/SetAccoutDetails/selectors';
import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';
import Http from '../../utils/axios';
// import varat from '../../assets/images/vatar2.png';
import BroadcastersQuery from './Avtar.gql';
import getUserInfo from './aboutMe.gql';
import Wrapper from './uploadAvatarStyl';

const fireBase = fire.fire;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class UploadAvatar extends React.Component {
  static getDerivedStateFromProps(nextProps) {
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
      loading: false,
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      userId: props.loginUser && props.loginUser.userId,
    };
  }

  async componentDidMount() {
    const uid = this.props.match.params.id;
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
      const userInfo = (response.data && response.data.data && response.data.data.getUserInfo && response.data.data.getUserInfo.publicInfo.image) ||
        null;
      // eslint-disable-next-line
      this.setState({
        image: userInfo,
        loading: false,
      });
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }

  beforeUpload(file) {
    const isImage = file.type === 'image/jpeg' || 'image/png' || 'image/jpg';
    if (!isImage) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isImage && isLt2M;
  }
  handleChange = async (e) => {
    const imag = this.state.imageNew;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    if (imag.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    this.setState({ loading: false });

    if (imag.status === 'done') {
      // Get this url from response in real world.
      getBase64(imag.originFileObj, async (imageUrl) => {
        const imageUrls = imageUrl.split('base64,');
        try {
          const response = await Http.post(
            '',
            {
              query: BroadcastersQuery,
              variables: { image: imageUrls[1] },
            },
            config
          );
          const userImage =
            response &&
            response.data &&
            response.data.data &&
            response.data.data.updateUserImageProfile &&
            response.data.data.updateUserImageProfile.image;
          this.setState({
            imageNew: imageUrl,
            loading: true,
          });
          this.writeUserData(userImage);
        } catch (err) {
          // eslint-disable-next-line
          console.log(err);
        }
      });
    }
  };
  writeUserData = (url) => {
    if (url) {
      const user = fireBase.auth().currentUser;
      user
        .updateProfile({
          photoURL: url,
        })
        .then(() => {
          const updateInfo = this.state;
          updateInfo.image = url;
          saveState(updateInfo);
          this.props.updateUser({ image: url });
          this.props.history.push('/');
          window.location.reload();
          notification.success({
            message: 'Updated',
            description: 'Your Image has been succesfully Updated!',
          });
        })
        .catch((error) => {
          notification.error({
            message: 'Account',
            description: error.message,
          });
          // An error happened.
        });
    } else {
      notification.error({
        message: 'Image Empty',
        description: 'Please use an image',
      });
    }
  };
  handleChanged = (e) => {
    this.setState({
      imageNew: e.file,
      loading: true,
    });
  };
  render() {
    const { previewVisible, previewImage } = this.state;
    // const { picture } = this.props.loginUser ? this.props.loginUser : 0;
    const uploadButton = (
      <div>
        <Icon type={this.state.imageNew && this.state.imageNew.status === 'uploading' ? 'loading' : 'to-top'} />
      </div>
    );
    const { imageNew } = this.state;
    return (
      <Wrapper>
        <div className="displ__style ">
          <div className="center__box">
            <h5>Upload an Avatar</h5>
            <p>Recomended size 512 by 512 pixels</p>
            <div className="avatar__box">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList
                action="//jsonplaceholder.typicode.com/posts/"
                beforeUpload={this.beforeUpload}
                onChange={this.handleChanged}
                style={{
                  borderRadius: '50%',
                  display: 'inline-block !important',
                }}
              >
                {imageNew && imageNew.status === 'done' ? (
                  <img src={imageNew && imageNew.thumbUrl} alt="avatar" />
                ) : (
                  uploadButton
                )}
              </Upload>
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: '100%' }}
                  src={previewImage}
                />
              </Modal>
            </div>
            <Button
              type="primary"
              size="large"
              onClick={(e) => this.handleChange(e)}
            >

              Upload
            </Button>
            <br />
            <Button
              size="large"
              className="skip__btn"
              onClick={this.props.handleClickTwo}
            >
              <Link
                to="/"
                style={{
                  textDecoration: 'none !important',
                }}
              >

                Skip
              </Link>
            </Button>
          </div>
        </div>
      </Wrapper>
    );
  }
}

UploadAvatar.defaultProps = {
  loginUser: () => { },
  updateUser: () => { },
  authenticated: false,
};

UploadAvatar.propTypes = {
  // authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loginUser: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
  updateUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  // homePage: makeSelectHomePage(),
  views: makeSelectViewDetails(),
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
export default compose(withConnect)(UploadAvatar);
