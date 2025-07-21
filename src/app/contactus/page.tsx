import React from 'react';
import Header from "@/components/navigation/Header";
import ContactSection from "@/components/sections/ContactSection";
// import ContactInfo from "@/components/sections/ContactInfo";
import {ContactContent} from "@/mock";

const Page = () => {
    return (
        <>
            <Header />
            <ContactSection data={ContactContent} />
            {/* <ContactInfo /> */}
        </>
    );
};

export default Page;