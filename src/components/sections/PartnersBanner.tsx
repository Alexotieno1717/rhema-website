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

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full space-x-[79px] bg-[#EFEFEF] lg:pt-[52px] pl-10 lg:pl-[105px] lg:pr-[149px]">
                <div className='text-left lg:text-center text-lg lg:text-2xl font-medium pt-6 lg:pt-[64px]'>
                    <p>{data.description}</p>
                </div>
                <div className='py-4'>
                    <iframe
                        className="w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-xl"
                        src={data.youtubeLink}
                        title={data.youtubeLinkText}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default PartnersBanner;