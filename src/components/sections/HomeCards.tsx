import React from 'react';
import Link from "next/link";
import {IHomeContent} from "@/types";

interface HomeCardsProps {
    items: IHomeContent
}

const HomeCards = ({items}: HomeCardsProps) => {
    return (
        <div className="relative mt-5 pr-0 lg:pr-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {items.data.map((card, i) => (
                    <div key={i} className="relative rounded-[6px] overflow-hidden ">
                        <Link href={'/rhemafest'}>
                            <div className="relative w-full">
                                {/* Image */}
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full lg:w-[230px] xl:w-[300px] h-full object-cover"
                                />

                                {/* Overlay with black background */}
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    {/* Logo on top */}
                                    <img src={card.logo} alt="Logo" className="" />
                                </div>
                            </div>

                            <div className="pt-4">
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