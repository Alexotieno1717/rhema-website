import React from 'react';
import {IRhema} from "@/types";

interface SpeakersProps {
    data: IRhema
}
const Speakers = ({data}: SpeakersProps) => {
    return (
        <div className="px-6 pt-12 lg:px-[102px] lg:pt-28">
            <div className="pb-9">
                <h1 className="pb-5 text-4xl md:text-5xl font-extrabold text-[#1B3959]">{data.speakers.title}</h1>
                <p className="text-[#3F3F3F] text-shadow-md font-medium">{data.speakers.description}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {data.speakers.data.map((item, index) => (
                    <div key={index} className="flex flex-col space-y-4">
                        <img src={item.image} alt="speakers" className="w-full "/>
                        <h4 className="mt-4 text-xl font-semibold text-[#1B3959]">{item.title}</h4>
                        {/*<p className="text-lg text-blue-600 font-medium">{item.subtitle}</p>*/}
                        {/*<p className="text-[#101828] text-sm font-normal">{item.description}</p>*/}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speakers;