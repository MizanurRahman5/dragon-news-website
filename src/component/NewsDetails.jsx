import React from 'react';
import RightNavbar from './RightNavbar';
import Header from './Header';

const NewsDetails = () => {
    return (
       <div>
        <header>
            <Header/>
        </header>
         <div className='container mx-auto grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
                <h2 className='text-xl font-semibold'>Dragon news</h2>
            </section>
            <aside className='col-span-3'>
                <RightNavbar/>
            </aside>
        </div>
       </div>
    );
};

export default NewsDetails;