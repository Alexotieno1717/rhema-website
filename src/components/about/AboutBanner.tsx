import React from 'react';
import {IAboutContent} from "@/types";

interface AboutBannerProps {
    item: IAboutContent;
}
const AboutBanner = ({item}: AboutBannerProps) => {
    return (
        <div>
            <section className="relative h-[65vh] flex items-center justify-center text-white">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={item.heroBackgroundImage}
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 bg-opacity-50" />
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 pt-14 px-6 lg:px-64">
                <div className="lg:w-[322px]">
                    <h1 className="custom-gradient-text text-4xl lg:text-5xl font-[1000] leading-snug mb-6">
                        {item.heroTitle}
                    </h1>
                </div>
                <div className=''>
                    <p className=' text-md font-medium whitespace-pre-line'>{item.introDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;