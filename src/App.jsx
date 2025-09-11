import './App.css';

import { useState,useEffect } from "react";
import Maincontent from './Maincontent';
import Sidebar from './Sidebar';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Riskalerts from './Riskalerts.jsx';
import Pagenotfound from './Pagenotfound.jsx';
import Home from "./Home.jsx";
import Monitoring from './Monitoring.jsx';
import Tools from './Tools.jsx';
import SplashScreen from './Splashscreen.jsx';

function MainLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: "rgb(223, 223, 223)"}}>
      <Sidebar />
      <Maincontent>
        <Outlet />
      </Maincontent>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
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
        element: <Tools type="Farms"/>,
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
        element:<Tools type="Analytics"/>
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

  return showSplash ? <SplashScreen /> : <RouterProvider router={router} />;
}


