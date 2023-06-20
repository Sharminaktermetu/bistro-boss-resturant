import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setTestimonial(data)
            })

    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}>
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    testimonial.map(review => <SwiperSlide key={review._id} >
                        <div className='p-24 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <p className='text-2xl text-yellow-600'>{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;