import React from 'react';
import {IPartners} from "@/types";

interface PartnerImpactProps {
    data: IPartners
}
const PartnerImpact = ({data}: PartnerImpactProps) => {
    return (
        <>
            <div className='flex flex-col px-8 space-y-6 pt-9 lg:pt-[74px] lg:px-[82px] lg:space-y-12'>
                <h1 className='text-5xl font-black text-[#1B3959]'>{data.impact.title}</h1>
                <p className='lg:w-[675px] text-lg font-medium'>{data.impact.description}</p>
                <div className='custom-gradient flex flex-col lg:flex-row justify-between gap-8 p-6 md:p-16 rounded-2xl text-white'>
                    {data.impact.data.map((item, i) => (
                        <div className='space-y-3 text-center' key={i}>
                            <h1 className='text-4xl lg:text-6xl font-semibold'>{item.title}</h1>
                            <p className='text-base lg:text-lg lg:w-[394px]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PartnerImpact;