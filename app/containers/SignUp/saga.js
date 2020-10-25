import { takeLatest } from 'redux-saga/effects';
import { notification } from 'antd';
import fire from '../../utils/config';
import { constants as c } from './constants';

function* signup({ payload: { email, password, handleReset } }) {
  try {
    const social = {};
    social.email = email;
    social.password = password;

    yield fire.fire.auth().createUserWithEmailAndPassword(email, password);
    const user = yield fire.auth.currentUser;

    yield user.updateProfile({
      source: 'Email',
    });

    const DBPATH = {
      USERS: 'users',
      USER_PUBLIC_PROFILE: 'user-public-profiles',
      USER_FOLLWING: 'user-following',
      USER_FOLLWER: 'user-follower',
    };

    yield handleReset();

    yield notification.success({
      message: 'Login',
      description: 'Account Created succesfully!',
    });
    yield fire.fire.auth().currentUser.sendEmailVerification();
    yield fire.fire
      .database()
      .ref(DBPATH.USER_PUBLIC_PROFILE)
      .child(user.uid)
      .set({ aboutme: '', follower: 0, following: 0, image: '' });
  } catch (error) {
    if (error.message) {
      notification.error({
        message: 'Error',
        duration: 1,
        description: error.message,
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
export default function* defaultSaga() {
  yield takeLatest(c.SIGNUP_ACTION, signup);
  // See example in containers/HomePage/saga.js
}
