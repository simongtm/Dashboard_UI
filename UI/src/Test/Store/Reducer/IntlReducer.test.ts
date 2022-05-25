import { intlReducer } from '../../../Store/Reducers/Intl/IntlReducer';
import { InitialState } from '../../../Store/Reducers/Intl/InitialState';
import { UPDATE_LANGUAGE } from '../../../Store/ActionTypes/IntlActionType';

describe('Intl reducer test suite', () => {
  it('Should update language', () => {
    const action = {
      type: UPDATE_LANGUAGE
    };
    const result = intlReducer(InitialState, action);
    expect(result.locale).toContain('en');
  });
});