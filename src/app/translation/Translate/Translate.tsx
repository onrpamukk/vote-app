import React from 'react';

import { StoreConnect } from '../../bases/StoreConnect';
import { REDUCER_NAMES } from '../../store/reducerNames';
import { TranslationService } from '../translate.service';
interface IPROPS {
    tKey: string,
    tParams?: any[];
}

export class Translate extends StoreConnect<IPROPS, any>{
    constructor(props: IPROPS) {
        super(props);
        super.connectStore([REDUCER_NAMES.IRS_TRANSLATION]);
    }

    componentWillUnmount() {
        super.disconnectStore();
    }

    render() {
        return (
            <React.Fragment>
                {
                    TranslationService.translateStr(this.props.tKey, this.props.tParams)
                }
            </React.Fragment>
        )
    }
}
