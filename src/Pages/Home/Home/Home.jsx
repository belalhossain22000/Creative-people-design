import React from 'react';
import HeroSection from './HeroSection';
import Sponsor from './Sponsor';
import AboutUsSection from './AboutUsSection';
import Features from './Features';
import Servicess from './Servicess';
import OurTeam from './OurTeam';
import Client from './Client';
import Update from './Update';

const Home = () => {
    return (
        <div className='w-[1920px] mx-auto'>
            <HeroSection></HeroSection>
            <Sponsor></Sponsor>
           <AboutUsSection></AboutUsSection>
           <Features/>
           <Servicess></Servicess>
           <OurTeam></OurTeam>
           <Client/>
           <Update/>
        </div>
    );
};

export default Home;