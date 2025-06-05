import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function Swipper() {
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
                <SwiperSlide>
                    <img src="/assets/event_banner.png" className='w-full' alt="Event Banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/swipper1.png" className='w-full' alt="Event Banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/swipper2.png" className='w-full' alt="Event Banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/swipper3.png" className='w-full' alt="Event Banner" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
