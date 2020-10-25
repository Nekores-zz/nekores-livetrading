import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  Icon,
  Button,
  Menu,
  Dropdown,
  Modal,
  Row,
  Col,
  Input,
  message,
  Upload,
  Form,
  Select,
  Divider,
} from 'antd';
import { fromJS } from 'immutable';
import { get } from 'lodash';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,

  WhatsappIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
} from 'react-share';
import {
  loginUser,
  makeSelectCurrentUser,
  appAccessToken,
} from '../../containers/App/selectors';
import Login from '../../containers/Login/index';
import avatar from '../../assets/images/vatar2.png';
import VInfo, { Drpmenu } from './videoInfoStyle';
// import fire from '../../utils/config';
// const fireBase = fire.fire;

class VideoInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authKey: '1',
      editDialog: false,
      visible: false,
      visibles: false,
      dialog: false,
      editTitle: '',
      fbUrl: 'https://facebook.com/',
      users: {},
      reson: '',
      loginInfo: props.loginUser ? fromJS(props.loginUser).toJS() : 'empty',
      // eslint-disable-next-line react/prop-types
      appAccessToken: props.appAccess
        ? // eslint-disable-next-line react/prop-types
        fromJS(props.appAccess).toJS()
        : 'empty',
      links: [
        {
          name: 'Login',
          path: '/login',
        },
        {
          name: 'Sign Up',
          path: '/signup',
        },
      ],
      views: 0,
      followingThisUser: false,
    };
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }


  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({ visible: false, confirmLoading: false });
    }, 2000);
  };

  changeAuth = (activetTab) => {
    this.setState({
      authKey: activetTab,
    });
  };

  handlerSubmit = async (e) => {
    e.preventDefault();
    const titles = this.state.editTitle;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    this.props.updatetitleAction({ config, titles });
    // this.props.playbacksAction({ config });

    setTimeout(() => {
      this.setState({ editDialog: false });
    }, 1000);
  };
  handlerBlockUser = () => {
    const token = this.state.appAccessToken.appAccessToken;
    const uid = this.props.details && this.props.details.userId;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    this.props.blockuserAction({ config, uid });
  }
  // eslint-disable-line react/prefer-stateless-function
  handleMenuClick = () => {
    // eslint-disable-next-linex
  };

  tittleChange = (e) => {
    this.setState({ editTitle: e.target.value });
  };

  showModale = () => {
    this.setState({
      visibles: true,
    });
  }

  handleOk = () => {
    this.setState({
      visibles: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visibles: false,
    });
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
    const { notereport, reasonreport, imageUrl, loginInfo } = this.state;
    // console.log({reasonreport}, 'resaone')
    const { details } = this.props;
    const userId = loginInfo && loginInfo.userId;
    const uid = details && details.userId;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };

    this.props.reportAction({ config, userId, uid, notereport, reasonreport, imageUrl });
    this.setState({
      dialog: false,
      imageUrls: '',
      reasonreport: '',
      notereport: '',
    });
  }


  handlerReport = () => {
    this.setState({ dialog: true });
  };


  handleLinksChange = (name, value) => {
    const updateLinks = () => {
      this.setState(() => {
        const sociallinks = { ...this.state.sociallinks };
        sociallinks[name] = value;
        return {
          sociallinks,
        };
      });
    };

    if (this.state.sociallinks === null) {
      this.setState({ report: links }, updateLinks);
    } else {
      updateLinks();
    }
  }
  handlerreason(e) {
    this.setState({ reasonreport: e });
  }

  handlernote(e) {
    this.setState({ notereport: e.target.value });
  }

  followUser = () => {
    this.setState({
      followingThisUser: true,
    });
    this.props.folow();
  }

  unFollowUser = () => {
    this.setState({
      followingThisUser: false,
    });
    this.props.unfolow();
  }
  deleteuservideo = () => {
    this.props.deletevideo();
  }

  render() {
    const Option = Select.Option;
    const { TextArea } = Input;
    const { details, onlineuser } = this.props;
    const FormItem = Form.Item;

    const videotitle = (details && details.user && details.user.broadcasterListDetail && details.user.broadcasterListDetail.title) || (onlineuser && onlineuser && onlineuser.broadcasterListDetail && onlineuser.broadcasterListDetail.title);
    const loginUserd = this.props.loginUser;
    const shareUrl = `https://www.livetrading.ch${this.props.location.pathname}`;
    const text = (
      <span>
        {(details && details.followers && details.followers.length) ||
          (details &&
            details.user &&
            details.user.followers &&
            details.user.followers.length) ||
          0}
      </span>
    );

    const l = loginUserd && loginUserd.userId;
    let followButton = <div />;

    if (l) {
      // const followingThisUser =
      //     get((details && details.user) || details, 'followers', []).filter(
      //       (c) => c.uid === loginUserd.userId
      //     ).length > 0;
      //   followButton = (
      //     <Button
      //       type="primary"
      //       className="share-btn bfollow"
      //       onClick={this.state.followingThisUser ? this.unFollowUser : this.followUser}
      //     >
      //       {!this.state.followingThisUser ? (
      //         <Icon type="user-add" theme="outlined" />
      //       ) : null}
      //       {this.state.followingThisUser ? 'Following' : 'Follow'}
      //     </Button>
      //   );
      const followingThisUser =
        get(details.user || details, 'followers', []).filter(
          (c) => c.uid === loginUserd.userId
        ).length > 0;
      followButton = (
        <Button
          type="primary"
          className="share-btn bfollow"
          onClick={followingThisUser ? this.props.unfolow : this.props.folow}
        >
          {!followingThisUser ? (
            <Icon type="user-add" theme="outlined" />
          ) : null}
          {followingThisUser ? 'Following' : 'Follow'}
        </Button>
      );
    } else {
      followButton = (
        <Button type="primary" className="share-btn bfollow">
          Follow
        </Button>
      );
    }


    const menu = (
      <Drpmenu>
        <Menu style={{ minWidth: 'auto' }}>
          <Menu.Item key="Report" onClick={this.handlerReport} >Report</Menu.Item>
          <Menu.Item key="block" onClick={this.handlerBlockUser} >Block</Menu.Item>
          <Menu.Item key="Share" className="share-sm" onClick={this.showModale} >
            Share
          </Menu.Item>
        </Menu>
      </Drpmenu>
    );
    const mymenu = (
      <Drpmenu>
        <Menu style={{ minWidth: 'auto' }}>
          <Menu.Item key="Report" onClick={() => this.setState({ editDialog: true })} >Edit Title</Menu.Item>
          <Menu.Item key="Delete" onClick={this.deleteuservideo} >Delete Playback</Menu.Item>
        </Menu>
      </Drpmenu>
    );
    const Videotittle = (details && details.title)
      || (onlineuser && onlineuser && onlineuser.broadcasterListDetail && onlineuser.broadcasterListDetail.title);
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
        <p>(optional)</p>
      </div>
    );
    const imageUrl = this.state.imageUrlss;
    const videoViews = details && details.views;
    return (
      <VInfo>
        <Row style={{ margin: '0' }}>
          <Col xs={12} sm={12} md={12} lg={12} style={{ padding: '0' }}>
            <img
              alt="#"
              className="img-responsive account-user-image"
              src={(onlineuser && onlineuser.image) || (details && details.user && details.user.image) || avatar}
              style={{ borderRadius: '50%' }}
            />
            <div className="userQuoteTwo" style={{ paddingTop: '20px' }}>
              <span className="userStaf hide-sm" style={{ paddingTop: '5px' }}>
                {this.state.editTitle || Videotittle}
              </span>
              <div className="userStaf hide-lg l-heght sm-name" style={{ paddingTop: '5px' }}>
                {(details && details.user && details.user.name) || (onlineuser && onlineuser.name) || 'UnNamed'}
              </div>
              <div className="views">
                <Icon type="eye" theme="outlined" />
                <span>{onlineuser ? this.state.views : videoViews}</span>
              </div>
              <br />
            </div>

          </Col>
          <Col xs={12} sm={12} md={12} lg={12} style={{ padding: '0' }}>
            <div
              style={{
                textAlign: 'center',
                float: 'right',
                paddingRight: '10px',
                paddingTop: '20px',
              }}
              className="hide-xs option"
            >
              {this.props.button ? (
                <div className="flx-cls">
                  {this.props.authenticated ? ((details && details.userId) || (onlineuser && onlineuser.uid)) !== loginUserd.userId &&
                    <div style={{ display: 'flex' }}>
                      {followButton}
                      <div className="cstm-tooltip hide-xs-tip">{text}</div>
                    </div>
                    :
                    [
                      <Button
                        type="primary"
                        // onHover={this}
                        className="share-btn bfollow hvr"
                      // onClick={(e) => {
                      //   // eslint-disable-next-line
                      //   e.preventDefault && e.preventDefault();
                      //   this.setState({ authKey: 'login' });
                      //   this.showModal();
                      // }}
                      >
                        <Icon type="user-add" theme="outlined" />
                        FOLLOW
                      </Button>,
                      <div className="cstm-tooltip hide-xs-tip">{text}</div>,
                    ]
                  }
                </div>
              ) : null}
              <Login
                open={this.state.visible}
                close={this.handleCancel}
                ok={this.handleOk}
                authKey={this.state.authKey}
                changeAuth={this.changeAuth}
              />
              <Modal
                title="Report User"
                visible={this.state.dialog}
                onCancel={() => this.setState({ dialog: false })}
                style={{ zIndex: '11111' }}
                onOk={this.reportSubmition}
                okText="Submit"
                wrapClassName="modeltltte"
                bodyStyle={{ background: '#fff', padding: '0 20px' }}
              >
                <p>{"We look into every report that's submitted. Please note that abusing the report system itself isn't nice and runs the risk of account suspension!"}</p>
                <Select
                  defaultValue="Nudity"
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
              {this.props.button ? [
                <Button type="primary" className="share-btn bshare" onClick={this.showModale}>
                  <Icon type="share-alt" />
                  SHARE
                </Button>,
                <Modal
                  title="Share video"
                  visible={this.state.visibles}
                  // onOk={this.handleOk}
                  closable={false}
                  footer={
                    <span>
                      <Button onClick={this.handleOk} type="primary">Close</Button>
                    </span>
                  }
                  wrapClassName="modeltltte"
                >
                  <FacebookShareButton url={shareUrl} title={`Live Trading : ${videotitle}`}>
                    <button className="btn btn-circle transparent">
                      <FacebookIcon url={shareUrl} size={52} />
                    </button>
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} media={avatar} imageURL={avatar} title={`Live Trading : ${videotitle}`}>
                    <button className="btn btn-circle transparent">
                      <TwitterIcon url={shareUrl} media={avatar} imageURL={avatar} size={52} />
                    </button>
                  </TwitterShareButton>
                  <LinkedinShareButton url={shareUrl} title={`Live Trading : ${videotitle}`}>
                    <button className="btn btn-circle transparent">
                      <LinkedinIcon url={shareUrl} size={52} />
                    </button>
                  </LinkedinShareButton>
                  <TelegramShareButton url={shareUrl} title={`Live Trading : ${videotitle}`}>
                    <button className="btn btn-circle transparent">
                      <TelegramIcon url={shareUrl} size={52} />
                    </button>
                  </TelegramShareButton>
                  <WhatsappShareButton url={shareUrl} title={`Live Trading : ${videotitle}`}>
                    <button className="btn btn-circle transparent">
                      <WhatsappIcon url={shareUrl} size={52} />
                    </button>
                  </WhatsappShareButton>
                </Modal>,
              ] : null}
              {this.props.authenticated
                ? [
                  (details.userId || (onlineuser && onlineuser.uid)) === loginUserd.userId ? [
                    <Button
                      type="primary"
                      className="share-btn bshare ownUserShar"
                      style={{ display: 'inline-block', top: '-6px' }}
                      onClick={this.showModale}
                    >
                      <Icon type="share-alt" />
                      SHARE
                    </Button>,
                    <Dropdown focusable="true" overlay={mymenu}>
                      <Button className="ellipsis">
                        <Icon type="ellipsis" />
                      </Button>
                    </Dropdown>,
                  ] : (
                      <Dropdown focusable overlay={menu}>
                        <Button className="ellipsis">
                          <Icon type="ellipsis" />
                        </Button>
                      </Dropdown>
                    ),
                ]
                : [null]}
              <Modal
                title="Update Title"
                visible={this.state.editDialog}
                onCancel={() => this.setState({ editDialog: false })}
                style={{ zIndex: '11111' }}
                onOk={(e) => this.handlerSubmit(e)}
                okText="update"
                wrapClassName="modeltltte"
                bodyStyle={{ background: '#fff' }}
                maskClosable={false}
              >
                <FormItem style={{ marginTop: '10px' }}>
                  <Input
                    type="text"
                    placeholder="title"
                    defaultValue={this.state.editTitle || Videotittle}
                    onChange={(e) => this.tittleChange(e)}

                  />
                </FormItem>
              </Modal>
            </div>
          </Col>
        </Row>
      </VInfo>
    );
  }
}

VideoInfo.defaultProps = {
  loginUser: () => { },
  details: {},
  button: false,
  authenticated: false,
};

VideoInfo.propTypes = {
  authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  details: PropTypes.oneOfType([PropTypes.object]),
  onlineuser: PropTypes.oneOfType([PropTypes.object]),
  loginUser: PropTypes.oneOfType([PropTypes.object]),
  button: PropTypes.bool,
  unfolow: PropTypes.func,
  folow: PropTypes.func,
  deletevideo: PropTypes.func,
  reportAction: PropTypes.func,
  blockuserAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(VideoInfo);
