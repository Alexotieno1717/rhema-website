import React from 'react';
import {IAboutContent} from "@/types";

interface AboutBannerProps {
    item: IAboutContent;
}
const AboutBanner = ({item}: AboutBannerProps) => {
    return (
        <div>
            <section className="relative h-[30vh] lg:h-[65vh] flex items-center justify-center text-white">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={item.heroBackgroundImage}
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 bg-opacity-50" />
                </div>

                {/* Content */}
                <div className="relative px-6 text-center">
                    <h1 className="custom-gradient-text text-4xl pt-14 lg:pt-0 lg:text-7xl font-[1000] leading-snug mb-6">
                        {item.heroTitle}
                    </h1>
                </div>
            </section>

            <div className='flex justify-center lg:text-center px-6 lg:px-0 pt-10 lg:pt-16.5'>
                <p className='lg:w-[881px] text-md font-medium whitespace-pre-line'>{item.introDescription}</p>
            </div>
        </div>
    );
};

export default AboutBanner;