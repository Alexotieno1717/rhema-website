import {IHeroContent} from "@/types";

interface HeroSectionProps {
    data : IHeroContent
}

export default function HeroSection({data}: HeroSectionProps) {
    return (
        <section className="relative h-screen flex items-center justify-center text-white">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src={data.image}
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#654C1791] bg-opacity-50" />
            </div>

            {/* Content */}
            <div className="relative px-6 text-center">
                <h1 className="text-2xl lg:text-6xl font-bold leading-snug mb-6 whitespace-pre-line">{data.title}</h1>
            </div>
        </section>
    );
}
