import React from 'react';

const AboutBanner = () => {
    return (
        <div>
            <section className="relative h-[30vh] lg:h-[65vh] flex items-center justify-center text-white">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/RXP.jpg"
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 bg-opacity-50" />
                </div>

                {/* Content */}
                <div className="relative px-6 text-center">
                    <h1 className="custom-gradient-text text-4xl pt-14 lg:pt-0 lg:text-6xl font-bold leading-snug mb-6">
                        About JKM Global
                    </h1>
                </div>
            </section>

            <div className='flex justify-center lg:text-center px-6 lg:px-0 pt-10 lg:pt-16.5'>
                <p className='lg:w-[881px] text-md font-medium'>
                    A movement of faith, fire, and legacy. Join the thousands called to rise.  <br/> <br/>

                    Rhema Feast is a significant annual spiritual event that began in 2015. This year&#39;s Rhema Feast will take place 1st -5th September 2025 <br/>
                    We are an apostolic movement led by visionary Bishop and entrepreneur Julian Kyula, and its mission is to share the unadulterated and authentic word of God to nations and all generations.
                    <br/> <br/>
                    KM Global Ministries has several expressions under it, mainly RXP, JK Global Business Summits, Jk Global Partners, Media Expansion,  Rhema Feast
                    <br/><br/>
                    We want to be able to impact more people and generations , transform lives and become a  movement dedicated to spreading the Gospel, and discipling nations with the truth and power of Jesus Christ

                </p>
            </div>
        </div>
    );
};

export default AboutBanner;