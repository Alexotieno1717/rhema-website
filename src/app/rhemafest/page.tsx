import React from 'react';
import Header from "@/components/navigation/Header";
import Speakers from "@/components/rhema/Speakers";
import DaysSection from "@/components/rhema/DaysSection";
import HeroSection from "@/components/rhema/HeroSection";
import LatestNews from "@/components/rhema/LatestNews";
import Footer from "@/components/ui/Footer";

const Page = () => {
    return (
        <div className="relative">
            {/* Header with z-index to ensure it stays on top */}
            <div className="relative z-50">
                <Header />
            </div>

            {/* Banner with Countdown */}
            <section className="relative">
                {/* Banner Image - full viewport height */}
                <img
                    src="/assets/rhema_banner.png"
                    className="w-full object-cover pt-[78px]"
                    alt="rhema banner"
                />

                {/* Centered Countdown Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div  className="text-white p-6 rounded-lg max-w-2xl w-full mx-4 backdrop-blur-sm"
                          style={{
                              background: 'linear-gradient(109.46deg, rgba(201, 201, 201, 0.32) 1.57%, rgba(196, 196, 196, 0.04) 100%)',
                              border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                    >
                        <h2 className="text-xl font-bold text-center mb-4">COUNTDOWN TO EVENT</h2>
                        <div className="flex justify-between text-center space-x-4">
                            <div className="flex-1 bg-[#32333566] py-[23px] px-[25px] rounded-[14px]">
                                <div className="text-3xl font-bold">07</div>
                                <div className="text-sm">DAYS</div>
                            </div>
                            <div className="flex-1  bg-[#32333566] py-[23px] px-[25px] rounded-[14px]">
                                <div className="text-3xl font-bold">12</div>
                                <div className="text-sm">HOURS</div>
                            </div>
                            <div className="flex-1  bg-[#32333566] py-[23px] px-[25px] rounded-[14px]">
                                <div className="text-3xl font-bold">45</div>
                                <div className="text-sm">MINUTES</div>
                            </div>
                            <div className="flex-1  bg-[#32333566] py-[23px] px-[25px] rounded-[14px]">
                                <div className="text-3xl font-bold">30</div>
                                <div className="text-sm">SECONDS</div>
                            </div>
                        </div>
                        <div className='flex justify-center pt-8'>
                            <button className="hidden lg:block bg-[#1B3959] py-2.5 px-6 text-white font-semibold text-md rounded-full hover:bg-opacity-90 transition">
                                Buy Tickets
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Rhema Fest*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-6 lg:px-32 py-24 items-center">
                <div>
                    <h1 className="text-[#1B3959] text-5xl md:text-6xl lg:text-8xl font-extrabold uppercase pb-6">
                        Rhema <br/> Fest
                    </h1>
                    <p className="text-[#1B3959] text-base md:text-lg font-medium max-w-xl leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br /><br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div>
                    <img
                        src="/assets/youtube.png"
                        loading='lazy'
                        alt="youtube"
                        className="w-full rounded-xl"
                    />
                </div>
            </div>
            
            {/* Speakers */}
            <Speakers />

            {/* Days */}
            <DaysSection />

            <HeroSection />

            <LatestNews />

            <Footer />




        </div>
    );
};

export default Page;