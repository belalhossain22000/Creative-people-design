import React from 'react';
import image from '../../../assets/Image.png';
import playBtn from '../../../assets/Play Button.png';
import rs from '../../../assets/Group 1000005147.png';

const AboutUsSection = () => {
    return (
        <div className='flex gap-[90px] '>
            <div className='bg-[#FFF5DA] pl-[300px] relative'>
                <div>
                    <img src={playBtn} alt="" />
                </div>
                <img className='w-[688px] h-[476px] mt-16 mb-[-1px]' src={image} alt="" />
            </div>
            <div className=' pr-[300px]'>
                <img src={rs} alt="" />
            </div>
        </div>
    );
};

export default AboutUsSection;