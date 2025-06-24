import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";
import HomeCards from "@/components/sections/HomeCards";
import {HomeContent} from "@/mock";

export default function Home() {
    return (
        <>
            <main className="relative overflow-hidden">
                {/* Background Container */}
                <div
                    className="relative pb-24 lg:pb-48 z-10"
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
                    <Navbar />

                    {/* Hero Section */}
                    <div className="pl-5 lg:pl-[24px]">
                        <div className=''>
                            <div className='z-20 lg:hidden'>
                                <img
                                    src="/assets/Rev_Julian-Kyula.png"
                                    alt="Rev Julian"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <div className="text-center">
                                    <h1 className="text-2xl lg:text-3xl xl:text-6xl font-extrabold text-black">
                                        Empowering Communities. <br/> Transforming Systems
                                    </h1>
                                    <p className='pt-5 font-bold text-md'>MISSION | MINISTRY | MARKET PLACE</p>
                                    <p className="text-black py-8 text-md xl:text-lg font-normal">
                                        JKM is a global apostolic movement empowering believers to thrive in faith, family, and the <br/> marketplace. Step into your calling and help shape the future of nations.
                                    </p>
                                </div>
                                <div className='pl-0 lg:pl-[300px] xl:pl-[590px] text-center md:text-left'>
                                    <Link href={'/partner'} className='cursor-pointer'>
                                        <button className="bg-white py-2.5 px-6 text-black font-semibold text-md rounded-full hover:bg-opacity-90 transition cursor-pointer">
                                            Partner With us
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col lg:flex-row w-full md:-mt-24 lg:-mt-54 z-20 px-6 lg:px-10">
                    {/* Hero Image - Left Side */}
                    <div className="hidden lg:block lg:-mt-10 xl:-mt-36">
                        <img
                            src="/assets/Rev_Julian-Kyula.png"
                            alt="Rev Julian"
                            className="w-full h-auto max-h-[600px]"
                        />

                    </div>

                    {/*Cards Section - Overlapping the background*/}
                    <HomeCards items={HomeContent} />

                </div>
            </main>
        </>
    );
}