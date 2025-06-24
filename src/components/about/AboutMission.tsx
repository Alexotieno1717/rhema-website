import React from 'react';
import {IAboutContent} from "@/types";

interface AboutMissionProps {
    item: IAboutContent;
}

const AboutMission = ({item}: AboutMissionProps) => {

    // Group the vision, mission, and coreGoals into a single array
    const sections = [
        {
            title: item.visionTitle,
            description: item.visionDescription,
            icon: item.visionIcon,
        },
        {
            title: item.missionTitle,
            description: item.missionDescription,
            icon: item.missionIcon,
        },
        {
            title: item.coreGoalsTitle,
            goals: item.coreGoals,
            icon: item.coreGoalsIcon,
        },
    ];

    const bgColors = ['#BF9C4A', '#EEC55B', '#F2D56D'];

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-[106px]'>
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className='py-12 px-6 lg:px-9'
                        style={{ backgroundColor: bgColors[index] }}
                    >
                        <img src={section.icon} className='pb-[39px]' alt={section.title} />
                        <h1 className='text-2xl lg:text-4xl font-black pb-[21px]'>{section.title}</h1>

                        {section.goals ? (
                            <ol className='text-lg lg:text-xl font-medium list-decimal lg:w-[432px] px-6 space-y-3'>
                                {section.goals.map((goal, i) => (
                                    <li key={i}>{goal}</li>
                                ))}
                            </ol>
                        ) : (
                            <p className='text-lg lg:text-xl font-medium lg:w-[412px]'>{section.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default AboutMission;