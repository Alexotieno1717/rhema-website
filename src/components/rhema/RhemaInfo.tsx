import React from 'react';
import {IRhema} from "@/types";
import CountdownWithVideo from "@/components/rhema/CountdownWithVideo";



interface RhemaInfoProps {
    data: IRhema
}
const RhemaInfo = ({data}: RhemaInfoProps) => {
    return (
        <div>
            {/* HERO + COUNTDOWN SECTION */}
            <div className="px-6 pt-4 lg:px-26 lg:pt-[24px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[84px]">
                    {/* Left: Title and Description */}
                    <div className="w-full">
                        <h1 className="custom-gradient-text text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase pb-4">
                            {data.rhema.title}
                        </h1>
                        <p className="text-[#1B3959] text-base font-medium leading-relaxed whitespace-pre-line">
                            {data.rhema.description}
                        </p>
                    </div>

                    {/* CountdownWithVideo: Contains both the video player and countdown components */}
                    <CountdownWithVideo
                      endDate="2025-09-01T00:00:00"
                      videoUrl="https://www.youtube.com/embed/Z-IPIPJcL9k"
                    // videoUrl="https://www.youtube.com/embed/A8EMETMGJjk
                    />


                </div>

            </div>

            {/* POSTER + STATS SECTION */}
            <div className="px-6 lg:px-26 pt-12 flex flex-col lg:flex-row gap-6 lg:gap-0">
                {/* Poster Image */}
                <div className="w-full lg:w-[50%]">
                {/* <img src="/assets/rhema_feast_2025_recent.jpeg" alt="rhema" className="w-full object-cover" /> */}
                <img src="/assets/rhemaFeast_poster.jpeg" alt="rhema" className="w-full object-cover" />
                </div>

                {/* Stats Box */}
                <div className="custom-gradient text-white w-full lg:w-[50%] px-10 py-16 flex flex-col justify-center space-y-10">
                    {data.rhema.data.map((item, i) => (
                        <div className="text-center space-y-3" key={i}>
                            <h1 className="text-5xl font-semibold">{item.title}</h1>
                            <p className="text-base lg:text-lg font-medium">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default RhemaInfo;