import { takeLatest, put } from 'redux-saga/effects';
import { saveState } from 'utils/persistState';
import { notification } from 'antd';
import fire from '../../utils/config';
import { loginUserAction } from '../App/actions';
import { constants as c, actions as a } from './constants';

function* login({ payload: { email, password, close, afterLogin } }) {
  try {
    const social = {};
    const response = yield fire.fire
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (response) {
      social.refreshToken = response.user.refreshToken;
      social.secret = response.user.secret;
      social.name = response.user.displayName;
      social.picture = response.user.photoURL;
      social.expiresIn = response.expires_in;
      social.userId = response.user.uid;
      social.source = 'Email';

      const IdToken = yield fire.fire.auth().currentUser.getIdToken();
      social.IdToken = IdToken;
      yield put(loginUserAction(social));
      yield saveState(social);
      yield close();
      yield afterLogin();
    }
    notification.success({
      message: 'Login',
      description: 'You have logged in succesfully!',
      duration: 1,
    });
  } catch (error) {
    if (error.message) {
      notification.error({
        message: 'Login',
        duration: 1,
        description: 'The email and password is invalid',
      });
    } else {
      notification.error({
        message: 'Login',
        duration: 1,
        description: 'Something went wrong please try again!!!',
      });
    }
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(c.LOGIN_ACTION, login);
}
