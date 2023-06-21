import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Accordion from '../../../Components/Accrodian';
import arrowIcon from '../../../assets/Icon.png';
import circle from '../../../assets/Group 42.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='flex gap-[83px]  w-[1371px] h-[755px] mx-auto px-5 mt-[140px]'>
            <div
            data-aos="fade-up-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className='w-[721px] h-[708px]'>
                <div>
                    <div className="flex items-center gap-[10px] mt-[27px] text-[#EB5757]">
                        <div className='w-[69px]'>
                            <hr className="border-2 border-[#EB5757] mr-2 flex-grow " />
                        </div>
                        <p className="font-semibold">Features</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-[54px] leading-[74px] mb-10'>Solve your business problems with our experts</h2>
                    </div>
                    <div>
                        <Accordion />
                    </div>
                    <div className='flex items-center w-[213px] h-[66px] py-[20px] px-[36px] mt-[50px] bg-[#495AF0]'>
                        <button className='text-[18px]'>More About Us</button>
                        <img className='text-black' src={arrowIcon} alt="" />
                    </div>
                </div>
            </div>
            <div
            data-aos="fade-up-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            
            className='w-[609px] h-[755px]'>
                <p className='font-normal text-[20px] mb-[38px]'>Business consultants provide management consulting to help businesses and organizations improve performance and efficiency.</p>
                <div className='relative z-10 w-[517px] h-[562px] bg-no-repeat bg-cover'>

                    <img src="https://i.ibb.co/ggLQ83d/Image1.png" alt="" />
                    <div className='absolute left-[-42px] bottom-[-33px] w-[215px] h-[226px] bg-white'>
                        <div className='px-[28px] pt-[26px]'>
                            <h4 className='font-semibold'>Our Project Success</h4>
                            <p className='text-[8px] font-normal'>Work with CP consultants to plan for the future of your business</p>
                            <p className='flex items-center gap-[4px] text-[#FD9C06]'>
                                <span>Free Consultation</span>
                                <AiOutlineArrowRight />
                            </p>
                        </div>
                        <div className='h-[107px] w-[107px] p-5'>
                            <img className='ml-[89px]' src={circle} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className='absolute ml-[300px] h-[294px] w-[294px] bg-[#C3CAFF]' style={{ borderRadius: '0px 147px 147px 147px', transform: 'rotate(-180deg)' }}>

                </div> */}
            </div>
        </div>
    );
};

export default Features;
