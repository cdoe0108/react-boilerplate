import asyncComponent from './async_components';

const ROUTES = [ 
    {
        exact: true,
        path: '/',
        component: asyncComponent(() => import('./home/Home')),
    },
    {
        exact: true,
        path: '/home',
        component: asyncComponent(() => import('./home/Home')),
    },
    {
        exact: true,
        path: '/details',
        component: asyncComponent(() => import('./detail/Detail')),
    },
    {
        exact: true,
        path: '/form',
        component: asyncComponent(() => import('./form/Form')),
    }
];

export default ROUTES;