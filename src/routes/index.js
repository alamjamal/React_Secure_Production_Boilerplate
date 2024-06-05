import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

import { useSelector } from 'react-redux';

// ==============================|| ROUTING RENDER ||============================== //



// import { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const routesToMatch = [

//   {path: 'login' },
 
//   {path: '/' },

//   {path: 'register'},
  
//   {path: 'activateaccount/:token'},
//   // ... add more paths
// ];

// const routesToMatch2 = [
//   { path: '/dashboards/default' },
//   { path: '/dashboards/special' },
//   // ... add more paths
// ];

export default function ThemeRoutes() {

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // console.log(LoginRoutes.children,MainRoutes.children,"LoginRoutes");
//     const isRouteMatched =  routesToMatch.some(route => route.path === location.pathname);
//     const isRouteMatched2 = MainRoutes.children.some(route => route.path === location.pathname);
//     console.log(isRouteMatched,isRouteMatched2,"isRouteMatched")
// console.log(LoginRoutes,MainRoutes,"LoginRoutes");

//     if (!isRouteMatched) {
//       // Redirect to login page
//       navigate('/login');
//     }else if(!isRouteMatched2){
//       navigate('/dashboards/default')
//     }else{
//       navigate('/');
//     }

//   }, [location.pathname, navigate]);





  // const currentUser="login"

  const { loginDetail, isLoading, token, isAuthenticated } = useSelector((state) => state.auth);


  let routsData=''

  if (!isAuthenticated){
    routsData=LoginRoutes
  }
  else{
    routsData=MainRoutes
    // routsData=LoginRoutes
  }

  
  return useRoutes(routsData);
}
