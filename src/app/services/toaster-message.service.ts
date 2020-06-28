
var growlRef: any = null;
var isGrowRendered: boolean = false;

export const setGrowlRef = (_growlRef: any) => {
    growlRef = _growlRef;
    isGrowRendered = true;
};

const MESSAGE_TYPES = {
    SUCCESS: 'success',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error'
};

const showMessage = (object: any) => {
    growlRef.show(object);
};

const showSuccessMessage = (summary: string, detailTKeyword: string) => {
    if (!isGrowRendered)
        return;

    const detail = detailTKeyword
    showMessage({ severity: MESSAGE_TYPES.SUCCESS, summary, detail: detail === '' ? detailTKeyword : detail })
};

const showInfoMessage = (summary: string, detailTKeyword: string) => {
    if (!isGrowRendered)
        return;

    const detail = detailTKeyword
    showMessage({ severity: MESSAGE_TYPES.INFO, summary, detail: detail === '' ? detailTKeyword : detail })
};

const showWarnMessage = (summary: string, detailTKeyword: string) => {
    if (!isGrowRendered)
        return;

    const detail = detailTKeyword
    showMessage({ severity: MESSAGE_TYPES.WARN, summary, detail: detail === '' ? detailTKeyword : detail })
};

const showErrorMessage = (summary: string, detailTKeyword: string) => {
    if (!isGrowRendered)
        return;

    const detail = detailTKeyword
    showMessage({ severity: MESSAGE_TYPES.ERROR, summary, detail: detail === '' ? detailTKeyword : detail })
};

const showWarnMessageBE = (beErrorKey: string, beDefaultError: string) => {
    if (!isGrowRendered)
        return;
};

const showAlertMessage = (title: string,detail :string) => {
    let message = detail
    showMessage({ severity: MESSAGE_TYPES.INFO, summary: title, detail: message})
};


const clearAllMessages = () => {
    if (!isGrowRendered)
        return;

    growlRef.clear();
};

export const TMService = {
    showSuccessMessage,
    showInfoMessage,
    showWarnMessage,
    showWarnMessageBE,
    showErrorMessage,
    clearAllMessages,
    showAlertMessage
};
