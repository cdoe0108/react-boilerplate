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
    }
];

export default ROUTES;