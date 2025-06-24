
import React from 'react';
import Header from "@/components/navigation/Header";
import Footer from "@/components/ui/Footer";
import EventSection from "@/components/sections/EventSection";
import {EventsContent} from "@/mock";


const Page = () => {

    return (
        <>
            <Header />
            <EventSection data={EventsContent}/>
            <Footer />
        </>
    );
};

export default Page;