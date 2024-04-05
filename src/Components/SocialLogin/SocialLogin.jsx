import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='p-8'>
            <div className="divider"></div> 
            <button className="btn">
               <FaGoogle></FaGoogle>
               Button
            </button>
        </div>
    );
};

export default SocialLogin;