"use client"
import React, {useState} from 'react';
import Header from "@/components/navigation/Header";
import EventCard from "@/components/event/EventCard";
import Footer from "@/components/ui/Footer";


const days = ["Upcoming", "Past", "Recurring"];


const events = [
    {
        title: '7 Days of Worship',
        date: '8th–15th June 2025',
        image: '/assets/event1.png',
    },
    {
        title: 'Rhema Experience',
        date: '8th–15th June 2025',
        image: '/assets/event2.png',
    },
    {
        title: 'Rhema Feast',
        date: '8th–15th June 2025',
        image: '/assets/event3.png',
    },
    {
        title: 'Marriage Enrichment',
        date: '8th–15th June 2025',
        image: '/assets/event4.png',
    },
    {
        title: '7 Days of Worship',
        date: '8th–15th June 2025',
        image: '/assets/event1.png',
    },
    {
        title: '7 Days of Worship',
        date: '8th–15th June 2025',
        image: '/assets/event1.png',
    },
    {
        title: '7 Days of Worship',
        date: '8th–15th June 2025',
        image: '/assets/event1.png',
    },
    {
        title: '7 Days of Worship',
        date: '8th–15th June 2025',
        image: '/assets/event1.png',
    },
];



const Page = () => {
    const [activeDay, setActiveDay] = useState("Upcoming");

    return (
        <>
            <div className="relative z-50">
                <Header />
            </div>
            <h1 className="pb-9 text-4xl md:text-5xl font-extrabold text-[#1B3959] text-center pt-28 uppercase">
                Events
            </h1>
            
            <div className='px-6 lg:px-[68px]'>
                <img src="/assets/event_banner.png" className='w-full' alt="Event Banner" />
            </div>

           <div className="px-6 lg:px-[68px] pt-[76px] pb-10">
               {/* Nav Pills */}
               <div className="flex gap-4 mb-7">
                   {days.map((day) => (
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
                   <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-7">
                       {events.map((event, index) => (
                           <EventCard key={index} {...event} />
                       ))}
                   </div>
               </div>
           </div>

            <Footer />

        </>
    );
};

export default Page;