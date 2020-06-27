/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { routesTree } from './data';
import { RouteAndSubRoutes } from "./Route-Subroute.component";
import { IROUTE } from "./interfaces";

var routeHistory: any = {};

/* ----------- * - * ----------- */
export const initializeRouteFNC = () => {
    return routesTree.map((route, i) => <RouteAndSubRoutes key={i} {...route} />);
};
export const setRouteHistoryFNC = (history: any) => {
    routeHistory = history;
};
/* ----------- * - * ----------- */

const navigateTo = (route: any[]) => {
    routeHistory.push('/' + route.toString().replace(/,/g, '/'));
};

const gotoBack = () => {
    routeHistory.goBack();
};


const getRouteParamsByProps = (props: any) => {
    return props.match.params;
};

export const RouteService = {
    navigateTo,
    navigateToBack: gotoBack,
    getRouteParamsByProps
};
