"use client"
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import swipercore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import {IPartnersSlider} from "@/types";
import PartnersBriefCard from "@/components/sections/PartnersBriefCard";

interface IPartnersBriefSliderProps {
    data: IPartnersSlider;
}

swipercore.use([Autoplay]);

/**
 * @param data IPartnersSlider
 * @returns items of type IPartnersSlider
 */
const PartnerBriefSlider = ({data}: IPartnersBriefSliderProps) => {
    const [play, setPlay] = useState(false)

    const handlemouseenter = () => {
        setPlay(true)
    };
    const handlemouseleave = () => {
        setPlay(false)
    };

    return (
        <section className=" ">
            <main
                className="overflow-visible hidden lg:flex"
                onMouseEnter={handlemouseenter}
                onMouseLeave={handlemouseleave}
            >
                <Marquee play={play} autoFill className="overflow-x-visible flex" style={{overflowX: 'visible'}}>
                    {data.data.map((item) => (
                        <PartnersBriefCard key={item.id} item={item} />
                    ))}
                </Marquee>
            </main>


            <main className="px-4 lg:hidden">
                <Swiper
                    spaceBetween={14}
                    slidesPerView="auto"
                    modules={[Autoplay, Keyboard]}
                    keyboard
                    speed={3000}
                    onSwiper={(swiper) => {
                        swiper.wrapperEl.style.transitionTimingFunction = 'linear';
                    }}
                    className="overflow-visible"
                >
                    {data.data.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="!w-[85%] sm:!w-[351px] flex-shrink-0"
                        >
                            <PartnersBriefCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>



        </section>
    )
};

export default PartnerBriefSlider;