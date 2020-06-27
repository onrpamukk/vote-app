import { REDUCER_NAMES } from './reducerNames';

/* ----------- * - * ----------- */
/* ----------- * - * ----------- */
/* ----------- * - * ----------- */


import { reducerTranslation, irs_Translation } from './reducers/reducerTranslation';



/* ----------- * - * ----------- */
/* ----------- * - * ----------- */
/* ----------- * - * ----------- */

export const InitialState = {
    [REDUCER_NAMES.IRS_TRANSLATION]: irs_Translation
}

/* ----------- * - * ----------- */

export const combineReducer: any = {
    [REDUCER_NAMES.IRS_TRANSLATION]: reducerTranslation
}