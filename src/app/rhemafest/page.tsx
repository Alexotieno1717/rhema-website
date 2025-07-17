import React from 'react';
import Header from "@/components/navigation/Header";
import Speakers from "@/components/rhema/Speakers";
// import DaysSection from "@/components/rhema/DaysSection";
// import LatestNews from "@/components/rhema/LatestNews";
import Footer from "@/components/ui/Footer";
import RhemaInfo from "@/components/rhema/RhemaInfo";
// import {LatestNewsContent, RhemaFeastContent} from "@/mock";
import {RhemaFeastContent} from "@/mock";
import RhemaBannerSection from "@/components/rhema/RhemaBannerSection";

const Page = () => {
    return (
        <div>
            <Header />
            <RhemaBannerSection />
            <RhemaInfo data={RhemaFeastContent} />
            <Speakers data={RhemaFeastContent} />
            <div className="px-6 pt-12 lg:px-[102px] lg:pt-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    {/* Left side - ruach image full height */}
                    <div className="h-full">
                        <img
                            //src="/assets/ruach.png"
                            src ="assets/rhema_feast_2025_recent.jpeg"
                            className="w-full h-full object-cover rounded-lg"
                            alt="youtube"
                        />
                    </div>

                    {/* Right side - stacked images with equal spacing */}
                    <div className="flex flex-col gap-y-4 h-full">
                        <img
                            src="/assets/bussiness_1.png"
                            className=""
                            alt="bussiness_1"
                        />
                        <img
                            src="/assets/bussiness_2.png"
                            className=""
                            alt="bussiness_2"
                        />
                    </div>
                </div>
            </div>
            {/* <DaysSection data={RhemaFeastContent} />
            <LatestNews data={LatestNewsContent} /> */}
            <Footer />

        </div>
    );
};

export default Page;