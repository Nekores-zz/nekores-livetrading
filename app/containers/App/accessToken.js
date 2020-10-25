import Http from '../../utils/axios';
import { getAppAccessToken, refreshToken } from './getAppAccessToken';
import { saveAppToken } from '../../utils/saveAppToken';

export const getAccessToken = async (
  UpdateSetTokenAction,
  fireBaseToken = '',
  updateUserInfo,
) => {
  try {
    const response = await Http.post('/', {
      query: getAppAccessToken,
      variables: fireBaseToken ? { fbToken: fireBaseToken } : {},
    });
    const { data } = response;
    if (data) {
      const info = data.data.getAppAccessToken;
      const { token, uid, expiresIn, anonymous, refreshedToken } = info;
      if (updateUserInfo) {
        const config = {
          headers: { Authorization: `bearer ${token}` },
        };
        updateUserInfo({ config, usrId: uid });
      }
      if (expiresIn !== -1) {
        console.log('need to checked');
      }
      if (UpdateSetTokenAction) {
        UpdateSetTokenAction({
          appAccessToken: token,
          uid,
          expiresIn,
          refreshedToken,
          anonymous,
          date: +new Date(),
        });
      }
      saveAppToken({
        appAccessToken: token,
        uid,
        expiresIn,
        refreshedToken,
        anonymous,
        date: +new Date(),
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const refreshAppAccessToken = async (token, UpdateSetTokenAction) => {
  try {
    const response = await Http.post('/', {
      query: refreshToken,
      variables: { refreshedToken: token },
    });
    const { data } = response;
    if (data) {
      const info = data.data.refreshAppAccessToken;
      const { token, uid, expiresIn, anonymous, refreshedToken } = info;
      if (expiresIn !== -1) {
        console.log('need to checked');
      }
      UpdateSetTokenAction({
        appAccessToken: token,
        uid,
        expiresIn,
        anonymous,
        refreshedToken,
        date: +new Date(),
      });
    }
  } catch (e) {
    console.log(e);
  }
};
