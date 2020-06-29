import ENV_LOCAL from './local.json';
import ENV_DEV from './dev.json';

export const ENVIRONMENT_NODES = {
    LOCAL: 'LOCAL',
    DEV: 'DEV'
}

const ENV: string | undefined = process.env.REACT_APP_SECRET_CODE;

const getEnvVariable = () => {
    switch (ENV) {
        case ENVIRONMENT_NODES.DEV: return ENV_DEV;
        default: return ENV_LOCAL;
    }
}

export const isEnvLocal = (): boolean => ENV !== ENVIRONMENT_NODES.DEV;

export const environment = getEnvVariable();