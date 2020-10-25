// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, put, select } from 'redux-saga/effects';
import { notification } from 'antd';
import Http from '../../utils/axios';
import fire from '../../utils/config';
import { constants as c, actions as a } from './constants';
import updateUserEmail from './updateEmail.gql';
import getUserInfo from '../AboutTrading/useraboutme.gql';
import { makeSelectGoLive } from '../GoLive/selectors';
import { actions } from '../GoLive/constants';

function* updateemail({ payload: { config, email } }) {
  try {
    const response = yield Http.post(
      '',
      {
        query: updateUserEmail,
        variables: { email },
      },
      config
    );
    yield put(a.setUpdateemail(response.data.data.updateUserEmail));
    const goLive = yield select(makeSelectGoLive());
    const { userinfo } = goLive;
    if (userinfo) {
      const updatedState = { ...userinfo };
      userinfo.privateInfo.email = email;
      yield put(actions.setUserinfo(updatedState));
    }
    // // eslint-disable-next-line
    notification.success({
      message: 'Update',
      description: 'You update succesfully',
    });
  } catch (error) {
    // eslint-disable-next-line
    if (error) {


      notification.error({
        message: 'Email',
        duration: 1,
        description: 'somethig went wrong try again',
      });
    } else {
      notification.error({
        description: 'somethig went wrong try again',
      });
    }
  }
}
function* userinfo({ payload: { uid, config } }) {
  try {
    const response = yield Http.post(
      '',
      { query: getUserInfo, variables: { uid } },
      config
    );
    yield put(a.setUserinfo(response.data.data.getUserInfo));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(c.UPDATEEMAIL_ACTION, updateemail);
  yield takeLatest(c.USERINFO_ACTION, userinfo);
}
