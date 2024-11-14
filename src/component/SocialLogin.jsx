import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <div className='font-bold text-2xl mb-3'>Login with</div>
            <div className='flex flex-col gap-2'>
                <button className='btn'><FaGoogle /> Log in with google</button>
                <button className='btn'><FaGithub />Log in with github</button>
            </div>
        </div>
    );
};

export default SocialLogin;