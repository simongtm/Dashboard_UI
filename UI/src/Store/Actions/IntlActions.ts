import { UPDATE_LANGUAGE } from "../ActionTypes/IntlActionType";

export const updateLanguage = (locale) => ({
  type: UPDATE_LANGUAGE,
  payload: locale,
});
