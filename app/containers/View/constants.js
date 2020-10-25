/*
 *
 * View constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions([
  'default_action.toProps',
  'current_channel.toProps.payload',
  'video_action.toProps.payload',
  'set_video.payload',
  'playbacks_action.toProps.payload',
  'set_playbacks.payload',
  'publishplaybacks_action.toProps.payload',
  'set_publishplaybacks.payload',
  'follow_action.toProps.payload',
  'unfollow_action.toProps.payload',
  'publicuser_action.toProps.payload',
  'set_publicuser.payload',
  'blockuser_action.toProps.payload',
  'unblockuser_action.toProps.payload',
  'updatetitle_action.toProps.payload',
  'joinlive_action.toProps.payload',
  'leavelive_action.toProps.payload',
  'update_view.toProps.payload',
  'report_action.toProps.payload',
  'delete_action.toProps.payload',
  'viewReplays_action.toProps.payload',
  'set_viewReplays.payload',

], 'APP/TODOS');

export {
  constants,
  actions,
  toProps,
  propTypes,
};
