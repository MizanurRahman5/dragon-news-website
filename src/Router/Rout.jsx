import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from '../Layout/Main';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../component/AuthLayout';
import Login from '../component/Login';
import Register from '../component/Register';
import NewsDetails from '../component/NewsDetails';

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
        path: '/news/:id',
        element: <NewsDetails/>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>
            },
            {
                path:'/auth/register',
                element:<Register/>
            }
        ]
    },
    {
        path: '*',
        element: <div>error</div>
    }
]);

export default router;
