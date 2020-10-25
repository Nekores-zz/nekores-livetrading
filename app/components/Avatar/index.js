/**
 *
 * Avatar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, notification, message, Button, Modal } from 'antd';
import { compose } from 'redux';
import { saveState } from 'utils/persistState';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fromJS } from 'immutable';
import fire from '../../utils/config';
import {
  makeSelectCurrentUser,
  loginUser,
  appAccessToken,
} from '../../containers/App/selectors';
import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';
import { makeSelectGoLive } from '../../containers/GoLive/selectors';
import AvatarStyl from './AvatarStyl';
import Http from '../../utils/axios';
import updateUserImageProfile from './Avtar.gql';

const fireBase = fire.fire;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class Avatar extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    const loginU = nextProps.loginUser || null;
    const publicinfoes = nextProps.golive;
    const userpublicdata = publicinfoes && publicinfoes.userinfo && publicinfoes.userinfo.publicInfo;
    const privateInfo = publicinfoes && publicinfoes.userinfo && publicinfoes.userinfo.privateInfo;
    if (loginUser) {
      return {
        loginInfo: loginU,
        userpublicdata,
        privateInfo,

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
      loginInfo: null,
    };
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

  handleChange = async () => {
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
              query: updateUserImageProfile,
              variables: { image: imageUrls[1] },
            },
            config
          );
          const userImage =
            response &&
            response.data &&
            response.data.data &&
            response.data.data.updateUserImageProfile.image;
          this.setState({
            imageNew: imageUrl,

          });
          window.location.reload();
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
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'to-top'} />
        <div className="ant-upload-text" />
      </div>
    );
    const imageUrls = this.state.imageNew;
    return (
      <AvatarStyl>
        <div className="avatars-box">
          <div className="item">
            <h3>Avatar</h3>
          </div>
          <div className="items">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={this.beforeUpload}
              onChange={this.handleChanged}
            >
              {imageUrls && imageUrls.status === 'uploading' ? (
                uploadButton
              ) : [(imageUrls && imageUrls.status === 'done') ? <img src={imageUrls && imageUrls.thumbUrl} alt="avatar" /> :
                [this.state.userpublicdata && this.state.userpublicdata.image ? <img src={this.state.userpublicdata && this.state.userpublicdata.image} alt="avatar" /> : uploadButton]]}
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
            <Button className="save" onClick={(e) => this.handleChange(e)}>
              save
            </Button>
          </div>
          <div className="itemss">
            <p>Recomended size 2 MB and 512px</p>
          </div>
        </div>
      </AvatarStyl>
    );
  }
}

Avatar.defaultProps = {
  loginUser: () => { },
  updateUser: () => { },
  homePage: {},
  authenticated: false,
};

Avatar.propTypes = {
  loginUser: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
  updateUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
  golive: makeSelectGoLive(),
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

export default compose(withConnect)(Avatar);
