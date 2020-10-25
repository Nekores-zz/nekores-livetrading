/**
 *
 * SocilaThumbnail
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Upload, Button, Icon, Modal, notification, message } from 'antd';
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
import Http from '../../utils/axios';
import updateImageSocialNetwork from './thumbnail.gql';
import SocialStyl from './socialStyl';

const fireBase = fire.fire;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class SocilaThumbnail extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
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
      previewVisible: false,
      previewImage: '',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : null,
      fileList: [],
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

  handleCancel = () => this.setState({ previewVisible: false });
  handleChange = async (info) => {
    // const uid = this.state.userId;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    if (info.file.status === 'uploading') {
      this.setState({
        imageNew: info.file,
        loading: true,
      });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, async (imageUrl) => {
        const imageUrls = imageUrl.split('base64,');
        try {
          const response = await Http.post(
            '',
            {
              query: updateImageSocialNetwork,
              variables: { image: imageUrls[1] },
            },
            config
          );
          const userImage =
            response &&
            response.data &&
            response.data.data &&
            response.data.data.updateImageSocialNetwork.image;
          this.setState({
            imageNew: imageUrl,
          });
          this.writeUserData(userImage);
          notification.success({
            message: 'Updated',
            description: 'Your Image has been succesfully Updated!',
          });
        } catch (err) {
          notification.error({
            error: 'Error',
            message: 'Somthing went wrong',
          });
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
          const updateInfo = this.props.loginUser;
          if (updateInfo) {
            updateInfo.thumbnal = url;
            saveState(updateInfo);
            this.props.updateUser({ thumbnal: url });
            // window.location.reload();
          }
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
        });
    } else {
      notification.error({
        message: 'Image Empty',
        description: 'Please use an image',
      });
    }
  };

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
      loading: true,
    });
  };
  render() {
    const { previewVisible, previewImage } = this.state;
    const { imageNew, privateInfo } = this.state;
    const uploadButton = (
      <Button className="bgimg">
        <Icon type={imageNew && imageNew.status === 'uploading' ? 'loading' : 'to-top'} />
        <div className="ant-upload-text">Upload</div>
      </Button>
    );
    return (
      <SocialStyl>
        <div className="avatar-box">
          <div className="item">
            <h3>Social Thumbnail</h3>
            <p>
              The img will be displayed when sharing your stream on site twitter
              or facebook
            </p>
          </div>
          <div className="item ">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={this.beforeUpload}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onChange={this.handleChange}
            >
              {
                imageNew && imageNew.status === 'uploading' ? (
                  uploadButton
                ) : (privateInfo && privateInfo.socialImage) ? <img src={privateInfo && privateInfo.socialImage} alt="avatar" /> :
                  uploadButton
              }
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
            <br />
          </div>
          <div className="item">
            <p>Recomended size 2 MB and 512px</p>
          </div>
        </div>
      </SocialStyl>
    );
  }
}
SocilaThumbnail.defaultProps = {
  loginUser: () => { },
  updateUser: () => { },
  homePage: {},
  authenticated: false,
};
SocilaThumbnail.propTypes = {
  // authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loginUser: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
  updateUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  golive: makeSelectGoLive(),
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
export default compose(withConnect)(SocilaThumbnail);
