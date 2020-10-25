import { takeLatest, put } from 'redux-saga/effects';
import { notification } from 'antd';
import findBroadcasters from './usersview.gql';
import getUserInfo from '../AboutTrading/useraboutme.gql';
import followUser from '../../components/VideoInfo/queries/followUser.gql';
import unFollowUser from '../../components/VideoInfo/queries/unFollow.gql';
// import unFollowUser from '../../components/VideoInfo/queries/unFollow.gql';
import Http from '../../utils/axios';
import { constants as c, actions as a } from './constants';

function* profilepage({ payload: { config, uid } }) {
  try {
    const response = yield Http.post(
      '',
      { query: findBroadcasters, variables: { uid } },
      config
    );
    yield put(a.setAboutusers(response.data.data.findBroadcaster));
  } catch (e) {
    console.log(e);
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
    yield put(a.setAbouttrading(response.data.data.getUserInfo.publicInfo));
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
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(c.ABOUTUSER_ACTION, profilepage);
  yield takeLatest(c.ABOUTTRADING_ACTION, abouttrading);
  yield takeLatest(c.FOLLOW_ACTION, follow);
  yield takeLatest(c.UNFOLLOW_ACTION, unfollow);
}
