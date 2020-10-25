import { fromJS } from 'immutable';
import logVideosReducer from '../reducer';

describe('logVideosReducer', () => {
  it('returns the initial state', () => {
    expect(logVideosReducer(undefined, {})).toEqual(fromJS({}));
  });
});
