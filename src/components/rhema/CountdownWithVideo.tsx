"use client";

import React from "react";
import CountDown from "@/components/sections/CountDown";

interface CountdownWithVideoProps {
  endDate?: string;
  videoUrl: string;
}

const CountdownWithVideo: React.FC<CountdownWithVideoProps> = ({
  endDate,
  videoUrl,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-6 p-0 md:p-2">
      {/* Countdown */}
      <CountDown endDate={endDate} />

      {/* Video Player */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 flex-1 flex items-center justify-center min-h-[360px]">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={videoUrl}
            title="Rhema Feast Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownWithVideo;
