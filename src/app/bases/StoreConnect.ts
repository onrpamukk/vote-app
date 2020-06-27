import { Component } from 'react';

import { Store } from "../store/store";
import { checkReducerNamesOrThrow } from '../store/reducerNames';

export class StoreConnect<IPROPS, ISTATE> extends Component<IPROPS, ISTATE> {
    storeSubscribe: any = null;
    state: any = {};

    constructor(props: IPROPS, childComponentState: any = {}) {
        super(props);
        this.state = {
            ...childComponentState
        }
    }

    private storeListener(reducerNames: string[], isInitial: boolean) {
        let stateObject = this.getRecudersFromStore(reducerNames);

        if (isInitial)
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state = { ...this.state, ...stateObject };
        else {
            const counter = reducerNames.map(k => this.state[k] === stateObject[k]).filter(k => !k).length;

            if (counter > 0)
                this.setState(stateObject, () => { /*console.log(this.state)*/
                });
        }

    }

    private getRecudersFromStore(reducerNames: string[]): any {
        checkReducerNamesOrThrow(reducerNames);

        let storeState: any = Store.getState();
        let stateObject = {};
        reducerNames
            .forEach(name => {
                stateObject[name] = storeState[name]
            });

        return stateObject;
    }

    connectStore(reducerNames: string[]) {
        this.storeListener(reducerNames, true);
        this.storeSubscribe = Store.subscribe(() => this.storeListener(reducerNames, false));
    }

    async disconnectStore() {
        if (this.storeSubscribe)
            this.storeSubscribe();
    }

    dispatchStoreAction(storeAction: Function, storeActionParams: null | any[] = []) {
        if (!storeAction)
            throw new Error('INVALID_ACTION');

        const next_FNC: any = Store.dispatch;
        return next_FNC(storeActionParams ? storeAction.call(this, ...storeActionParams) : storeAction(storeActionParams));
    }
}
