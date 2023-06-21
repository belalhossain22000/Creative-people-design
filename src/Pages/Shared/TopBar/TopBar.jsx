import React from 'react';
import twitter from '../../../assets/Twitter.png';
import google from '../../../assets/Google.png';
import linkedIn from '../../../assets/Linkedin.png';
import pnterest from '../../../assets/Pnterest.png';
// import { FaMessage } from 'react-icons/fa';
import calling from '../../../assets/Calling.png';
import message from '../../../assets/Message.png';

const TopBar = () => {
    return (
        <div className='bg-[#0F0F0F]  w-full  md:w-[1920px] h-[60px] flex justify-between  md:px-[300px]'>
            <div className='flex items-center gap-5 p-5'>
                <img className=' text-white h-5 w-5' src={twitter} alt="" />
                <img className=' text-white h-5 w-5' src={linkedIn} alt="" />
                <img className=' text-white h-5 w-5' src={google} alt="" />
                <img className=' text-white h-5 w-5 mt-1' src={pnterest} alt="" />

            </div>
            <div className='text-white flex items-center gap-[18px] p-5'>
                <div className='flex items-center gap-[12px]'>
                    <img src={message} alt="" />
                    <p> info.pix@gmail.com</p>
                </div>
                <div className='flex items-center gap-[12px]'>
                    <img src={calling} alt="" />

                    <p>call: (209) 555-0104</p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;