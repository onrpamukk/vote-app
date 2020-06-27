export interface IGUARD {
    redirectURLWhenFail: string,
    fnc: Function
}

export interface IROUTE {
    path?: string,
    component: any,
    guards?: IGUARD[]
    exact?: boolean,
    routes?: IROUTE[],
    redirectTo?: string
}