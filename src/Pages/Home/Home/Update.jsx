import React, { useEffect } from 'react';
import image1 from '../../../assets/Image (1).png';
import image2 from '../../../assets/Image (2).png';
import image3 from '../../../assets/Image (3).png';
import { BiComment } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillEyeInvisible, AiOutlineArrowRight } from 'react-icons/ai';


const Update = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
            className='w-[1323px] h-[682px] mx-auto mt-[87px]'>
            <h1 className='text-center font-bold text-[54px] mb-[60px]'>Regular Get Update </h1>
            <div className='grid grid-cols-3 gap-[30px]'>
                <div className='relative w-[421px] h-[560px]'>
                    <img className='w-[420px] h-[314px]' src={image1} alt="" />
                    <div className='mt-[28px] flex justify-between items-center'>
                        <p className='font-normal text-lg text-[#858585]'>consultant</p>
                        <div className='flex items-center gap-[38px]'>
                            <p className='flex items-center font-normal text-lg text-[#858585] gap-[8px]'><BiComment /> <span>25</span></p>
                            <p className='flex items-center font-normal text-lg text-[#858585] gap-[8px]'><AiFillEyeInvisible /> <span>32k</span></p>

                        </div>
                    </div>
                    <hr className=' mt-[27px] w-[420px] border-[1px] border-[#E2E2E2]' />
                    <div className=''>
                        <h1 className='mt-[14px] font-semibold text-[24px] text-[#0F0F0F]'>What is a business consultant?</h1>
                        <p className='mb-[16px] mt-[10px] font-normal text-[18px] text-[#404040]'>A business consultant is a professional with a wide array of skills who assists business owners </p>
                        <p className='flex items-center gap-[2px] text-[#404040] font-semibold  text-[18px]'>Read More <span><AiOutlineArrowRight /></span></p>
                    </div>
                    <div className='bg-white absolute top-[18px] left-[18px] p-[14px] '>
                        {new Date("2021-12-02").toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        })}
                    </div>



                </div>
                <div className='relative w-[421px] h-[560px]'>
                    <img className='w-[420px] h-[314px]' src={image2} alt="" />
                    <div className='mt-[28px] flex justify-between items-center'>
                        <p className='font-normal text-lg text-[#858585]'>consultant</p>
                        <div className='flex items-center gap-[38px]'>
                            <p className='flex items-center font-normal text-lg text-[#858585] gap-[8px]'><BiComment /> <span>25</span></p>
                            <p className='flex items-center font-normal text-lg text-[#858585] gap-[8px]'><AiFillEyeInvisible /> <span>32k</span></p>

                        </div>
                    </div>
                    <hr className=' mt-[27px] w-[420px] border-[1px] border-[#E2E2E2]' />
                    <div className=''>
                        <h1 className='mt-[14px] font-semibold text-[24px] text-[#0F0F0F]'>What is a business consultant?</h1>
                        <p className='mb-[16px] mt-[10px] font-normal text-[18px] text-[#404040]'>A business consultant is a professional with a wide array of skills who assists business owners </p>
                        <p className='flex items-center gap-[2px] text-[#404040] font-semibold  text-[18px]'>Read More <span><AiOutlineArrowRight /></span></p>
                    </div>
                    <div className='bg-white absolute top-[18px] left-[18px] p-[14px] '>
                        {new Date("2021-12-02").toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        })}
                    </div>



                </div>
                <div className='relative w-[421px] h-[560px]'>
                    <img className='w-[420px] h-[314px]' src={image3} alt="" />
                    <div className='mt-[28px] flex justify-between items-center'>
                        <p className='font-normal text-lg text-[#858585]'>consultant</p>
                        <div className='flex items-center gap-[38px]'>
                            <p className='flex items-center font-normal text-lg text-[#858585] gap-[8px]'><BiComment /> <span>25</span></p>
                            <p className='flex items-center font-normal text-lg text-[#858585] gap-[8px]'><AiFillEyeInvisible /> <span>32k</span></p>

                        </div>
                    </div>
                    <hr className=' mt-[27px] w-[420px] border-[1px] border-[#E2E2E2]' />
                    <div className=''>
                        <h1 className='mt-[14px] font-semibold text-[24px] text-[#0F0F0F]'>What is a business consultant?</h1>
                        <p className='mb-[16px] mt-[10px] font-normal text-[18px] text-[#404040]'>A business consultant is a professional with a wide array of skills who assists business owners </p>
                        <p className='flex items-center gap-[2px] text-[#404040] font-semibold  text-[18px]'>Read More <span><AiOutlineArrowRight /></span></p>
                    </div>
                    <div className='bg-white absolute top-[18px] left-[18px] p-[14px] '>
                        {new Date("2021-12-02").toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        })}
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Update;