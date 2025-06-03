import Navbar from "@/components/navigation/Navbar";

export default function Home() {
    return (
        <>
            <main className="relative overflow-hidden">
                {/* Background Container */}
                <div className="custom-gradient mx-auto relative z-0 pb-[371px]">
                    {/* Background Waves */}
                    <img
                        src="/assets/Layer_1.png"
                        alt="Left wave"
                        className="w-[650px] h-full absolute top-0 left-0"
                        // className="absolute w-[921.96px] h-[489.94px] top-[-185.09px] left-[438.75px] rotate-[83.48deg]"
                    />

                    <img
                        src="/assets/Clip path group.png"
                        alt="Right wave"
                        className="w-[755.71px] h-full absolute top-0 right-0 "
                    />

                    {/* Navbar */}
                    <Navbar />

                    {/* Hero Section */}
                    <div className="pl-[624px] pt-[121px]">
                        <div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
                                Text Header
                            </h1>
                            <p className="text-white py-8 text-lg font-normal">
                                Body text here Body text hereBody text hereBody text hereBody text <br/>
                                hereBody text hereBody text here
                            </p>
                            <button className="bg-white py-2.5 px-6 text-black font-semibold text-md rounded-full hover:bg-opacity-90 transition">
                                Partner With us
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative flex w-full">
                    {/* Hero Image - Left Side */}
                    <div className="w-[641px] -mt-[543px] ">
                        <img
                            src="/assets/Rev_Julian-Kyula.png"
                            alt="Rev Julian"
                            className="w-full"
                        />

                    </div>

                    {/*Cards Section - Overlapping the background*/}
                    <div className="relative -mt-72">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { title: "The RHEMA Fest 2025", img: "/assets/rhema1.png" },
                                { title: "About JK Ministry", img: "/assets/rhema2.png" },
                                { title: "Ministry", img: "/assets/rhema3.png" },
                                { title: "Kingdom Market Place", img: "/assets/rhema4.png" },
                            ].map((card, i) => (
                                <div key={i} className="rounded-[6px] overflow-hidden w-[300px]">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full"
                                    />
                                    <div className="pt-4">
                                        <h3 className="text-md font-semibold text-black">{card.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}