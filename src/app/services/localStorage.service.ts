const isExistKeyOrThrow = (key: string) => {
    const result = Object.keys(STORAGE_KEYS).map(k => k === key ? true : false).find(k => k === true);
    if (result)
        return;

    const ex = 'DOENT_EXIST_KEY';
    console.error(ex);
    throw new Error(ex);
}

/* ----------- * - * ----------- */

const STORAGE_KEYS = {
    VOTES: 'VOTES'
}

const STORAGE_ITEM_TYPES = {
    [STORAGE_KEYS.VOTES]: 'object'
}

const getStorageItemType = (key: string): string | null => {
    return STORAGE_ITEM_TYPES[key];
}

const setItemToLS = (key: string, item: any) => {
    isExistKeyOrThrow(key);

    const itemType = getStorageItemType(key);
    localStorage.setItem(key, item && itemType === 'object' ? JSON.stringify(item) : item);
}

const getItemFromLS = (key: string) => {
    isExistKeyOrThrow(key);

    const itemType = getStorageItemType(key);
    const resLS = localStorage.getItem(key);
    return resLS && itemType === 'object' ? JSON.parse(resLS) : resLS;
}

const removeItemFromLS = (key: string) => {
    isExistKeyOrThrow(key);

    localStorage.removeItem(key)
}

export const LocalStorageService = {
    STORAGE_KEYS,
    setItemToLS,
    getItemFromLS,
    removeItemFromLS
}