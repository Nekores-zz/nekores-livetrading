// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';
import { notification } from 'antd';
import Http from '../../utils/axios';
import updateUserName from '../../components/UpdateName/UpdateName.gql';
import getUserInfo from '../AboutTrading/useraboutme.gql';
import { constants as c, actions as a } from './constants';

// Individual exports for testing


function* userinfo({ payload: { uid, config } }) {
  try {
    const response = yield Http.post(
      '',
      { query: getUserInfo, variables: { uid } },
      config,
    );
    yield put(a.setUserinfo(response.data.data.getUserInfo));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }
}
function* updatename({ payload: { names, config } }) {
  try {
    yield Http.post(
      '',
      {
        query: updateUserName,
        variables: { name: names },
      },
      config
    );
    // eslint-disable-next-line no-shadow
  } catch (error) {
    // eslint-disable-next-line no-console
    if (error.message) {
      notification.error({
        message: 'name',
        duration: 1,
        description: 'Do not use empty or pre use name',
      });
    } else {
      notification.error({
        description: 'somethig went wrong try again',
      });
    }
  }
}
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(c.USERINFO_ACTION, userinfo);
  yield takeLatest(c.UPDATENAME_ACTION, updatename);
}
