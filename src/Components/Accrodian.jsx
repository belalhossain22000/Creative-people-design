import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveIndex(index);
    };


    return (
        <div className='flex flex-col gap-5'>
            <div className="collapse collapse-plus bg-base-200 border-2 border-gray-200 rounded-none">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-[24px] font-semibold">
                    Investing in Digital Company
                </div>
                <div className="collapse-content">
                    <p>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 border-2 border-gray-200 border-gray-200 rounded-none">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[24px] font-semibold">
                    Building the  idea of future
                </div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores odit eum itaque vero explicabo officiis, vel ratione modi ad?</p>
                </div>
            </div>
            <div className="collapse collapse-plus border-2 border-gray-200 bg-base-200 border-gray-200 rounded-none">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[24px] font-semibold">
                    Accurate and friendly support
                </div>
                <div className="collapse-content">
                    <p className='font-normal text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laboriosam voluptates dolorem dolore, aspernatur nemo repellat porro vero cupiditate est.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
