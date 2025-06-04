import React from 'react';

const RhemaInfo = () => {
    return (
        <div>
            <div className="px-6 pt-10 lg:pl-[169px] lg:pr-[180px] lg:pt-[39px]">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-[728px]">
                        <h1 className="custom-gradient-text text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase pb-6">
                            RHEMA FEAST <br className='hidden lg:block'/> 2025
                        </h1>
                        <p className="text-[#1B3959] text-base font-medium leading-relaxed">
                            A movement of faith, fire, and legacy. Join the thousands called to rise. <br/><br/>

                            Rhema Feast is a significant annual spiritual event that began in 2015. This year&#39;s Rhema Feast will take place 1st–5th September 2025.<br/>

                            We are an apostolic movement led by visionary Bishop and entrepreneur Julian Kyula, and its mission is to share the unadulterated and authentic word of God to nations and all generations.<br/><br/>

                            Rhema Feast is an event where believers from around the globe gather to &#39;Feast&#39; on God&#39;s Word, engage in worship, prayer and fellowship. This year&#39;s event will also include a business forum to help leaders integrate their faith with their work to make a great Kingdom impact.
                        </p>
                    </div>

                    <div className="custom-gradient text-white lg:w-[403px] lg:h-[514px] lg:mt-[49px] space-y-8 py-[57px] px-16 rounded-2xl">
                        <div className="text-center">
                            <h1 className="text-6xl font-semibold">50,000+</h1>
                            <p className="text-lg font-medium">lives impacted</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-6xl font-semibold">12</h1>
                            <p className="text-lg font-medium">nations</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-6xl font-semibold">10,000+</h1>
                            <p className="text-lg font-medium">Empowering faith-driven entrepreneurs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 py-7 lg:pl-[102px] lg:py-14 ">
                <img src="/assets/youtube3.png" className='w-full' alt=""/>
            </div>
        </div>
    );
};

export default RhemaInfo;