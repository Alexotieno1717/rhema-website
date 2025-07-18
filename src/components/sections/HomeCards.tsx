import React from 'react';
import Link from "next/link";
import {IHomeContent} from "@/types";

interface HomeCardsProps {
    items: IHomeContent
}

const HomeCards = ({items}: HomeCardsProps) => {
    return (
        <div className="relative mt-5 pr-0 lg:pr-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.data.map((card, i) => (
                    <div key={i} className="relative rounded-[6px] overflow-hidden group w-full flex flex-col min-h-[320px] min-w-0 h-full">
                        <Link href={'/rhemafest'}>
                            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] lg:h-[200px] xl:h-[220px] flex-shrink-0">
                                {/* Image */}
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />


                                {/* Overlay with black background */}
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                                    <img
                                        src={card.logo}
                                        alt="Logo"
                                        className="transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex-1 flex items-end">
                                <h3 className="text-md font-semibold text-black">{card.title}</h3>
                            </div>
                        </Link>
                    </div>


                ))}
            </div>
        </div>
    );
};

export default HomeCards;