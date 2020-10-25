import { takeLatest, put } from 'redux-saga/effects';
import { notification } from 'antd';
import fire from '../../utils/config';
import sortBroadcasters from '../../components/LiveVideos/broadcasters.gql';
import followUser from '../../components/VideoInfo/queries/followUser.gql';
import unFollowUser from '../../components/VideoInfo/queries/unFollow.gql';
import Http from '../../utils/axios';
import getUserInfo from '../../containers/AboutTrading/useraboutme.gql';
import updateStreamTitle from '../../components/VideoInfo/updateTittle.gql';
import block from '../../components/VideoInfo/queries/blockUser.gql';
import deletePlayback from '../../components/VideoInfo/queries/deletePlayback.gql';
import findPublishedPlaybacks from '../../components/LiveVideos/onlinebroadcastrers.gql';
import report from '../../components/VideoPlayer/report.gql';
// import findBroadcaster from './usersview.gql';
// import joinLive from '../../components/VideoInfo/queries/liveViews.gql';
// import findPublishedPlaybacks from './playbacksbyid.gql';
import { constants as c, actions as a } from './constants';
const fireBase = fire.fire;

function* findPublishedPlayback({ payload: { config } }) {
  try {
    const response = yield Http.post(
      '',
      {
        query: findPublishedPlaybacks,
        variables: { vPageNo: 0, vPageSize: 0 },
      },
      config
    );
    yield put(a.setPublishplaybacks(response.data.data.replays));
  } catch (error) {
    notification.error({
      message: error.message,
    });
  }
}

function* playbacks({ payload: { config, playId } }) {
  try {
    const response = yield Http.post(
      '',
      {
        query: sortBroadcasters,
        variables: { vPageNo: 0, vPageSize: 0, bPage: 0, bPsize: 0 },
      },
      config
    );
    const data = response.data.data;
    if (data) {
      const { replays, sortBroadcasters: liveBroadcasters } = data;
      const onlineusers = liveBroadcasters && liveBroadcasters.users.filter((item) => (item.broadcaster.streamUid === playId));
      const onlineuser = onlineusers && onlineusers[0];
      // offline playbacks
      const channels = replays && replays.playbacks.filter((item) => item.uid === playId);
      const datas = channels && channels[0];
      const id = (datas && datas.userId) || (onlineuser && onlineuser.uid);
      const uid = (datas && datas.uid) || (onlineuser && onlineuser.broadcaster.streamUid);

      const listener = fireBase.database().ref(`${onlineuser ? 'broadcasters' : 'broadcasters-playback'}/${id}${!onlineuser ? `/${uid}` : ''}`);
      listener.once('value', (ss) => {
        ss.ref.update({
          views: ss.val().views + 1,
        });
      });
      // listener.on('value', (ss) => {
      //   listener.onDisconnect().update({
      //     views: ss.val().views - 1,
      //   });
      // });
      yield publicuser({ payload: { config, uid: id } });
    }
    yield put(a.setPlaybacks(data));
  } catch (e) {
    notification.error({
      message: 'Some thing is Wrong! Please try again',
    });
  }
}

function* publicuser({ payload: { config, uid } }) {
  try {
    const response = yield Http.post(
      '',
      { query: getUserInfo, variables: { uid } },
      config
    );
    yield put(a.setPublicuser(response.data.data.getUserInfo));
  } catch (error) {
    // eslint-disable-next-line
    notification.error({
      message: 'Some thing is Wrong! Please try again',
    });
  }
}

function* follow({ payload: { config, uid } }) {
  try {
    yield Http.post(
      '',
      {
        query: followUser,
        variables: { uid },
      },
      config
    );
    yield playbacks({ payload: { config, uid } });
    // eslint-disable-next-line no-shadow
  } catch (error) {
    // eslint-disable-next-line no-console
    if (error.message) {
      notification.error({
        message: 'follow',
        duration: 1,
        description: error.message,
      });
    } else {
      notification.error({
        description: 'somethig went wrong',
      });
    }
  }
}
function* unfollow({ payload: { config, uid, playId } }) {
  try {
    yield Http.post(
      '',
      {
        query: unFollowUser,
        variables: { uid },
      },
      config
    );
    yield playbacks({ payload: { config, playId } });
    // eslint-disable-next-line no-shadow
  } catch (error) {
    // eslint-disable-next-line no-console
    if (error.message) {
      notification.error({
        message: 'unfollow',
        duration: 1,
        description: error.message,
      });
    } else {
      notification.error({
        description: 'somethig went wrong',
      });
    }
  }
}

function* updatetitle({ payload: { config, titles } }) {
  try {
    const response = yield Http.post(
      '',
      {
        query: updateStreamTitle,
        variables: { title: titles },
      },
      config
    );
    notification.success({
      message: 'Updated',
      description: 'Title updated succesful',
    });
    // eslint-disable-next-line no-shadow
  } catch (e) {
    // eslint-disable-next-line no-console
    notification.error({
      message: 'Empty',
      description: 'try again',
    });
  }
}

function* blockuser({ payload: { config, uid } }) {
  try {
    yield Http.post(
      '',
      {
        query: block,
        variables: { uid },
      },
      config
    );
    notification.success({
      message: 'Block',
      description: 'User blocked succesfully',
    });
    // eslint-disable-next-line no-shadow
  } catch (e) {
    // eslint-disable-next-line no-console
    notification.error({
      message: 'error',
      description: 'try again',
    });
  }
}

function* deletevideo({ payload: { config, playbackId } }) {
  try {
    yield Http.post(
      '',
      {
        query: deletePlayback,
        variables: { playbackId },
      },
      config
    );
  } catch (error) {
    notification.error({
      message: 'error',
      description: error.message,
    });
  }
}


function* reportuser({ payload: { config, userId, uid, notereport, reasonreport, imageUrl } }) {
  try {
    yield Http.post(
      '',
      {
        query: report,
        variables: {
          reportData: {
            toUserId: uid,
            streamerId: userId,
            note: notereport,
            reason: reasonreport,
            image: { base64Image: imageUrl[1] },
          },
        },
      },
      config
    );
  } catch (error) {
    notification.error({
      message: 'Empty',
      description: error.message,
    });
  }
}


// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(c.PLAYBACKS_ACTION, playbacks);
  yield takeLatest(c.PUBLISHPLAYBACKS_ACTION, findPublishedPlayback);
  yield takeLatest(c.FOLLOW_ACTION, follow);
  yield takeLatest(c.UNFOLLOW_ACTION, unfollow);
  yield takeLatest(c.UPDATETITLE_ACTION, updatetitle);
  yield takeLatest(c.BLOCKUSER_ACTION, blockuser);
  yield takeLatest(c.REPORT_ACTION, reportuser);
  // yield takeLatest(c.JOINLIVE_ACTION, joinlive);
  // yield takeLatest(c.LEAVELIVE_ACTION, leavelive);
  // yield takeLatest(c.UPDATE_VIEW, updateView);
  yield takeLatest(c.DELETE_ACTION, deletevideo);
  // yield takeLatest(c.FINDBROAD_ACTION, findBroad);
}
