import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from '../Layout/Main';
import CategoryNews from '../Pages/CategoryNews';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'} />
            },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader: ({ params }) => 
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <div>news Layout</div>
    },
    {
        path: '/login',
        element: <div>login layout</div>
    },
    {
        path: '*',
        element: <div>error</div>
    }
]);

export default router;
