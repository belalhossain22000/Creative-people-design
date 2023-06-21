import React, { useEffect } from 'react';
import person1 from '../../../assets/Ellipse 1025.png';
import person2 from '../../../assets/Ellipse 1026.png';
import person3 from '../../../assets/Ellipse 1027.png';
import person4 from '../../../assets/Ellipse 1028.png';
import MainPerson from '../../../assets/_Portrait Image.png';
import sign from '../../../assets/Group 1000006985.png';
import star from '../../../assets/Frame.png';
import arrowIcon from '../../../assets/Icon.png';
import chart from '../../../assets/Group 1000007000.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='md:flex bg-[#F4F9FF]'>
            <div className='md:w-1/2  md:ml-[298px] '
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <div className=''>
                    <h2 className='text-[90px] m-[0px]  font-bold leading-[86px] tracking[-0.02] pt-[82px] '><span className='text-[#FBB344]'>Hire consultant </span> for boost your  business</h2>
                    <p className='mt-[20px] text-[20px] leading-[40px] '><small>Consultancy firm established by professionals with the intention <br /> to identify and unlock potential avenues for innovative ideas</small></p>
                    <div className='flex items-center w-[213px] h-[66px] py-[20px] px-[36px] mt-[40px] bg-[#495AF0]'>
                        <button className='text-[18px]'>Discover More</button>
                        <img className='text-black' src={arrowIcon} alt="" />
                    </div>

                </div>
                <div className='pb-[134px] mt-[53px] flex items-center gap-[26px]'>
                    <div className='flex space-x-[-25px]'>
                        <img src={person1} alt="" className='h-[66px] w-[66px]' />
                        <img src={person2} alt="" className='h-[66px] w-[66px]' />
                        <img src={person3} alt="" className='h-[66px] w-[66px]' />
                        <img src={person4} alt="" className='h-[66px] w-[66px]' />
                    </div>
                    <div >
                        <div className='flex items-center'>
                            <h4> <span className='text-[#FD9C06] text-[26px] font-bold '>4.9 </span> <span className='text-[26px] font-bold text-[#4D516F]'>|</span>  </h4>
                            <div className='flex'>
                                <img src={star} alt="star" className='h-[19px] w-[19px]' />
                                <img src={star} alt="star" className='h-[19px] w-[19px]' />
                                <img src={star} alt="star" className='h-[19px] w-[19px]' />
                                <img src={star} alt="star" className='h-[19px] w-[19px]' />
                                <img src={star} alt="star" className='h-[19px] w-[19px]' />
                            </div>
                        </div>
                        <h3 className='font-medium text-[18px] text-[#404040]'>325k Total Review</h3>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="mt-[41px] z-10  relative  w-[743px] h-661px[]  mr-[235px] bg-[url(https://i.ibb.co/0Kpnvj1/Group-1000006983.png)] bg-no-repeat ">
                <img className='absolute  bottom-[139px] left-[-40px]' src={MainPerson} alt="" />
                <div className='bg-white w-[274px] flex items-center p-[20px] gap-[20px] rounded-md h-[130px] absolute top-[40px] left-[353px]  '>
                    <img className='h-[71px] w-[71px] ' src={sign} alt="" />
                    <div>
                        <p className='font-bold text-[30px] text-[#0F0F0F] '>200k</p>
                        <p className='text-[#404040] font-medium text-[18px] '>Project Done</p>
                    </div>
                </div>
                <div className='px-[27px] py-[18px] bg-white rounded-md h-[208px] w-[300px] absolute bottom-[100px] left-[-100px]'>
                    <p className='text-[#FD9C06] font-bold text-[18px]'>+90.1%</p>
                    <p><small className='font-medium text-[12px]'>Last 7 days Business Growth</small></p>

                    {/* TODO MAKE CHART DYNAMIC */}

                    <img src={chart} alt="" />
                    <div className='bg-[#F3F8FE] h-[12px] w-[187px]'>
                        <p className='text-[#404040] text-[10px] font-semibold '>75.24% increase frome last week</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HeroSection;