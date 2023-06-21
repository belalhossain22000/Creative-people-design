import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import icon1 from '../../../assets/Icon (1).png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicess = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='flex gap-[250px] w-[1618px] h-[804px]   mt-[120px] mx-auto'>
            <div
                data-aos="fade-down-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-offset="200"
                className=' w-[418px] h-[460px] pt-[10px] ml-[140px] ' >
                <div className="flex items-center gap-[10px] mt-[27px] text-[#EB5757]">
                    <div className='w-[69px]'>
                        <hr className="border-2 border-[#EB5757] mr-2 flex-grow " />
                    </div>
                    <p className="font-semibold">Our Services</p>
                </div>
                <h1 className='font-bold text-[50px] leading-[62px]'>Providing all Console Solution</h1>
                <p className='font-normal text-xl'>Business consultants provide management consulting to help businesses organizations improve performance and efficienc</p>
                <div className='flex items-center gap-10'>
                    <div>
                        <h2 className=' mb-[10px] font-bold text-[50px] text-[#FD9C06]'>98%</h2>
                        <p className='font-bold text-[18px]'>Satisfaction rate</p>
                    </div>
                    <div className='h-[70px]  border-[1px] border-gray-400 border-dashed'>

                    </div>
                    <div >
                        <h2 className=' mb-[10px] font-bold text-[50px] text-[#FD9C06]'>25M</h2>
                        <p className='font-bold text-[18px]'>Registered users</p>
                    </div>


                </div>
            </div>
            <div
             data-aos="fade-down-left"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-offset="200"
            className='relative w-[951px] h-[804px] bg-[#F4F9FF]'>
                <div className='absolute left-[-150px] grid grid-cols-2 my-[90px] gap-[30px]  '>
                    <div className=' w-[398px] h-[297px] bg-white px-[30px] py-[45px]'>

                        <img className='w-[73px] h-[71px]' src={icon1} alt="" />
                        <h1 className='font-semibold text-[26px]'>Business Analysis</h1>
                        <p><small className='font-normal text-[#404040]'>Business analysis is a professional discipline of identifying business needs determining</small></p>
                        <p className='flex items-center gap-[8px] font-semibold text-[18px]'>Read More <span><AiOutlineArrowRight /></span></p>


                    </div>
                    <div className='w-[398px] h-[297px] bg-white px-[30px] py-[45px]'>

                        <img className='w-[73px] h-[71px]' src={icon1} alt="" />
                        <h1 className='font-semibold text-[26px]'>Business Analysis</h1>
                        <p><small className='font-normal text-[#404040]'>Business analysis is a professional discipline of identifying business needs determining</small></p>
                        <p className='flex items-center gap-[8px] font-semibold text-[18px]'>Read More <span><AiOutlineArrowRight /></span></p>


                    </div>
                    <div className='w-[398px] h-[297px] bg-white px-[30px] py-[45px]'>

                        <img className='w-[73px] h-[71px]' src={icon1} alt="" />
                        <h1 className='font-semibold text-[26px]'>Business Analysis</h1>
                        <p><small className='font-normal text-[#404040]'>Business analysis is a professional discipline of identifying business needs determining</small></p>
                        <p className='flex items-center gap-[8px] font-semibold text-[18px]'>Read More <span><AiOutlineArrowRight /></span></p>


                    </div>
                    <div className='w-[398px] h-[297px] bg-white px-[30px] py-[45px]'>

                        <img className='w-[73px] h-[71px]' src={icon1} alt="" />
                        <h1 className='font-semibold text-[26px]'>Business Analysis</h1>
                        <p><small className='font-normal text-[#404040]'>Business analysis is a professional discipline of identifying business needs determining</small></p>
                        <p className='flex items-center gap-[8px] font-semibold text-[18px]'>Read More <span><AiOutlineArrowRight /></span></p>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Servicess;