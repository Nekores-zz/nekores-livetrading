
import { takeLatest, put } from 'redux-saga/effects';
import { notification } from 'antd';
import getUserInfo from './useraboutme.gql';
import followUser from '../../components/VideoInfo/queries/followUser.gql';
import unFollowUser from '../../components/VideoInfo/queries/unFollow.gql';
import deletePlayback from '../../components/VideoInfo/queries/deletePlayback.gql';
import findPublishedPlaybacks from '../View/playbacksbyid.gql';
import { constants as c, actions as a } from './constants';
import Http from '../../utils/axios';

function* homepage({ payload: { config, pageNumber, uid } }) {
  try {
    const response = yield Http.post(
      '',
      {
        query: findPublishedPlaybacks,
        variables: { vPageNo: pageNumber, vPageSize: 12, vdec: true, vuser: uid },
      },
      config,
    );
    yield put(a.setReplyvideos(response.data.data.findPublishedPlaybacks));
    // yield setLoading(false);
  } catch (e) {
    notification.error({
      message: 'Some thing is Wrong! Please try again',
    });
  }
}

function* abouttrading({ payload: { config } }) {
  try {
    const response = yield Http.post(
      '',
      {
        query: getUserInfo,
      },
      config
    );
    yield put(a.setAbouttrading(response.data.data.getUserInfo));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
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
    yield abouttrading({ payload: { config } });
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
function* unfollow({ payload: { config, uid } }) {
  try {
    yield Http.post(
      '',
      {
        query: unFollowUser,
        variables: { uid },
      },
      config
    );
    yield abouttrading({ payload: { config } });
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


// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(c.ABOUTTRADING_ACTION, abouttrading);
  yield takeLatest(c.FOLLOW_ACTION, follow);
  yield takeLatest(c.UNFOLLOW_ACTION, unfollow);
  yield takeLatest(c.DELETE_ACTION, deletevideo);
  yield takeLatest(c.VIDEOS_ACTION, homepage);
}
