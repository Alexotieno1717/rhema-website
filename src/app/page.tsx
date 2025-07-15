import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";
import HomeCards from "@/components/sections/HomeCards";
import {HomeContent} from "@/mock";
import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 relative overflow-visible">
                <div
                    className="relative min-h-screen pt-20 pb-4 md:pb-6 z-10 px-2 lg:px-0 flex flex-col"
                    
                    style={{
                        background: 'linear-gradient(to right, #FFEA8E, #D3A84B)',
                    }}
                >
                    <img
                        src="/assets/Clip path group.png"
                        alt="Right wave"
                        className="hidden lg:block w-[755.71px] h-full absolute top-0 right-0 -z-10"
                    />

                    {/* Navbar */}
                    <Navbar/>
                    {/* Padding for fixed navbar is now handled by pt-20 above */}

                    <div className="flex flex-col items-center lg:flex-row pt-10 lg:pt-0">
                        <div className="flex lg:items-end">
                            <img src="/assets/Rev_Julian-Kyula.png" className="pt-0" alt="Rev Julian"/>
                        </div>
                        <div>
                            <div className="text-center lg:text-left lg:w-3xl">
                                <h1 className="text-2xl lg:text-3xl xl:text-6xl font-extrabold text-black">
                                    Empowering Communities. Transforming Systems
                                </h1>
                                <div className="flex space-x-4 uppercase pt-5 font-bold text-md ">
                                    <h1>Mission</h1>
                                    <div className="border border-r border-black"></div>
                                    <h1>Ministry</h1>
                                    <div className="border border-r border-black"></div>
                                    <h1>market place </h1>
                                </div>
                                <p className="text-black mt-6 py-8 text-md xl:text-lg font-normal">
                                    Empowering Communities. Transforming Systems. To build a world where spiritual leadership, innovation, and enterprise work together
                                </p>
                                <Link href={'/partner#levels'} className='cursor-pointer'>
                                    <button
                                        className="bg-white py-2.5 px-6 text-black font-semibold text-md rounded-full hover:bg-opacity-90 transition cursor-pointer">
                                        Partner With us
                                    </button>
                                </Link>
                            </div>

                            <div>
                                {/*Cards Section - Overlapping the background*/}
                                <HomeCards items={HomeContent}/>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}