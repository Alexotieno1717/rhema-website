"use client"
import React from 'react';
import {PartnersBrief} from "@/types";

type PartnersBriefCardProps = {
    item: PartnersBrief;
}

const PartnersBriefCard = ({ item }: PartnersBriefCardProps) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl px-6 py-8 max-w-[450px] mx-4">
            <div className="space-y-6">
                <img src="/assets/quotes.png" alt="quotes" />
                <p className="text-[#1B3959] text-base leading-relaxed">{item.description}</p>
            </div>
            <div className="flex items-center space-x-4 mt-6">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>

                    <p className="text-lg text-[#101828] font-semibold">{item.name}</p>
                    <span className="text-md text-[#DA8E04]">{item.slogan}</span>
                </div>
            </div>
        </div>
    );
};

export default PartnersBriefCard;