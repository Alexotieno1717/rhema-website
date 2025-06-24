import React from 'react';
import {IPartners} from "@/types";

interface PartnersLevelsProps {
    data: IPartners
}
const PartnerLevels = ({data}: PartnersLevelsProps) => {
    return (
        <>
            <div className='px-[38px]'>
                <h1 className='pt-24 pb-[24px] text-center text-[#1B3959] text-5xl font-black uppercase'>{data.levels.title}</h1>
                <p className='text-center pb-8' >{data.levels.description}</p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {data.levels.data.map((item, i) => (
                        <div className='flex flex-col bg-white shadow-lg py-10 px-8 items-center text-center space-y-4' key={i}>
                            <img src={item.image} className='' alt="brown"/>
                            <p className='text-center text-md text-[#475467]'>{item.description}</p>
                            <button className='py-3 px-[152px] bg-[#1B3959] rounded-[8px] text-white'>{item.buttonText}</button>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default PartnerLevels;