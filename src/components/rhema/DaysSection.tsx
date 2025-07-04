"use client"
import { useState } from "react";
import {IRhema} from "@/types";

interface DaysSectionProps {
    data: IRhema
}

const DaysSection = ({data}: DaysSectionProps) => {
    const [activeDay, setActiveDay] = useState(data.days.days[0]);


    return (
        <div className="px-6 py-12 lg:px-26 lg:py-24 bg-white">
            <h2 className="pb-9 text-4xl md:text-5xl font-extrabold text-[#1B3959]">DAYS</h2>

            {/* Nav Pills */}
            <div className="flex gap-4 mb-10 hidden">
                {data.days.days.map((day, index) => (
                    <button
                        key={index}
                        className={`px-7 py-1 lg:px-[101px] lg:py-3 rounded-full font-semibold transition ${
                            activeDay === day
                                ? "custom-gradient text-white"
                                : "bg-[#F0F0F0] text-[#1B3959]"
                        }`}
                        onClick={() => setActiveDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="grid lg:grid-cols-2 gap-[77px]">
                {/* Left Section */}
                <div className="bg-[#1B3959] text-white rounded-md">
                    <p className="text-sm leading-relaxed py-10 px-5 lg:py-[54px] lg:px-[30px]">{data.days.description}</p>

                    <img
                        src={data.days.image}
                        alt="speakers"
                        className="mt-6 rounded-md object-cover w-full h-[200px]"
                    />
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-[37px]">
                    {data.days.schedule.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="w-1 h-full bg-red-600 rounded-full mt-1"></div>
                            <div className='space-y-3'>
                                <h4 className="text-sm font-bold text-[#1B3959]">{item.time}</h4>
                                <p className="text-sm text-[#555]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DaysSection;