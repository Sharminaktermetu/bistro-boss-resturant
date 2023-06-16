import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={'---From 11:00am to 10:00pm---'}
            heading={'ORDER ONLINE'}
            >

            </SectionTitle>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper my-16 opacity-75"
        >
           
            <SwiperSlide>
                <img src={slide1} alt="" />
                <p className='text-4xl font-semibold -mt-16 text-center text-white'>Pizza</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <p className='text-4xl font-semibold -mt-16 text-center text-white'>Pasta</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <p className='text-4xl font-semibold -mt-16 text-center text-white'>Soup</p></SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <p className='text-4xl font-semibold -mt-16 text-center text-white'>Dessert</p></SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <p className='text-4xl font-semibold -mt-16 text-center text-white'>Salad</p></SwiperSlide>

        </Swiper>
        </section>
    );
};

export default Category;