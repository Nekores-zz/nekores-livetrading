/*
 *
 * GoLive constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions([
  'default_action.toProps',
  'update_RTMP_action.toProps',
  'updateStream_action.toProps.payload',
  'set_updateStream.payload',
  'genratekey_action.toProps.payload',
  'set_genratekey.payload',
  'updatename_action.toProps.payload',
  'set_updatename.payload',
  'userinfo_action.toProps.payload',
  'set_userinfo.payload',
  'socilaprofile_action.toProps.payload',
  'facebook_action.toProps.payload',
  'twitter_action.toProps.payload',
  'set_twitter.payload',
  'youtube_action.toProps.payload',
  'snapchat_action.toProps.payload',
  'telegram_action.toProps.payload',
  'unblock_action.toProps.payload',
], 'APP/TODOS');

export {
  constants,
  actions,
  toProps,
  propTypes,
};
