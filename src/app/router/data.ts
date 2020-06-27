import { IROUTE } from './interfaces';

import { NotFoundPage } from '../pages/NotFoundPage';
import { NewVote } from '../pages/MainLayout/Home/Votes/NewVote';
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
                path: '/new-vote',
                component: NewVote
            },
            {
                path: '*',
                exact: true,
                component: NotFoundPage
            }
        ]
    }
];