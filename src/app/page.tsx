import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";

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
                            <div className="text-center">
                                <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-black">
                                    Empowering Communities. <br/> Transforming Systems
                                </h1>
                                <p className='pt-5 font-bold text-md'>MISSION | MINISTRY | MARKET PLACE</p>
                                <p className="text-black py-8 text-lg font-normal">
                                    JKM is a global apostolic movement empowering believers to thrive in faith, family, and the <br/> marketplace. Step into your calling and help shape the future of nations.
                                </p>
                            </div>
                            <div className='text-center md:text-left'>
                                <Link href={'/partner'} className='cursor-pointer lg:pl-[600px]'>
                                    <button className="bg-white py-2.5 px-6 text-black font-semibold text-md rounded-full hover:bg-opacity-90 transition cursor-pointer">
                                        Partner With us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col lg:flex-row w-full lg:-mt-56 z-20 px-6 lg:px-10">
                    {/* Hero Image - Left Side */}
                    <div className="hidden lg:block lg:-mt-36">
                        <img
                            src="/assets/Rev_Julian-Kyula.png"
                            alt="Rev Julian"
                            className="w-full h-auto max-h-[600px]"
                        />

                    </div>

                    {/*Cards Section - Overlapping the background*/}
                    <div className="relative mt-10 lg:px-10 ">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            {[
                                { title: "The RHEMA Fest 2025", img: "/assets/rhema1.png", logo: "/assets/rf-logo.png" },
                                { title: "About JK Ministry", img: "/assets/rhema2.png", logo: "/assets/rxp.png" },
                                { title: "Ministry", img: "/assets/rhema3.png", logo: "/assets/logo-white.png" },
                                { title: "Kingdom Market Place", img: "/assets/rhema4.png", logo: "/assets/logo-white.png" },
                            ].map((card, i) => (
                                <div key={i} className="relative rounded-[6px] overflow-hidden lg:w-[300px]">
                                    <Link href={'/rhemafest'}>
                                        <div className="relative w-full">
                                            {/* Image */}
                                            <img
                                                src={card.img}
                                                alt={card.title}
                                                className="w-full h-auto object-cover"
                                            />

                                            {/* Overlay with black background */}
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
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

                </div>
            </main>
        </>
    );
}