import React from 'react';
import Header from "@/components/navigation/Header";
import Speakers from "@/components/rhema/Speakers";
import DaysSection from "@/components/rhema/DaysSection";
import HeroSection from "@/components/rhema/HeroSection";
import LatestNews from "@/components/rhema/LatestNews";
import Footer from "@/components/ui/Footer";
import RhemaInfo from "@/components/rhema/RhemaInfo";

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
                    className="w-full object-cover pt-[79px]"
                    alt="rhema banner"
                />

                {/* Centered Countdown Overlay */}
                <div className="absolute inset-x-0 bottom-4.5 flex items-center justify-center">
                    <div  className="text-white p-6 rounded-lg max-w-2xl w-full mx-4 backdrop-blur-sm"
                          style={{
                              background: 'linear-gradient(109.46deg, #C9C9C9CC, #C4C4C41A)',
                              border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}

                    >
                        <h2 className="text-2xl font-bold text-center mb-4">COUNTDOWN TO EVENT</h2>
                        <div className="flex justify-between text-center space-x-4 pb-8">
                            <div className="flex-1 bg-[#32333566] py-[23px] px-[25px] rounded-[14px]">
                                <div className="text-3xl font-bold pb-3">07</div>
                                <div className="text-sm">DAYS</div>
                            </div>
                            <div className="flex-1  bg-[#32333566] py-[23px] px-[25px] rounded-[14px]">
                                <div className="text-3xl font-bold pb-3">12</div>
                                <div className="text-sm">HOURS</div>
                            </div>
                            <div className="flex-1  bg-[#32333566] py-[23px] px-[25px] rounded-[14px]">
                                <div className="text-3xl font-bold pb-3">45</div>
                                <div className="text-sm">MINUTES</div>
                            </div>
                            <div className="flex-1  bg-[#32333566] py-[23px] px-[25px] rounded-[14px]">
                                <div className="text-3xl font-bold pb-3">30</div>
                                <div className="text-sm">SECONDS</div>
                            </div>
                        </div>
                        <div className='flex justify-center pt-8'>
                            <button className="hidden lg:block bg-[#1B3959] py-3.5 px-9.5 text-white font-semibold text-md rounded-full hover:bg-opacity-90 transition">
                                Buy Tickets
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Rhema Fest*/}
            <RhemaInfo />
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