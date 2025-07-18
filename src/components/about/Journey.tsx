"use client"
import React, { useState } from 'react';
import {IAboutContent} from "@/types";


const slides = [
    {'year': '2020'},
    {'year': '2021'},
    {'year': '2022'},
    {'year': '2023'},
    {'year': '2024'},
];

interface JourneyProps {
    item: IAboutContent;
}

const Journey = ({item}: JourneyProps) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideClick = (index: number) => {
        if (index === activeIndex) {
            return; // Clicked on the active slide, do nothing
        }

        setActiveIndex(index);
    };

    return (
        <div className="px-6 lg:px-[102px]">
            <h1 className='text-3xl font-black text-center pt-[59px]'>Our Journey</h1>

            {/*i have remove class flex when the year carousel is need kindly return it */}
            <div className="years-carousel max-w-[924px] mx-auto  space-x-12 md:space-x-32 pl-4 md:pl-24 hidden">
                {slides?.map((item, index) => (
                    <div key={index} className="z-10">
                        <button
                            key={index}
                            onClick={() => handleSlideClick(index)} // Use handleSlideClick to update activeIndex and slide to the clicked year
                            className={`rounded-full ${
                                index === activeIndex
                                    ? 'bg-[#DA8E04] border border-[#DA8E04] w-12 h-12  transition duration-300 ease-in-out'
                                    : 'bg-[#D9D9D9] w-12 h-12 '
                            }`}
                        >
                            <div>
                                <p
                                    className={`mt-14 transition-all ${
                                        index === activeIndex ? 'text-[#DA8E04]' : 'text-black'
                                    }`}
                                >
                                    {item.year}
                                </p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>


            {item.journey.map((item, index) => (
                <div className='flex flex-col lg:flex-row space-x-16 py-12 lg:py-24' key={index}>
                    <div className='lg:w-[412px] whitespace-pre-line'>
                        <p>{item.description}</p>
                    </div>
                    <div className='w-full'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                            <div className='bg-gray-600 h-[380px]'> image 1</div>
                            <div className='bg-gray-600 h-[380px]'>image 2</div>
                        </div>
                        <div className='bg-gray-600 h-[380px]'> image 3</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Journey;