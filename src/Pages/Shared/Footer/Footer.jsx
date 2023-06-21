import React from 'react';
import logo from '../../../assets/Logo.png'
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black w-[1920px] h-[745px] mt-[190px]'>

            <div className='w-[1321px] mx-auto text-white pt-[57px] pb-[47px] '>
                <div className='flex  justify-between items-center'>
                    <div className=''>
                        <h1 className='font-bold text-[38px]'>Subscribe Our Newsletter</h1>
                        <p className='font-normal text-[18px] leading-[32px] '>Enter your details to get business inspiration, trending <br /> solutions, and consulting tips delivered to your inbox</p>
                    </div>
                    <div className="flex w-[555px] h-[71px]">
                        <input
                            type="text"
                            placeholder='Enter Your Email'
                            className="w-[393px] pl-[30px] border border-gray-300  focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button
                            type="button"
                            className="px-4 w-[162px] py-2 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Subscribe
                        </button>
                    </div>

                </div>
                <hr className='w-[1320px] my-[30px]  border-2 border-[ #1F2B2B]' />
                <div className='grid grid-cols-4 gap-[134px] '>
                    <div className=''>
                        <img className='mb-[26px] w-[208px] h-[52px]' src={logo} alt="" />
                        <p className='mb-[40px] text-[#B4B4B4] text-[18px] font-normal leading-[32px]'>Business consultants provide management consulting to help businesses and organizations improve performance .</p>
                        <div className='flex gap-[28px]'>
                            <AiOutlineTwitter className='h-[48px] w-[48px] p-[14px] border-[1px] border-gray-400 rounded-full  ' />
                            <FaLinkedinIn className='h-[48px] w-[48px] p-[14px] border-[1px] border-gray-400 rounded-full  ' />
                            <FaPinterestP className='h-[48px] w-[48px] p-[14px] border-[1px] border-gray-400 rounded-full  ' />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-[30px]  '>
                        <h1 className=' text-[24px] font-semibold'>Company</h1>
                        <div className='flex flex-col space-y-[30px]'>
                            <p className='text-[18px] font-normal leading-[22px] '>About</p>
                            <p className='text-[18px] font-normal leading-[22px] '>Contact</p>
                            <p className='text-[18px] font-normal leading-[22px] '>FAQ'S</p>
                            <p className='text-[18px] font-normal leading-[22px] '>Services</p>
                            <p className='text-[18px] font-normal leading-[22px] '>Latest Post's</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-[30px]  '>
                        <h1 className='font-bold text-[24px] '>Our Services</h1>
                        <div className='flex flex-col space-y-[30px]'>
                            <p className='text-[18px] font-normal leading-[22px] '>Business planning</p>
                            <p className='text-[18px] font-normal leading-[22px] '> Tax strategy</p>
                            <p className='text-[18px] font-normal leading-[22px] '>Financial advices</p>
                            <p className='text-[18px] font-normal leading-[22px] '>  Insurance strategy</p>
                            <p className='text-[18px] font-normal leading-[22px] '> Manage investment</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-[30px]  '>
                        <h1 className='font-bold text-[24px] '>Contact Info</h1>
                        <div className='flex flex-col space-y-[30px]'>
                            <p className='text-[18px] font-normal leading-[22px] '>(303) 555-0105</p>
                            <p className='text-[18px] font-normal leading-[22px] '>(303) 555-0105</p>
                            <p className='text-[18px] font-normal leading-[22px] '>sara.cruz@example.com</p>
                            <p className='text-[18px] font-normal leading-[22px] '>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-[30px] mt-[60px] bg-[#7A7A7A]' >
                    <p className='text-white'>© 2022 CreativePeoples. All Rights Reserved</p>
                    <p className='flex gap-5 underline'><span>Privacy Policy</span>     <span>Cookie Policy</span></p>

                </div>

            </div>
        </div>
    );
};

export default Footer;