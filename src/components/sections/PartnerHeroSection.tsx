import React from 'react';
import PartnerBriefSlider from "@/components/sections/PartnerBriefSlider";
import {PartnersSliderContent} from "@/mock";
import {IPartners} from "@/types";

interface PartnerHeroSectionProps {
    data: IPartners
}

const PartnerHeroSection = ({data}: PartnerHeroSectionProps) => {
    return (
        <>
            <section className="relative bg-white mt-[119px] overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={data.partner.backgroundImage}
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Partner Slider */}
                {/* <div className="relative z-10 pt-12 px-0 max-w-full lg:max-w-6xl mx-auto">
                    <PartnerBriefSlider data={PartnersSliderContent} />
                </div> */}

                {/* How do I partner box with image */}
                <div className="relative z-20 w-full px-4 mt-8 lg:mt-14">
                    <div className="flex flex-col lg:flex-row justify-center items-stretch max-w-6xl mx-auto min-h-[400px] lg:min-h-[500px]">
                        {/* Text Box */}
                        <div className="bg-white shadow-lg p-6 sm:p-8 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-stretch h-full min-h-full lg:justify-center lg:py-12">
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#1B3959] font-bold leading-snug mb-4 sm:mb-6 uppercase">
                                {data.partner.title}
                            </h1>
                            <ul className="text-black list-disc space-y-2 pl-5 text-sm sm:text-base lg:text-lg flex-grow">
                                {data.partner.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Box */}
                        <div className="w-full lg:w-1/2 flex items-center h-full min-h-full">
                            <img
                                // src={data.partner.payBillImage}
                                src="/assets/rhema_paybill.jpeg"
                                alt="Paybill"
                                className="w-full h-full object-cover aspect-video lg:aspect-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PartnerHeroSection;