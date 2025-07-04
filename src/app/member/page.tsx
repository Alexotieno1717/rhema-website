import React from 'react';
import Header from "@/components/navigation/Header";
import ContactStepper from "@/components/sections/ContactStepper";

const Page = () => {
    return (
        <>
            <Header />
            <h1 className='pt-[120px] md:pt-[195px] pb-[30px] md:pb-[66px] text-center text-[#1B3959] text-3xl md:text-5xl font-black uppercase'>BECOME A PARTNER</h1>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <ContactStepper />
                </div>
            </div>
        </>
    );
};

export default Page;