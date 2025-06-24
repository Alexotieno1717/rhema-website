"use client"
import React, {useState} from 'react';
import Swipper from "@/components/sections/Swipper";
import EventCard from "@/components/event/EventCard";
import {IEvents} from "@/types";
import {EventsContent} from "@/mock";

interface EventSectionProps {
    data: IEvents
}

const EventSection = ({data}: EventSectionProps) => {

    const [activeDay, setActiveDay] = useState("Upcoming");

    return (
        <>
            <h1 className="pb-9 text-4xl md:text-5xl font-extrabold text-[#1B3959] text-center pt-28 uppercase">
                {data.title}
            </h1>

            <div className='px-6 lg:px-[68px]'>
                <Swipper items={EventsContent} />
            </div>

            <div className="px-6 lg:px-[68px] pt-[76px] pb-10">
                {/* Nav Pills */}
                <div className="flex gap-4 mb-7">
                    {data.days.map((day) => (
                        <button
                            key={day}
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

                <div className="">
                    <h1 className="text-3xl font-bold mb-6">{data.subtitle}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-7">
                        {data.events.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventSection;