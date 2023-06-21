import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../../../assets/Image-3.png";
import image2 from "../../../assets/Image-4.png";
import image3 from "../../../assets/Team Member-2.png";

//icon
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa';


// import required modules
import { Pagination } from "swiper";

const OurTeam = () => {
    const [hoveredSlide, setHoveredSlide] = useState(null);
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

            className="mt-12 h-708">
            <div className="text-center mb-16">
                <h6 className="text-red-500 font-semibold">Our Team</h6>
                <h3 className="font-bold text-5xl">Meet with Expert</h3>
            </div>
            <div className="h-550">
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Pagination]}
                    className="mySwiper"
                    onSlideChange={(swiper) => setHoveredSlide(swiper.realIndex)}
                    onSwiper={(swiper) => setHoveredSlide(swiper.realIndex)}
                >

                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 0 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image2} alt="" />
                            {hoveredSlide === 0 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-0</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 1 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image2} alt="" />
                            {hoveredSlide === 1 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-1</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 2 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image3} alt="" />
                            {hoveredSlide === 2 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-2</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 3 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image3} alt="" />
                            {hoveredSlide === 3 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-3</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 4 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image3} alt="" />
                            {hoveredSlide === 4 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-4</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 5 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image3} alt="" />
                            {hoveredSlide === 5 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-5</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 6 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image3} alt="" />
                            {hoveredSlide === 6 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-6</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 7 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image3} alt="" />
                            {hoveredSlide === 7 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-7</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`image-container ${hoveredSlide === 8 ? "hovered" : ""
                                }`}
                        >
                            <img className="w-470 h-550" src={image3} alt="" />
                            {hoveredSlide === 8 && (
                                <div className="flex justify-between items-center image-overlay absolute bottom-[0px] w-[470px] p-[30px] h-[124] bg-white  ">
                                    <div>
                                        <h4 className="font-semibold text-[26px]">Person-8</h4>
                                        <p className="font-normal">Additional information</p>
                                    </div>
                                    <div className="flex gap-[14px]">
                                        <AiOutlineTwitter className="bg-[#50D0F9] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaLinkedinIn className="bg-[#3F51F6] text-white p-[12px] rounded-full h-[42px] w-[42px]" />
                                        <FaPinterestP className="bg-[#EF2121] text-white p-[12px] rounded-full h-[42px] w-[42px]" />

                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};

export default OurTeam;
