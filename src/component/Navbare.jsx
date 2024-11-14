import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbare = () => {
    return (
        <div className='flex justify-between py-3 items-center'>
            <div className=""></div>
            <div className='flex gap-2 text-gray-400 text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Carrier</Link>
            </div>
            <div className="flex gap-2 items-center">
            <img src={userIcon} alt="" />
            <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbare;