// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

import "./style.css";

export default function Slider() {
    return (
        <>
            <Swiper
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <img src="https://cdn.dsmcdn.com/ty1325/pimWidgetApi/mobile_20240523104100_az1242Marjinmobilebanner.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.dsmcdn.com/ty1239/pimWidgetApi/mobile_20240405100659_az1162.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.dsmcdn.com/ty1257/pimWidgetApi/mobile_20240416061933_az1150.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.dsmcdn.com/ty1310/pimWidgetApi/mobile_20240513090123_az1327.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.dsmcdn.com/ty1292/pimWidgetApi/mobile_20240503215325_az1324.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
