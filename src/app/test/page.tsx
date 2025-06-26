import React from 'react';
import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";
import HomeCards from "@/components/sections/HomeCards";
import {HomeContent} from "@/mock";

const Page = () => {
    return (
        <div>
            <main className="relative overflow-visible">
                <div
                    className="relative pb-20 lg:pb-48 z-10 max-h-[150vh] md:max-h-[100vh] lg:max-h-[90vh] px-2 lg:px-0"
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

                    <div className="flex flex-col items-center lg:items-start lg:flex-row pt-10 lg:pt-0">
                        <div>
                            <img src="/assets/Rev_Julian-Kyula.png" className="pt-0 lg:pt-10" alt="Rev Julian"/>
                        </div>
                        <div>
                            <div className="text-center lg:text-left w-3xl">
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
                                <p className="text-black py-8 text-md xl:text-lg font-normal">
                                    Empowering Communities. Transforming Systems. To build a world where spiritual leadership, innovation, and enterprise work together
                                </p>
                                <Link href={'/partner'} className='cursor-pointer'>
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
};

export default Page;