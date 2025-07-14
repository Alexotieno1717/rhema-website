import React, {Suspense} from 'react';
import Header from "@/components/navigation/Header";
import ContactStepper from "@/components/sections/ContactStepper";

const Page = () => {
    return (
        <>
            <Header />
            <h1 className='pt-[100px] md:pt-[155px] pb-[30px] md:pb-[66px] text-center text-[#1B3959] text-3xl md:text-5xl font-black uppercase'>BECOME A PARTNER</h1>

            <div className="max-w-4xl mx-auto py-8 px-4">
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactStepper />
                </Suspense>
            </div>
        </>
    );
};

export default Page;