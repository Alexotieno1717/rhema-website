export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center text-white">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/hero-bg.jpg"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#654C1791] bg-opacity-50" />
            </div>

            {/* Content */}
            <div className="relative px-6 text-center">
                <h1 className="text-2xl lg:text-6xl font-bold leading-snug mb-6">
                    Lorem ipsum dolor sit amet, consectetur <br className="hidden md:inline" />
                    adipiscing elit,
                </h1>

                <p className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto lg:pt-[105px] pb-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <button className="bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-gray-200 transition">
                    Buy Ticket
                </button>
            </div>
        </section>
    );
}
