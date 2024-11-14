import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col py-3 items-center justify-center'>
            <div>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h3 className='text-gray-400'>journalism without fear on favour</h3>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;