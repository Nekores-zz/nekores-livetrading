
import { fromJS } from 'immutable';
import goLiveReducer from '../reducer';

describe('goLiveReducer', () => {
  it('returns the initial state', () => {
    expect(goLiveReducer(undefined, {})).toEqual(fromJS({}));
  });
});
