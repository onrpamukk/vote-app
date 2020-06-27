import _ from 'lodash';
import { LocalStorageService } from '../services/localStorage.service';

import TR from './languages/TR.json';
import EN from './languages/EN.json';

const SUPPORTED_LANGUAGES = {
    TR: 'tr',
    EN: 'en'
};

const languages: any = {
    [SUPPORTED_LANGUAGES.TR]: TR,
    [SUPPORTED_LANGUAGES.EN]: EN
};

const getLanguageFromSLorDefault = () => {
    const language = LocalStorageService.getItemFromLS(LocalStorageService.STORAGE_KEYS.LANGUAGE);
    return Object.values(SUPPORTED_LANGUAGES).find(k => k === language) ? language : SUPPORTED_LANGUAGES.EN;
};

const translateStr = (key: string | null | undefined, params: any[] = []): string => {
    const language = getLanguageFromSLorDefault();
    let sentence: string = !key || false || false ? '' : _.get(languages[language], key, '');

    for (let index = 0; index < params.length; index++)
        sentence = sentence.replace(`{${index}}`, params[index]);

    return sentence;
};

const languageIsTR = () => {
    const language = getLanguageFromSLorDefault();
    return language === SUPPORTED_LANGUAGES.TR;
};

export const TranslationService = {
    SUPPORTED_LANGUAGES,
    translateStr,
    languageIsTR
};
