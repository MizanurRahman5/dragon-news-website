import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbare from './Navbare';

const AuthLayout = () => {
    return (
        <div>
            <header className='container mx-auto'>
                <Navbare/>
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;