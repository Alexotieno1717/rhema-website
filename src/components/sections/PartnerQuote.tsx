import React from 'react';
import {IPartners} from "@/types";

interface PartnerQuoteProps {
    data: IPartners
}

const PartnerQuote = ({data}: PartnerQuoteProps) => {
    return (
        <>
            <section className='relative flex flex-col-reverse lg:flex-row  bg-[#1B3959] w-full mt-24'>
                <p className='text-xl lg:text-4xl text-white font-semibold pl-10 py-10 lg:pl-[121px] lg:py-[89px] whitespace-pre-line'>
                    {data.quote}
                </p>
                <img src={data.image} className='lg:-mt-[120px]' alt="Rev_Julian-Kyula" />
            </section>
        </>
    );
};

export default PartnerQuote;