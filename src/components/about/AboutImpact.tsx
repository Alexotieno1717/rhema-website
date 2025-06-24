import React from 'react';

import {IAboutContent} from "@/types";
interface AboutImpactProps {
    item: IAboutContent;
}

const AboutImpact = ({item}: AboutImpactProps) => {
    return (
        <div className="grid gris-col-1 lg:grid-cols-2 gap-14 bg-black px-6 lg:px-24 py-9">
            <div className=''>
                <img src={item.impactImage} className='w-full' alt="impact"/>
            </div>
            <div className='lg:w-[623px]'>
                <h1 className='text-3xl font-[1000] text-white'>{item.impactTitle}</h1>
                <p className='text-white text-2xl font-medium whitespace-pre-line'>{item.impactDescription}</p>
            </div>
        </div>
    );
};

export default AboutImpact;