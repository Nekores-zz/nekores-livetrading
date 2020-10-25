// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';
import { notification } from 'antd';
import Http from '../../utils/axios';
import updateStreamTitle from './updateTittle.gql';
import updateUserName from '../../components/UpdateName/UpdateName.gql';
import RTMPURL from './golive.gql';
import updateSocialProfileLinks from './sociallink.gql';
import getUserInfo from '../AboutTrading/useraboutme.gql';
import { constants as c, actions as a } from './constants';
import unBlock from '../../components/VideoInfo/queries/unblock.gql';

// Individual exports for testing
function* updateStream({ payload: { config, titles } }) {
  try {
    const res = yield Http.post(
      '',
      {
        query: updateStreamTitle,
        variables: { title: titles },
      },
      config
    );
    notification.success({
      message: 'Updated',
      description: 'Live Stream Title succesfully Updated!',
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

function* rtmurl({ payload: { config, isCopied } }) {
  try {
    const response = yield Http.post('', { query: RTMPURL }, config);
    yield put(a.setGenratekey(response.data.data.liveStreamPublishedURL));
    yield isCopied ? isCopied(true) : null;
    if (isCopied) {
      return (
        notification.success({
          message: 'Copied!',
          description: 'Please use the URL to go Live',
        })
      );
    } return {};
  } catch (e) {
    notification.error({
      message: 'Can Not Copy',
      description: 'Make sure you are properly logged In',
    });
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
    // eslint-disable-next-line
    notification.success({
      message: 'Updated',
      description: 'Your name has been succesfully Updated!',
    });
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

function* sociallinks({ payload: { socialprofilelinks, config } }) {
  try {
    const links = {};
    Object.keys(socialprofilelinks).forEach((i) => {
      const item = socialprofilelinks[i];
      if (item !== null && item !== undefined) {
        links[i] = socialprofilelinks[i];
      }
    });
    yield Http.post(
      '',
      { query: updateSocialProfileLinks, variables: { link: links } },
      config
    );
    notification.success({
      description: 'Your social link has been succesfully linked',
    });
  } catch (error) {
    // eslint-disable-next-line
    if (error.message) {
      notification.error({
        message: 'Social Profile Links',
        duration: 1,
        description: error.message,
      });
    } else {
      notification.error({
        description: 'somethig went wrong try again',
      });
    }
  }
}

function* unblockuser({ payload: { config, uid } }) {
  try {
    yield Http.post(
      '',
      {
        query: unBlock,
        variables: { uid },
      },
      config
    );
    notification.success({
      message: 'Block',
      description: 'User unblocked succesfully',
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
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(c.UPDATESTREAM_ACTION, updateStream);
  yield takeLatest(c.GENRATEKEY_ACTION, rtmurl);
  yield takeLatest(c.UPDATENAME_ACTION, updatename);
  yield takeLatest(c.USERINFO_ACTION, userinfo);
  yield takeLatest(c.SOCILAPROFILE_ACTION, sociallinks);
  yield takeLatest(c.UNBLOCK_ACTION, unblockuser);
}
