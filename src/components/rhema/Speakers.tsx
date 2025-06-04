import React from 'react';

const Speakers = () => {
    return (
        <div className="px-6 lg:px-[102px]">
            <h1 className="pb-9 text-4xl md:text-5xl font-extrabold text-[#1B3959]">
                Speakers
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="flex flex-col">
                        <img
                            src={`/assets/speaker${index + 1}.png`}
                            alt={`Speaker ${index + 1}`}
                            className="w-full "
                        />
                        <h4 className="mt-4 text-lg font-semibold text-[#1B3959]">Olivia Rhye</h4>
                        <p className="text-sm text-blue-600 font-medium">Founder & CEO</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speakers;