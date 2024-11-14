import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navbare from '../component/Navbare';
import LeftNavbar from '../component/LeftNavbar';
import RightNavbar from '../component/RightNavbar';

const Main = () => {
    return (
        <div>
           <header>
            <Header/>
            <section className='container mx-auto'>
                <LatestNews/>
            </section>
           </header>
           <nav className='container mx-auto'>
           <Navbare/>
           </nav>
           <main className='container mx-auto grid md:grid-cols-12'>
            <aside className='col-span-3'>
            <LeftNavbar/>
            </aside>
            <section className='col-span-6'>
                <Outlet/>
            </section>
            <aside className='col-span-3'>
                <RightNavbar/>
            </aside>
           </main>
            
        </div>
    );
};

export default Main;