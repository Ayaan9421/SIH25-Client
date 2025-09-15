import './App.css';

import React,{ useState,useEffect } from "react";
import Maincontent from './Maincontent';
import Sidebar from './Sidebar';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Riskalerts from './Riskalerts.jsx';
import Pagenotfound from './Pagenotfound.jsx';
import Home from "./Home.jsx";
import Monitoring from './Monitoring.jsx';
import Tools from './Tools.jsx';
import SplashScreen from './Splashscreen.jsx';
import Login from './auth/login/Login.jsx';
import Register from './auth/register/Register.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Analytics from './analyticsAndTools/Analytics.jsx';
import Farms from './Farms.jsx';

function MainLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: "rgb(223, 223, 223)",width:"100%"}}>
      <Sidebar />
      <Maincontent>
        <Outlet />
      </Maincontent>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:"/",element:<Login/>,
  },
  {
    path:"/register",element:<Register/>,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/risks',
        element: <Riskalerts />,
      },
      {
        path: '*',
        element: <Pagenotfound />,
      },
      {
        path: '/farms',
        element: <Farms/>,
      },
      {
        path: 'reports',
        element: <Tools type="Reports"/>,
      },
      {
        path:"/crophealth",
        element:<Monitoring type="crop health"/>
      },
      {
        path:"/soilcondition",
        element:<Monitoring type="soil condition"/>
      },
      {
        path:"/pestdetection",
        element:<Monitoring type="pest detection"/>
      },
      {
        path:"/weatherdata",
        element:<Monitoring type="weather data"/>
      },
      {
        path:"/analytics",
        element:<Analytics/>
      },
      {
        path:"/spectralimaging",
        element:<Tools type="Spectral Imaging"/>
      },
      {
        path:"/settings",
        element:<Tools type="Settings"/>
      }
    ],
  },
]);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      {showSplash ? <SplashScreen/> : <RouterProvider router={router} />}
    </AuthProvider>
  )
}


