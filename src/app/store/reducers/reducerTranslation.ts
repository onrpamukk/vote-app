import { IACTION } from '../action.interface';
import { TYPES_TRANSLATION } from '../types'
import { IRS_TRANSLATION } from '../interfaces';
import { LocalStorageService } from '../../services/localStorage.service';


export const irs_Translation: IRS_TRANSLATION = {
   language: 'tr'
}

export const reducerTranslation = (state: IRS_TRANSLATION = { ...irs_Translation }, action: IACTION) => {
   const { type, payload } = action;

   if (type === TYPES_TRANSLATION.SET_LANGUAGE && payload !== state.language) {
      LocalStorageService.setItemToLS(LocalStorageService.STORAGE_KEYS.LANGUAGE, payload);
      return { ...state, language: payload };
   }

   return state;
}