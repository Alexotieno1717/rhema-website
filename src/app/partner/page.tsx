import React from 'react';
import Header from "@/components/navigation/Header";
import LatestNews from "@/components/rhema/LatestNews";
import Footer from "@/components/ui/Footer";
import {PartnersSliderContent} from "@/mock";
import PartnerBriefSlider from "@/components/sections/PartnerBriefSlider";

const Page = () => {
    return (
        <div className="overflow-x-hidden">
            {/* Header with z-index to ensure it stays on top */}
            <div className="relative z-50">
                <Header />
            </div>

            <div className='bg-white pt-[120px] md:pt-[195px] pb-[30px] md:pb-[66px] text-center text-[#1B3959] text-3xl md:text-5xl font-black shadow-lg'>
            {/*<div className='bg-white pt-[195px] pb-[66px] text-center text-[#1B3959] text-2xl lg:text-5xl font-black shadow-lg'>*/}
                <h1>WHY PARTNER WITH US</h1>
            </div>

            {/*<div className="flex flex-col-reverse lg:flex-row w-full gap-10 bg-[#EFEFEF] py-10 px-6 lg:px-[105px] lg:pr-[149px]">*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full space-x-[79px] bg-[#EFEFEF] lg:pt-[52px] pl-10 lg:pl-[105px] lg:pr-[149px]">
                <div className='text-left lg:text-center text-lg lg:text-2xl font-medium pt-6 lg:pt-[64px]'>
                {/*<div className='lg:w-[512px] text-center text-2xl font-medium pt-[64px]'>*/}
                    <p>
                        &#34;We want to be able to impact more people and generations, transform lives and become a movement dedicated to spreading the Gospel, and disciple nations with the truth and power of Jesus Christ. We want you, too, to be partakers of this great call that will focus mainly on Mission. marketplace and Ministry&#34;
                    </p>
                </div>
                <div className='py-4'>
                    <iframe
                        className="w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-xl"
                        src="https://www.youtube.com/embed/O0zk93DJFqo"
                        title="Rhema Fest 2024"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className='flex flex-col px-8 space-y-6 pt-9 lg:pt-[74px] lg:px-[82px] lg:space-y-12'>
                <h1 className='text-5xl font-black text-[#1B3959]'>
                    Our Impact
                </h1>
                <p className='lg:w-[675px] text-lg font-medium'>With the help of our Partners, we seek to further God’s kingdom by making a difference in the lives of His people all over the world. From creating water pipelines to disaster relief, we band together to save the lost, help the hurting, and spread the Gospel in the mighty name of Jesus Christ.</p>
                <div className='custom-gradient flex flex-col lg:flex-row justify-between gap-8 p-6 md:p-16 rounded-2xl text-white'>
                    <div className='space-y-3 text-center'>
                        <h1 className='text-4xl lg:text-6xl font-semibold'>650,000 +</h1>
                        <p className='text-base lg:text-lg lg:w-[394px]'>Provided meals and supplied more than 500 tons of relief items to Kenya</p>
                    </div>
                    <div className='space-y-3 text-center'>
                        <h1 className='text-4xl lg:text-6xl font-semibold'>14 Wells</h1>
                        <p className='text-base lg:text-lg lg:w-[394px]'>Built 14 wells and a 10-mile pipeline, increasing access to clean water in Kenya</p>
                    </div>
                    <div className='space-y-3 text-center'>
                        <h1 className='text-4xl lg:text-6xl font-semibold'>35,000</h1>
                        <p className='text-base lg:text-lg lg:w-[394px]'>Served over 35,000 ex-offenders in 18 years, boasting a recidivism rate of only 16%</p>
                    </div>
                </div>
            </div>

            <section className="relative bg-white lg:h-[77vh] mt-[119px] overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/RXP.jpg"
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Partner Slider */}
                <div className="relative z-10 pt-12 px-0 max-w-full lg:max-w-6xl mx-auto">
                    <PartnerBriefSlider data={PartnersSliderContent} />
                </div>

                {/*<div className="relative z-10 pt-12 px-4 max-w-6xl mx-auto">*/}
                {/*    <PartnerBriefSlider data={PartnersSliderContent} />*/}
                {/*</div>*/}

                {/* How do I partner box with image */}
                <div className="relative z-20 w-full px-4 mt-8 lg:mt-14">
                    <div className="flex flex-col lg:flex-row justify-center items-stretch max-w-6xl mx-auto">
                        {/* Text Box */}
                        <div className="bg-white shadow-lg p-6 sm:p-8 w-full lg:w-1/2 flex flex-col">
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#1B3959] font-bold leading-snug mb-4 sm:mb-6">
                                HOW DO I PARTNER
                            </h1>
                            <ul className="text-black list-disc space-y-2 pl-5 text-sm sm:text-base lg:text-lg flex-grow">
                                <li>You can partner financially or in kind</li>
                                <li>
                                    Financially - you can give a one-time gift, Monthly, or annually.
                                    You can give 100, 1000, as God enables you
                                </li>
                                <li>In kind - You can partner as a co-worker and share skills</li>
                            </ul>
                        </div>

                        {/* Image Box */}
                        <div className="w-full lg:w-1/2">
                            <div className="h-full">
                                <img
                                    src="/assets/paybill.png"
                                    alt="Paybill"
                                    className="w-full h-full object-cover shadow-lg aspect-video lg:aspect-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/*section partner levels*/}
            <div className='px-[38px]'>
                <h1 className='pt-24 pb-[24px] text-center text-[#1B3959] text-5xl font-black'>PARTNER LEVELS</h1>
                <p className='text-center pb-8' >How to partner with us</p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='flex flex-col bg-white shadow-lg py-10 px-8 items-center text-center space-y-4'>
                        <img src="/assets/brown.png" className='' alt="brown"/>
                        <p className='text-center text-md text-[#475467]'>If your auto debit gift is at least $40/month, you will be considered an Aaron’s Army Partner. You can also submit an immediate one-time advanced gift of $400 to qualify for Aaron’s Army.</p>
                        <button className='py-3 px-[152px] bg-[#1B3959] rounded-[8px] text-white'>Get Started</button>
                    </div>

                    <div className='flex flex-col bg-white shadow-lg py-10 px-8 items-center text-center space-y-4'>
                        <img src="/assets/silver.png" className='' alt="brown"/>
                        <p className='text-center text-md text-[#475467]'>If your auto debit gift is at least $40/month, you will be considered an Aaron’s Army Partner. You can also submit an immediate one-time advanced gift of $400 to qualify for Aaron’s Army.</p>
                        <button className='py-3 px-[152px] bg-[#1B3959] rounded-[8px] text-white'>Get Started</button>
                    </div>

                    <div className='flex flex-col bg-white shadow-lg py-10 px-8 items-center text-center space-y-4'>
                        <img src="/assets/gold.png" className='' alt="brown"/>
                        <p className='text-center text-md text-[#475467]'>If your auto debit gift is at least $40/month, you will be considered an Aaron’s Army Partner. You can also submit an immediate one-time advanced gift of $400 to qualify for Aaron’s Army.</p>
                        <button className='py-3 px-[152px] bg-[#1B3959] rounded-[8px] text-white'>Get Started</button>
                    </div>
                </div>
            </div>

            <LatestNews />


            <section className='relative flex flex-col-reverse lg:flex-row  bg-[#1B3959] w-full mt-10'>
                <p className='text-xl lg:text-4xl text-white font-semibold pl-10 py-10 lg:pl-[121px] lg:py-[89px]'>&#34;God doesn’t call the qualified; He qualifies the called.&#34; — often attributed to various pastors and Christian leaders.
                    <br /><br />
                    Would you like a quote on a specific theme like faith, purpose, or perseverance?</p>
                <img src="/assets/Rev_Julian-Kyula.png" className='lg:-mt-[120px]' alt="Rev_Julian-Kyula" />
            </section>

            <Footer />


        </div>
    );
};

export default Page;