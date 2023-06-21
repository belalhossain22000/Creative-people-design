import React, { useEffect } from 'react';
import coFounder from '.././../../assets/Portrait image.png'
import arrowIcon from '../../../assets/Icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Client = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='mt-[130px] relative w-[1920px] h-[866px] mx-auto '>
            <div className=' w-full h-[561px] bg-[#FFF5DA]'>
                <div className='flex justify-between items-center  mx-[300px]'>
                    <h1 className='font-bold mt-[100px] mb-[62px] text-[54px] leading-[62px]'>Our Client Says Their <br /> Satisfaction</h1>
                    <div className='flex items-center w-[213px] h-[66px] py-[20px] px-[36px] mt-[50px] bg-[#495AF0]'>
                        <button className='text-[18px]'>More About Us</button>
                        <img className='text-black' src={arrowIcon} alt="" />
                    </div>
                </div>


            </div>
            <div className='flex ml-[300px] mr-[299px] gap-[94px] absolute top-[284px] w-[1369px] h-[582px] bg-white mx-auto'>
                <div
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"

                    className="w-[541px] h-[539px]">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/KV4kNMxx7SY"
                        title="YouTube Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>


                <div
                    data-aos="zoom-out-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="200"
                    className='w-[641px] h-[459px] mt-[120px]'>
                    <p>Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal.</p>
                    <div className='flex mt-[63px] gap-[18px] items-center]'>
                        <img className='h-[74px] w-[74px]' src={coFounder} alt="" />
                        <div>
                            <h4 className='font-bold text-[24px]'>Justin L. Garcia</h4>
                            <p className='font-medium'>Co-founder</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Client;