import React from 'react';
import Header from "@/components/navigation/Header";
import AboutBanner from "@/components/about/AboutBanner";
import AboutMission from "@/components/about/AboutMission";
import AboutImpact from "@/components/about/AboutImpact";
import HeroSection from "@/components/rhema/HeroSection";
import LatestNews from "@/components/rhema/LatestNews";
import Footer from "@/components/ui/Footer";
import {AboutPageContent, HeroSectionContent, LatestNewsContent} from "@/mock";
import ContactInfo from "@/components/sections/ContactInfo";

const Page = () => {
    return (
        <>
            <Header />
            <AboutBanner item={AboutPageContent} />
            <AboutMission item={AboutPageContent} />
            <AboutImpact item={AboutPageContent} />  
            <HeroSection data={HeroSectionContent} />
            {/* <LatestNews data={LatestNewsContent} /> */}
            <ContactInfo />
            <Footer />
        </>
    );
};

export default Page;