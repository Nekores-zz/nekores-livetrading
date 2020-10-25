import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Layout } from 'antd';
import Hls from 'hls.js';
import flvjs from 'flv.js';
import { fromJS } from 'immutable';
import CommentBox from 'components/CommentBox/Loadable';
import VideoInfo from 'components/VideoInfo/Loadable';
import { compose } from 'redux';
import Dplayer from 'react-dplayer';
import { createStructuredSelector } from 'reselect';
import makeSelectView from '../../containers/View/selectors';
import BroadcastDetail from '../BroadcastDetail/Loadable';
import { appAccessToken } from '../../containers/App/selectors';
import Wrapper from './videoStyles';
import Overlay from './overlay';

class VideoPlayer extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // live playbacks
    const playId = nextProps.mainprops.params.id;
    if (prevState.broadcasters !== nextProps.broadcasters || playId !== prevState.playId) {
      const token = prevState.appAccessToken.appAccessToken;
      const config = {
        headers: { Authorization: `bearer ${token}` },
      };
      const { broadcasters } = nextProps;

      // offline playbacks
      const replayes = broadcasters && broadcasters.replays;
      const channels = replayes && replayes.playbacks.filter((item) => item.uid === playId);
      const datas = channels && channels[0];

      // Live Broadcast
      const livebroadcasters = broadcasters && broadcasters.sortBroadcasters;
      const onlineusers = livebroadcasters && livebroadcasters.users.filter((item) => (item && item.broadcaster && item.broadcaster.streamUid === playId));

      const onlineuser = onlineusers && onlineusers[0];

      const uids = (datas && datas.userId) || (onlineuser && onlineuser.userId);

      return {
        config,
        datas,
        onlineuser,
        broadcasters,
        loading: false,
        playId,
        uids,
      };
    }
    return {
      hello: 'lsdjflkj',
    };
  }
  constructor(props) {
    super(props);
    const prop = this.props;
    const usrId =
      prop &&
      prop.mainprops &&
      prop.mainprops.params &&
      prop.mainprops.params.id;
    this.state = {
      videoEnd: false,
      broadcaster: undefined,
      users: {},
      broadcasters: undefined,
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      uid: usrId,
      iduser: this.props.mainprops,
      visible: false,
      overly: false,
      playId: '',
      config: '',
      datas: '',
      onlineuser: '',
    };
  }

  componentDidMount() {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    const playId = this.props.mainprops.params.id;

    this.props.playbacksAction({
      config,
      playId,
    });
    this.props.publishplaybacksAction({
      config,
      playId,
    });
    this.props.viewreplaysAction({
      config,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mainprops.params.id !== this.props.mainprops.params.id) {
      const elem = document.getElementById('video__wrapper');
      elem.scrollTop = 0;
    }
    this.playerHls();
    window.scrollTo(0, 0);
  }

  onCancel = async () => {
    this.props.updatetitleAction({ config: this.state.config, uid: this.state.uid });
  }

  handleUnFollow = async () => {
    this.props.unfollowAction({ config: this.state.config, uid: this.state.uids });
  }

  handleFollow = async () => {
    this.props.followAction({ config: this.state.config, uid: this.state.uids });
  }

  deletevideo = async () => {
    this.props.deleteAction({ config: this.state.config, playbackId: this.props.mainprops.params.id });
  }

  follo = (accessUid) => {
    this.props.followAction({ config: this.state.config, uid: accessUid && accessUid.uid, playId: this.props.mainprops.params.id });
  };

  unfollo = (accessUid) => {
    this.props.unfollowAction({ config: this.state.config, uid: accessUid && accessUid.uid, playId: this.props.mainprops.params.id });
  };

  playerHls() {
    // const datas = this.state.datas;
    const { view } = this.props;
    const playbackfilter = view && view.setPublishplaybacks;
    const playId = this.props.mainprops.params.id;
    const channels = playbackfilter && playbackfilter.playbacks.filter((item) => item.uid === playId);
    const datas = channels && channels[0];

    if (datas !== undefined) {
      const videourl = datas && datas.url;
      const video = document.getElementById('video');
      if (video) {
        video.onended = () => {
          this.videoHasEnded();
          video.paused();
        };
      }
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videourl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videourl;
        video.addEventListener('loadedmetadata', () => {
          video.play();
        });
      }
    }
  }

  videoHasEnded() {
    this.setState({
      videoEnd: true,
    });
  }

  // {
  //   blockuser !== false && blockuser !== null && blockuser.length > 0 ? <Overlay datas={datas} textHead="This user has blocked you." /> : [this.state.overly === true ? <Overlay datas={datas} textHead="This stream has ended." subText={`${name} IS OFFLINE.`} /> : null]
  // }
  render() {
    const iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    let videoEnd = <div></div>;
    if (this.state.videoEnd) {
      videoEnd = (
        <Overlay textHead="This stream has ended." subText={'Stream end.'} />
      );
    }
    const { history, publicuser } = this.props;
    const { onlineuser, datas } = this.state;
    const publicuserinfo = publicuser && publicuser.publicInfo;
    // const blockusers = publicuserinfo && publicuserinfo.blockedUsers;
    // const blockuser = blockusers !== undefined && onlineuser && onlineuser.userId !== undefined && blockusers && blockusers.filter((item) => item.uid === onlineuser.userId);
    // const iOS =
    //   !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (this.props.mainprops.path === '/chatbox/:id') {
      return (
        <Wrapper className="popoutchat" >
          <Layout style={{ marginBottom: '100px' }}>
            <CommentBox
              channel={datas || onlineuser}
              uid2={this.state.uid}
              streamId={this.state.iduser}
              publicUserInfo={publicuserinfo}
              blockuserAction={this.props.blockuserAction}
            />
          </Layout>
        </Wrapper>
      );
    }
    const component = this;
    return (
      <Wrapper>
        <Layout>
          <Row>
            <Col xs={24} sm={24} md={18} lg={19} className="main-home-box" id="video__wrapper">
              {onlineuser === undefined &&
                datas &&
                (!iOS ?
                  (
                    <video
                      id="video"
                      style={{ width: '100%' }}
                      ref={(player) => (this.player = player)}
                      autoPlay
                      controls
                    />
                  ) :
                  (
                    <Dplayer
                      lang="en"
                      autoplay
                      video={{
                        url: datas && datas.url,
                        type: 'customHls',
                        customType: {
                          customFlv(video) {
                            const hlsPlayer = Hls.createPlayer({
                              type: 'flv',
                              url: video.src,
                            });
                            hlsPlayer.attachMediaElement(video);
                            hlsPlayer.load();
                          },
                        },
                      }}
                      contextmenu={[]}
                    />
                  ))}
              {datas === undefined &&
                onlineuser &&
                (!iOS ? (
                  <Dplayer
                    lang="en"
                    autoplay
                    video={{
                      url: onlineuser.broadcasterDetail.playUrl,
                      type: 'customFlv',
                      customType: {
                        customFlv(video) {
                          const flvPlayer = flvjs.createPlayer({
                            type: 'flv',
                            url: video.src,
                          });
                          flvPlayer.attachMediaElement(video);
                          flvPlayer.load();
                        },
                      },
                    }}
                    contextmenu={[]}
                  />
                ) :
                  (
                    <Dplayer
                      lang="en"
                      autoplay
                      video={{
                        url: onlineuser.broadcasterDetail.m3u8Url,
                        type: 'customHls',
                        customType: {
                          customFlv(video) {
                            const hlsPlayer = Hls.createPlayer({
                              type: 'flv',
                              url: video.src,
                            });
                            hlsPlayer.attachMediaElement(video);
                            hlsPlayer.load();
                          },
                        },
                      }}
                      contextmenu={[]}
                    />
                  ))}
              <div className="video-info-clas">
                <VideoInfo
                  button
                  details={datas}
                  onlineuser={onlineuser}
                  mainprop={this.props.mainprops}
                  folow={this.handleFollow}
                  unfolow={this.handleUnFollow}
                  updatetitleAction={this.props.updatetitleAction}
                  blockuserAction={this.props.blockuserAction}
                  location={this.props.location}
                  reportAction={this.props.reportAction}
                  deletevideo={this.deletevideo}
                  key="videoInfo"
                />
              </div>
              <BroadcastDetail
                button
                channel={datas || onlineuser}
                mainprop={this.props.mainprops}
                folow={this.follo}
                unfollo={this.unfollo}
                publicuserinfo={publicuserinfo}
                history={history}
                deletevideo={this.deletevideo}
                playbacksAction={this.props.playbacksAction}
              />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={6}
              lg={5}
              style={{ padding: '0' }}
              className="comment-box-chat"
            >
              <CommentBox
                channel={datas || onlineuser}
                uid2={this.state.uid}
                streamId={this.state.iduser}
                publicUserInfo={publicuserinfo}
                blockuserAction={this.props.blockuserAction}
                reportAction={this.props.reportAction}
              />
            </Col>
          </Row>
        </Layout>
      </Wrapper>
    );
  }
}

VideoPlayer.defaultProps = {
  dispatch: PropTypes.func.isRequired,
  channel: {},
};
const mapStateToProps = createStructuredSelector({
  view: makeSelectView(),
  appAccess: appAccessToken(),
});
VideoPlayer.propTypes = {
  appAccess: PropTypes.oneOfType([PropTypes.object]),
  view: PropTypes.oneOfType([PropTypes.object]),
  mainprops: PropTypes.oneOfType([PropTypes.object]),
  history: PropTypes.oneOfType([PropTypes.object]),
  location: PropTypes.oneOfType([PropTypes.object]),
  blockuserAction: PropTypes.oneOfType([PropTypes.func]),
  unblockuserAction: PropTypes.oneOfType([PropTypes.func]),
  playbacksAction: PropTypes.oneOfType([PropTypes.func]),
  followAction: PropTypes.oneOfType([PropTypes.func]),
  unfollowAction: PropTypes.oneOfType([PropTypes.func]),
  updatetitleAction: PropTypes.oneOfType([PropTypes.func]),
  reportAction: PropTypes.oneOfType([PropTypes.func]),
};
const withConnect = connect(mapStateToProps);

export default compose(withConnect)(VideoPlayer);

