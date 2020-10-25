/*
 *
 * HomePage constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions(
  [
    'default_action.toProps',
    'popular_action.toProps.payload',
    'homepage_action.toProps.payload',
    'set_videos.payload',
    'set_userloading.payload',
    'set_loading.payload',
    'loginuseedetail_action.toProps.payload',
    'set_loginuseedetail.payload',
  ],
  'APP/TODOS'
);

export { constants, actions, toProps, propTypes };
