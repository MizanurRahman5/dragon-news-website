import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navbare from '../component/Navbare';
import LeftNavbar from '../component/LeftNavbar';

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
            <section className='col-span-6'>Main content</section>
            <aside className='col-span-3'>right navbar</aside>
           </main>
            <Outlet/>
        </div>
    );
};

export default Main;