 import React from 'react';
import Header from "@/components/navigation/Header";
import LatestNews from "@/components/rhema/LatestNews";
import Footer from "@/components/ui/Footer";
import {LatestNewsContent, PartnerContent} from "@/mock";
import PartnersBanner from "@/components/sections/PartnersBanner";
import PartnerImpact from "@/components/sections/PartnerImpact";
import PartnerHeroSection from "@/components/sections/PartnerHeroSection";
import PartnerLevels from "@/components/sections/PartnerLevels";
import PartnerQuote from "@/components/sections/PartnerQuote";
import ContactInfo from "@/components/sections/ContactInfo";

const Page = () => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <PartnersBanner data={PartnerContent} />
            <PartnerImpact data={PartnerContent} />
            <PartnerHeroSection data={PartnerContent} />
            <PartnerLevels data={PartnerContent} />
            <LatestNews data={LatestNewsContent} />
            <PartnerQuote data={PartnerContent} />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Page;