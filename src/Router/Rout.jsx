import React from 'react';

import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Layout/Main';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
        path:'/news',
        element:<div>news Layout</div>
    },
    {
        path:'/login',
        element:<div>login layout</div>
    },
    {
        path:'*',
        errorElement:<div>page not found</div>
    },

  ]);

  export default router;

