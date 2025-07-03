import React from 'react';
import {IPartners} from "@/types";

interface PartnerBannerProps {
    data: IPartners
}
const PartnersBanner = ({data}: PartnerBannerProps) => {
    return (
        <>
            <div className='bg-white pt-[120px] md:pt-[195px] pb-[30px] md:pb-[66px] text-center text-[#1B3959] text-3xl md:text-5xl font-black shadow-lg uppercase'>
                <h1>{data.title}</h1>
            </div>

            <div className="w-full space-x-3 bg-[#EFEFEF] lg:pt-[52px] py-8 px-6 lg:pl-[105px] lg:pr-[149px]">
                <div className='text-center text-lg lg:text-2xl font-medium'>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    );
};

export default PartnersBanner;