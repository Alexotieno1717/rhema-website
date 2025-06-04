import React from 'react';

const AboutMission = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-[106px]'>
                <div className='bg-[#BF9C4A] py-12 px-6 lg:px-[59px]'>
                    <img src="/assets/vision.png" className='pb-[59px]' alt="core"/>
                    <h1 className='text-2xl lg:text-4xl font-black pb-[21px]'>VISION</h1>
                    <p className='text-lg lg:text-xl font-medium lg:w-[412px]'>
                        To build a world where spiritual leadership, innovation, and enterprise work together to restore dignity, equity,
                        and opportunity to underserved communities globally.
                    </p>
                </div>
                <div className='bg-[#EEC55B] py-12 px-6 lg:px-9'>
                    <img src="/assets/mission.png" className='pb-[48px]' alt="core"/>
                    <h1 className='text-2xl lg:text-4xl font-black pb-[21px]'>MISSION</h1>
                    <p className='text-lg lg:text-xl font-medium lg:w-[412px]'>
                        To empower individuals, transform communities, and influence
                        systems by strategically integrating faith, leadership, and
                        sustainable development through impactful alliances.
                    </p>
                </div>
                <div className='bg-[#F2D56D] py-12 px-6 lg:px-9'>
                    <img src="/assets/core.png" className='pb-[39px]' alt="core"/>
                    <h1 className='text-2xl lg:text-4xl font-black pb-[21px]'>Core Goals</h1>
                    <ol className='text-lg lg:text-xl font-medium list-decimal lg:w-[432px] px-6'>
                        <li>Advance the Gospel through modern, relevant ministry.</li>
                        <li>Solve systemic community challenges via kingdom-driven enterprise.</li>
                        <li>Create equitable opportunities in education, finance, health, and innovation.</li>
                        <li>Mobilize strategic alliances for high-impact social transformation.</li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default AboutMission;