"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx"; // Optional: you can also use template strings instead

interface CountDownProps {
    endDate?: string; // ISO string e.g. "2025-09-01T00:00:00"
}

const CountDown: React.FC<CountDownProps> = ({
                                                 endDate = "2025-09-01T00:00:00", // default fallback
                                             }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hasEnded, setHasEnded] = useState(false);

    const countDownDate = new Date(endDate).getTime();

    useEffect(() => {
        const updateTime = setInterval(() => {
            const now = new Date().getTime();
            const difference = countDownDate - now;

            if (difference <= 0) {
                clearInterval(updateTime);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                setHasEnded(true);
                return;
            }

            setHasEnded(false); // Just in case endDate was updated dynamically

            setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(updateTime);
    }, [endDate]);

    const timerValues = { days, hours, minutes, seconds };

    return (
        <div
            className={clsx(
                "custom-gradient w-full h-auto max-h-[200px] text-white p-6 rounded-xl transition-all duration-500",
                {
                    "animate-pulse border-2 border-yellow-400 shadow-lg shadow-yellow-500": hasEnded,
                }
            )}
        >


        <h2 className="text-xl lg:text-2xl font-bold text-center mb-4 uppercase">
                {hasEnded ? "Event Status" : "Countdown to Event"}
            </h2>

            {hasEnded ? (
                <div className="text-center text-2xl font-extrabold text-yellow-300 animate-bounce">
                    🎉 Rhema Feast is Live!
                </div>
            ) : (
                <div className="flex justify-between text-center space-x-3 lg:space-x-4 pb-4">
                    {Object.entries(timerValues).map(([label, value]) => (
                        <div key={label} className="flex-1 bg-[#32333566] py-4 px-4 rounded-lg">
                            <div className="text-2xl font-bold pb-2">{value.toString().padStart(2, "0")}</div>
                            <div className="text-sm uppercase">{label}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CountDown;


//
//
// <div className="custom-gradient w-full text-white p-6 rounded-xl">
//     <h2 className="text-xl lg:text-2xl font-bold text-center mb-4 uppercase">Count down</h2>
//     <div className="flex justify-between text-center space-x-3 lg:space-x-4 pb-4">
//         {Object.entries(timerValues).map(([label, value]) => (
//             <div key={label} className="flex-1 bg-[#32333566] py-4 px-4 rounded-lg">
//                 <div className="text-2xl font-bold pb-2">{value.toString().padStart(2, "0")}</div>
//                 <div className="text-sm uppercase">{label}</div>
//             </div>
//         ))}
//     </div>
// </div>