import React from 'react';
import  dibble from '../../../assets/Dribbble.png'
import  behance from '../../../assets/Group 18.png'
import  instagram from '../../../assets/Instagram.png'
import  github from '../../../assets/Github.png'
import  stackOverflow from '../../../assets/Stackoverflow.png'

const Sponsor = () => {
    return (
        <div className=' grid grid-cols-5 gap-[108px] bg-[#FFFFFF] px-[300px] py-[114px]'>
            <img src={dibble} alt="" className='w-[137px] h-[33px]' />
            <img src={behance} alt="" className='w-[137px] h-[33px]' />
            <img src={instagram} alt="" className='w-[137px] h-[33px]' />
            <img src={github} alt="" className='w-[137px] h-[33px]' />
            <img src={stackOverflow} alt="" className='w-[137px] h-[33px]' />
            
        </div>
    );
};

export default Sponsor;