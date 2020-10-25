/*
 *
 * Contact constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions([
  'default_action.toProps',
], 'APP/TODOS');

export {
  constants,
  actions,
  toProps,
  propTypes,
};
