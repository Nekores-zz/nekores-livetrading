
import { fromJS } from 'immutable';
import privacyPageReducer from '../reducer';

describe('privacyPageReducer', () => {
  it('returns the initial state', () => {
    expect(privacyPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
