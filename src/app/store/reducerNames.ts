export const REDUCER_NAMES = {
    IRS_TRANSLATION: 'IRS_TRANSLATION'
};

export const checkReducerNamesOrThrow = (reducerNames: string[]) => {
    if (reducerNames.length <= 0)
        throw new Error('EMPTY REDUCER_NAMES')

    const allReducerNames: string[] = Object.keys(REDUCER_NAMES);
    const searchResult = reducerNames.map(k => allReducerNames.find(l => l === k) ? true : false);

    if (!(searchResult.filter(k => k).length < reducerNames.length ? false : true))
        throw new Error('INVALID REDUCER_NAMES');
}
