import React, { useEffect } from 'react';
import image from '../../../assets/Image.png';
import playBtn from '../../../assets/Play icon.png';
import rs from '../../../assets/Group 1000005147.png';
import arrowIcon from '../../../assets/Icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUsSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='flex gap-[90px] '>
            <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            
            className='bg-[#FFF5DA]  relative w-[988px] h-[685px]'>
                <div className='mt-[90px]  ml-[300px] mb-[35px] flex items-center gap-[30px]'>
                    <img src={playBtn} alt="" />
                    <h5 className='text-[#404040] font-semibold '>More <br /> About CP .</h5>
                </div>
                <img className='w-[688px] absolute bottom-0 right-0 h-[476px] mt-16 mb-[-1px]' src={image} alt="" />
            </div>

            {/* right side */}

            <div 
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            className=' w-[542px] h-[630px]  '>
                <div className="flex items-center gap-[10px] mt-[27px] text-[#EB5757] ">
                    <div className='w-[69px]'>
                        <hr className="border-2 border-[#EB5757] mr-2 flex-grow " />
                    </div>
                    <p className="font-semibold">About Us</p>
                </div>


                <div className=' mb-[60px]'>
                    <h2 className='mb-5 text-[ #0F0F0F] font-bold text-[54px] leading-[62px]'>We are aware for our quality to successful business</h2>
                    <p className='font-normal text-xl mb-[50px]'>Learn how to start your own business consulting firm. Effective strategies for business consultants and things to consider before becoming a consultant</p>
                    <div className='flex items-center w-[213px] h-[66px] py-[20px] px-[36px] mt-[40px] bg-[#495AF0]'>
                        <button className='text-[18px]'> More About Us</button>
                        <img className='text-black' src={arrowIcon} alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-[46px]'>
                    <div >
                        <h3 className='mb-[10px] leading-[103%] text-[#FD9C06] font-bold text-[40px]'>2760 +</h3>
                        <p className='text-[#404040]  font-semibold text-[18px]'>Total Coustiomer</p>
                    </div>
                    <div >
                        <h3 className='mb-[10px] leading-[103%] text-[#FD9C06] font-bold text-[40px]'>25+</h3>
                        <p className='text-[#404040]  font-semibold text-[18px]'>Years Experience</p>
                    </div>
                    <div>
                        <h3 className='mb-[10px] leading-[103%] text-[#FD9C06] font-bold text-[40px]'>328 +</h3>
                        <p className='text-[#404040]  font-semibold text-[18px]'>Team Members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;