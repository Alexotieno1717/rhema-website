import React from 'react';
import {IPartners} from "@/types";

interface PartnerImpactProps {
    data: IPartners
}
const PartnerImpact = ({data}: PartnerImpactProps) => {
    return (
        <>
            <div className='flex flex-col px-8 space-y-6 pt-9 lg:pt-[74px] lg:px-[82px] lg:space-y-12'>
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 mt-8 w-full">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-center bg-white p-6 rounded-xl shadow-sm min-h-[400px]">
                <h1 className='text-5xl font-black text-[#1B3959]'>{data.impact.title}</h1>
                        <p className='text-lg font-medium mt-4'>{data.impact.description}</p>
                    </div>
                                {/* Video Section */}
                    <div className="flex-1 flex items-center justify-center min-h-[400px]">
                    <iframe
                            src="https://www.youtube.com/embed/z5wGxqB8tJM"
                            width="100%"
                            height="400"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                            title="YouTube Video"
                            className="rounded-xl border-none w-full h-full"
                    ></iframe>
                    </div>
                </div>

                
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