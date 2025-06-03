"use client"
import { useState } from "react";

const days = ["Day 1", "Day 2", "Day 3", "Day 4"];

const schedule = [
    {
        time: "10:00 AM - 12:00PM",
        description: "Lorem ipsum dolor siLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, t amet",
    },
    {
        time: "12:00 PM - 2:00 PM",
        description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        time: "2:00 PM - 4:00 PM",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        time: "4:00 PM - 6:00 PM",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        time: "6:00 PM - 8:00 PM",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        time: "8:00 PM - 10:00 PM",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
];
const DaysSection = () => {
    const [activeDay, setActiveDay] = useState("Day 1");

    return (
        <div className="px-6 lg:px-32 lg:py-24 bg-white">
            <h2 className="text-5xl font-black text-[#1B3959] mb-10">DAYS</h2>

            {/* Nav Pills */}
            <div className="flex gap-4 mb-10">
                {days.map((day) => (
                    <button
                        key={day}
                        className={`px-10 py-2 lg:px-[101px] lg:py-3 rounded-full font-semibold transition ${
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
                    <p className="text-sm leading-relaxed py-10 px-5 lg:py-[54px] lg:px-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <img
                        src="/assets/many_speakers.png"
                        alt="speakers"
                        className="mt-6 rounded-md object-cover w-full h-[200px]"
                    />
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-[37px]">
                    {schedule.map((item, idx) => (
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