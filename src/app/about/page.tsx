import React from 'react';
import Header from "@/components/navigation/Header";
import AboutBanner from "@/components/about/AboutBanner";
import AboutMission from "@/components/about/AboutMission";
import AboutImpact from "@/components/about/AboutImpact";
import Journey from "@/components/about/Journey";
import HeroSection from "@/components/rhema/HeroSection";
import LatestNews from "@/components/rhema/LatestNews";
import Footer from "@/components/ui/Footer";

const Page = () => {
    return (
        <>
            <div className="relative z-50">
                <Header />
            </div>
            <AboutBanner />
            <AboutMission />
            <AboutImpact />
            <Journey />
            <HeroSection />
            <LatestNews />
            <Footer />






        </>
    );
};

export default Page;