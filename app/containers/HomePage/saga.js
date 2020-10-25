// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';
import { notification } from 'antd';

import sortBroadcasters from '../../components/LiveVideos/broadcasters.gql';
import getUserInfo from '../AboutTrading/useraboutme.gql';
import { constants as c, actions as a } from './constants';
import Http from '../../utils/axios';

function* homepage({ payload: { config, pageSize, setLoading } }) {
  try {
    const response = yield Http.post(
      '',
      {
        query: sortBroadcasters,
        variables: { vPageNo: pageSize, vPageSize: 12, bPage: 0, bPsize: 0 },
      },
      config
    );
    yield put(a.setVideos(response.data.data));
    yield setLoading(false);
  } catch (e) {
    notification.error({
      message: 'Some thing is Wrong! Please try again',
    });
  }
}

function* abouttrading({ payload: { config, usrId } }) {
  try {
    yield put(a.setLoading(true));
    // yield put(c.setuserloading, true);
    const response = yield Http.post(
      '',
      {
        query: getUserInfo,
        variables: { uid: usrId },
      },
      config
    );
    yield put(a.setLoginuseedetail(response.data.data.getUserInfo));
    yield put(a.setLoading(false));
    // yield put(c.setuserloading, false);

    // set userInfoLoading false;
  } catch (error) {
    // eslint-disable-next-line
    notification.error({
      message: error.message,
    });
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(c.HOMEPAGE_ACTION, homepage);
  yield takeLatest(c.LOGINUSEEDETAIL_ACTION, abouttrading);
}
