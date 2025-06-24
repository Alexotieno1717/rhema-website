import React from 'react';
import Header from "@/components/navigation/Header";
import ContactSection from "@/components/sections/ContactSection";
import {ContactContent} from "@/mock";

const Page = () => {
    return (
        <>
            <Header />
            <ContactSection data={ContactContent} />
        </>
    );
};

export default Page;