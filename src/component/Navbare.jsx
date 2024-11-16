import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbare = () => {
    const {user, logout} = useContext(AuthContext)
    return (
        <div className='flex justify-between py-3 items-center'>
            <div className="">{user && user.email}</div>
            <div className='flex gap-2 text-gray-400 text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Carrier</Link>
            </div>
            <div className="flex gap-2 items-center">
            <img src={userIcon} alt="" />
            <div>
                {
                    user? <button onClick={logout} className="btn btn-neutral rounded-none">Log-out</button> : <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }
            </div>
           
            </div>
        </div>
    );
};

export default Navbare;