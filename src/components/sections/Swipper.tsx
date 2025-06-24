import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import {IEvents} from "@/types";

interface SwipperProps {
    items: IEvents;
}

export default function Swipper({items}: SwipperProps) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                {items.bannerImage.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img src={item} className='w-full' alt="Event Banner" />
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
