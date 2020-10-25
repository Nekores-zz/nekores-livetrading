
import { fromJS } from 'immutable';
import aboutTradingReducer from '../reducer';

describe('aboutTradingReducer', () => {
  it('returns the initial state', () => {
    expect(aboutTradingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
