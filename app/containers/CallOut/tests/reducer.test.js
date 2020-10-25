
import { fromJS } from 'immutable';
import callOutReducer from '../reducer';

describe('callOutReducer', () => {
  it('returns the initial state', () => {
    expect(callOutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
