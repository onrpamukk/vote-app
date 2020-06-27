import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IGUARD } from "./interfaces";

const checkGuards = (guards: IGUARD[]): true | string => {
    if (!guards || guards.length <= 0)
        return true;

    for (let i = 0; i < guards.length; i++) {
        const item: IGUARD = guards[i];
        if (!item.fnc())
            return item.redirectURLWhenFail;
    }

    return true;
}

export const RouteAndSubRoutes = (route: any) => {
    const matchURL = route.matchURL ? route.matchURL : null;
    const exact = route.exact;
    const path = `${matchURL && typeof matchURL == 'string' ? matchURL : ''}${route.path}`.replace(new RegExp('//', 'g'), '/');

    const guardResponse = checkGuards(route.guards);
    const isGuardRedirect: boolean = typeof guardResponse == 'string';
    const isRedirect = isGuardRedirect || (route.redirectTo && route.redirectTo !== '');
    let redirecURL: any = '';
    if (isRedirect) {
        redirecURL = isGuardRedirect ? guardResponse : `${matchURL}${route.redirectTo}`;
    }

    return (
        isRedirect
            ?
            <Redirect to={redirecURL}></Redirect>
            :
            <Route
                exact={exact}
                sensitive={true}
                path={path}
                render={props => {
                    return (
                        <ParentCmp isFail={false} redirectURLWhenFail=''>
                            <route.component {...props} routes={route.routes} />
                        </ParentCmp>
                    )
                }}
            />
    );
};

interface IPROPS {
    isFail: boolean,
    redirectURLWhenFail: string
}
class ParentCmp extends React.Component<IPROPS>{
    render() {
        return (
            <React.Fragment>
                {
                    !this.props.isFail ? this.props.children : <Redirect to={this.props.redirectURLWhenFail}></Redirect>
                }
            </React.Fragment>
        )
    }
}