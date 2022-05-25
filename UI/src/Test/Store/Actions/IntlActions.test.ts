import { updateLanguage } from "../../../Store/Actions/IntlActions";
import { UPDATE_LANGUAGE } from "../../../Store/ActionTypes/IntlActionType";


describe('Intl action suite', () => {
  it('Should update the language', () => {
    let actual = {
      type: UPDATE_LANGUAGE,
      payload: 'en'
    };
    let result = updateLanguage('en');
    expect(result).toEqual(actual);
  });
});