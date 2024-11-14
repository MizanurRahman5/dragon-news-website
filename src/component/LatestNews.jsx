import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center text-xl gap-2 p-3 bg-slate-300'>
            <p className='bg-red-700 p-2 text-white'>Latest</p>
            <Marquee pauseOnHover={true}>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, error!</Link>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, error!</Link>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, error!</Link>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, error!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;