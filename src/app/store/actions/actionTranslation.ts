import { TYPES_TRANSLATION } from '../types';

export const actionSetLanguage = (language: string) => {
    return (dispatch: Function) => {
        dispatch({ type: TYPES_TRANSLATION.SET_LANGUAGE, payload: language });
    }
}