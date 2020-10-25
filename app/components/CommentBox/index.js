import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Avatar from 'react-avatar';

import {
  Modal,
  Input,
  Popover,
  message,
  Form,
  Button,
  Upload,
  Icon,
  Select,
  Divider,
  message as messagePopup,
} from 'antd';
import { createStructuredSelector } from 'reselect';
import { fromJS } from 'immutable';
import Popout from 'react-popout';
import fire from '../../utils/config';

import Wrapper from './commetStyles';
import { UserDrpodown } from '../UserDrpodown';
import ChatIcon from '../../assets/icons/NewWindowChat.svg';
import makeSelectView from '../../containers/View/selectors';
// import image from '../../assets/images/img1.png';

import {
  makeSelectCurrentUser,
  loginUser,
  appAccessToken,
  makeSelectLocation,
} from '../../containers/App/selectors';

// import moment from 'moment';
// import Reportuser from './reportuser';
import send from '../../assets/icons/send.svg';
const fireBase = fire.fire;

class CommentBox extends React.Component {
  static getDerivedStateFromProps(nextProps, state) {
    // const { publicuser } = nextProps.view;
    // const { publicInfo } = publicuser;
    const { view } = nextProps;
    const loginUserInfo = view && view.publicuser && view.publicuser.publicInfo;
    if (state.usersid === undefined) {
      return {
        usersid: nextProps.channel && nextProps.channel.userId,
        videouid: nextProps && nextProps.app && nextProps.app.state && nextProps.app.state.uid,
        videosUids:
          nextProps &&
          nextProps.streamId &&
          nextProps.streamId.params &&
          nextProps.streamId.params.id,
      };
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom;
    const { uid } = this.props;

    this.state = {
      message: '',
      created: '',
      messages: [],
      channel: [],

      visible: false,
      name: '',
      publicUserInf: '',
      reportId: '',
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      usersid: uid,
      popOut: false,
    };
  }

  componentDidMount = async () => {
    const { view } = this.props;
    const loginUserInfo = view && view.publicuser && view.publicuser.publicInfo;
    this.setState({
      publicUserInf: loginUserInfo,
    });
    await this.getMessages1();
    this.scrollToBottom();
    const urlsvideo = this.state.videosUids || (this.props && this.props.match && this.props.match.params && this.props.match.params.id);
    const currentBroadCast = fireBase
      .database()
      .ref(`broadcasting-room-messages/${urlsvideo}`);
    currentBroadCast.orderByChild('created').on('value', (snapshot) => {
      try {
        const messages = Object.values(snapshot.val());
        this.setState({
          messages,
        });
      } catch (error) {
        this.setState({ error });
      }
    });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }
  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  getMessages1() {
    const urlsvideo = this.state.videosUids;
    const refRoomMessages = fireBase
      .database()
      .ref(`broadcasting-room-messages/${urlsvideo}`)
      .orderByChild('created');

    // START LISTEN MESSAGE
    refRoomMessages.on('child_added', (snapshot) => {
      // NEW MESSAGE ARRIVED!
      if (!snapshot.exists()) return;
      this.setState((prev) => ({
        messages: [...prev.messages, ...snapshot.val()],
      }));
    });
  }


  scrollToBottom = () => {
    // eslint-disable-next-line
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  updateMessage = (e) => {
    e.preventDefault();
    this.setState({
      message: e.target.value,
    });
  };

  popoutClosed() {
    this.setState({ isPoppedOut: false });
  }
  popout() {
    this.setState({ isPoppedOut: true });
  }

  openChat = () => {
    this.setState({
      popOut: !this.state.popOut,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    messagePopup.destroy();
    const urlsvideo = this.state.videosUids;
    const { message } = this.state;
    const { view } = this.props;
    const loginUserInfo = view && view.publicuser && view.publicuser.publicInfo;
    if (message !== '' && message !== null && message !== undefined && loginUserInfo && loginUserInfo.name) {
      const newMessage = {
        created: Date.now(),
        // created: moment().utc().unix(),
        text: this.state.message,
        senderName: loginUserInfo && loginUserInfo.name,
        image: loginUserInfo && loginUserInfo.image,
        senderId: loginUserInfo && loginUserInfo.uid,
      };
      const db = fireBase
        .database()
        .ref(`broadcasting-room-messages/${urlsvideo}`);
      db.push(newMessage);
      this.setState({ message: '' });
    } else {
      messagePopup.error('Please type something or update your name');
    }
  };

  handlerBlockUser = (uid) => {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    this.props.blockuserAction({ config, uid });
  }

  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || 'image/png' || 'image/jpg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      this.getBase64(info.file.originFileObj, async (imageUrl) =>
        this.setState({
          imageUrl: imageUrl.split('base64,'),
          imageUrlss: imageUrl,
          loading: false,
        }),
      );
    }
  };

  reportSubmition = () => {
    const { notereport, reasonreport, imageUrl, usersid, reportId } = this.state;
    // console.log({reasonreport}, 'resaone');
    const userId = usersid && usersid;
    const uid = reportId && reportId;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };

    this.props.reportAction({ config, userId, uid, notereport, reasonreport, imageUrl });
    this.setState({
      imageUrl: '',
      reasonreport: '',
      notereport: '',
      visible: false,
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleUserId = (userId) => {
    this.setState({ reportId: userId });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  handlerreason(e) {
    this.setState({ reasonreport: e });
  }
  handlernote(e) {
    this.setState({ notereport: e.target.value });
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
        <p>(optional)</p>
      </div>
    );
    const imageUrl = this.state.imageUrlss;
    const { channel } = this.props;
    const Option = Select.Option;
    const { TextArea } = Input;
    const { view } = this.props;
    const loginUserInfo = view && view.publicuser && view.publicuser.publicInfo;
    const { messages } = this.state;
    const urlsvideo = this.state.videosUids;
    const published = channel && channel.broadcasterListDetail && channel.broadcasterListDetail.on;
    const messageslist = messages.map((message, index) => (
      <div className="clickable__2DsTu">
        {/* <Avatar
          name={message && message.senderName}
          src={message && message.image}
          className="img-responsive cmnt-img"
          alt="#"
          size={'24px'}
        /> */}
        <div key={index} className="chatbox-detail">
          <UserDrpodown
            handleUserId={this.handleUserId}
            handlerBlockUser={this.handlerBlockUser}
            userId={message.senderId}
            user={message.senderName}
            name={message.senderName}
            loginUserInfo={loginUserInfo}
            img={message && message.image}
            shomodel={this.showModal}
            modelId={this.modelId}
          />
          {/* <span>
            <span> 3:00am </span>
          </span> */}
          <p>{message.text}</p>

        </div>
      </div>
    ));
    const content = (
      <div>
        <p>Please Log In or Sign Up to join the conversation.</p>
      </div>
    );

    return (
      <Wrapper>
        <div className="comment_header hide-xs">
          <h2>
            STREAM CHAT
            {this.state.popOut ? (<Popout urlsvideo={urlsvideo} addedprop={loginUserInfo} url={`http://localhost:9000/chatbox/${this.state.videosUids}`} title="Window title" onClosing={this.popoutClosed} >
              <div>Popped out content!</div>
            </Popout>) : null
            }
            <img
              // eslint-disable-next-line
              role="button"
              tabIndex="0"
              src={ChatIcon}
              className="Chat-icon"
              onClick={this.openChat}
              style={{
                height: '30px',
                float: 'right',
                paddingRight: '10px',
                cursor: 'pointer',
              }}
              alt="logo"
            />
            {/* {this.openChat} */}
          </h2>
        </div>

        <div className="main-chat-div">
          <div
            className="scrollDiv"
            ref={(el) => {
              this.messagesContainer = el;
            }}
          >
            {messageslist}
          </div>
          <Modal
            title="Report User"
            visible={this.state.visible}
            style={{ zIndex: '11111' }}
            onCancel={() => this.setState({ visible: false })}
            onOk={this.reportSubmition}
            okText="Submit"
            wrapClassName="modeltltte"
            bodyStyle={{ background: '#fff', padding: '0 20px' }}
          >
            <p>{"We look into every report that's submitted. Please note that abusing the report system itself isn't nice and runs the risk of account suspension!"}</p>

            <Select
              defaultValue=""
              style={{ width: '100%', marginBottom: '15px' }}
              onChange={(e) => this.handlerreason(e)}
              dropdownRender={(menu) => (
                <div>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                  <div style={{ padding: '8px', cursor: 'pointer' }}>
                    <Icon type="plus" /> Add item
                  </div>
                </div>
              )}
            >
              <Option value="Nudity">Nudity</Option>
              <Option value="Under 13 y/o">Under 13 y/o</Option>
              <Option value="Spam">Spam</Option>
              <Option value="Harassment">Harassment</Option>
              <Option value="Other">Other</Option>
            </Select>
            <TextArea
              rows={4}
              type="text"
              placeholder="Note: additional info if you needs (optional)"
              style={{ marginBottom: '15px' }}
              onChange={(e) => this.handlernote(e)}
            />
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={this.beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload>
          </Modal>
        </div>
        <div className="comment__input">
          <Form>
            {this.props.authenticated ? [
              <div className="webComposerBlock__3lT5b">
                {published === true ? [
                  <div className="chat-inputs">
                    <Input
                      className="chat-input-data"
                      placeholder="Comment Here..."
                      onChange={this.updateMessage}
                      value={this.state.message}
                      onPressEnter={this.handleSubmit}
                    />
                  </div>,
                  <Button className="ellipsis" onClick={this.handleSubmit}>
                    <img src={send} alt="btn" />
                  </Button>,
                ] : [
                  <Input placeholder="Comment Here..." />,
                  <Button className="ellipsis" onClick={(e) => e.preventDefault()} style={{ width: '30px' }}>
                    <img src={send} alt="btn" />
                  </Button>]}
              </div>,
            ] : (
              <Popover
                content={content}
                trigger="focus"
                style={{ position: 'fixed' }}
                wrapClassName="chatblock"
              >
                <Input placeholder="Comment Here..." />
                <Button className="ellipsis" onClick={(e) => e.preventDefault()}>
                  {/* <Icon type="ellipsis" /> */}
                  <img src={send} alt="btn" />
                </Button>
              </Popover>
            )}
          </Form>
        </div>
      </Wrapper>
    );
  }
}
CommentBox.defaultProps = {
  dispatch: PropTypes.func.isRequired,
  loginUser: () => { },
  authenticated: false,
};

CommentBox.propTypes = {
  // form: PropTypes.oneOfType([PropTypes.object]),
  reportAction: PropTypes.oneOfType([PropTypes.func]),
  blockuserAction: PropTypes.oneOfType([PropTypes.func]),
  channel: PropTypes.oneOfType([PropTypes.object]),
  loginUser: PropTypes.oneOfType([PropTypes.object]),
  authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // publicUserInfo: PropTypes.oneOfType(PropTypes.object),
  uid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  appAccess: PropTypes.oneOfType(PropTypes.object),
  view: PropTypes.oneOfType(PropTypes.object),
};

const mapStateToProps = createStructuredSelector({
  loginUser: loginUser(),
  appAccess: appAccessToken(),
  authenticated: makeSelectCurrentUser(),
  app: makeSelectLocation(),
  view: makeSelectView(),
});

const withRouter = connect(mapStateToProps);

const FoemNew = compose(withRouter)(CommentBox);

const AddForm = Form.create({})(FoemNew);

export default AddForm;
