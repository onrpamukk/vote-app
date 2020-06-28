import { IROUTE } from './interfaces';

import { NotFoundPage } from '../pages/NotFoundPage';
import { InitPage } from '../pages/InitPage';
import { HomePage } from '../pages/MainLayout/Home/HomePage';




export const routesTree: IROUTE[] = [
    {
        path: '/',
        component: InitPage,
        exact: true
    },
    {
        path:'/',
        component:HomePage,
        routes:[
            {
                path: '*',
                exact: true,
                component: NotFoundPage
            }
        ]
    }
];