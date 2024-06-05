import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const AuthActivateYourAccount = Loadable(lazy(() => import('pages/authentication/ActivateYouAccount')));


const Status404 = Loadable(lazy(() => import('pages/extra-pages/404')));



// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = [
  {
    path: '/',
    element: <MinimalLayout />,
    children: [
      {
        path: 'login',
        element: <AuthLogin />
      },
      {
        path: '/',
        element: <AuthLogin />
      },
      {
        path: 'register',
        element: <AuthRegister />
      },
      {
        path: 'activateaccount/:token',
        element: <AuthActivateYourAccount />
      },
    ]
  },
  {
    path: '*',
    element: <Status404 />
  }
]

export default LoginRoutes;
