import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const TopBrands = () => {

    const solutionSetData = [
        {
            img: "/images/brand-logo/01.svg",
        },
        {
            img: "/images/brand-logo/02.svg",
        },
        {
            img: "/images/brand-logo/03.svg",
        },
        {
            img: "/images/brand-logo/04.svg",
        },
        {
            img: "/images/brand-logo/05.svg",
        },
        {
            img: "/images/brand-logo/06.svg",
        },
        {
            img: "/images/brand-logo/07.svg",
        },
        {
            img: "/images/brand-logo/08.svg",
        },
        {
            img: "/images/brand-logo/01.svg",
        },
        {
            img: "/images/brand-logo/02.svg",
        },
    ];

    return (
        <section className='top-brands-section'>
            <div className='container'>
            <div className='row text-center'>
                    <div className='col-12'>
                        <h2 className='head01'>Empowering <strong>100+ top brands</strong></h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className="mt-2 swiper-custom">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={25}
                                keyboard={{ enabled: true }}
                                loop={true}
                                // autoplay={false}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                                speed={1200}
                                navigation={{
                                    nextEl: ".cust-swiper-button-next1",
                                    prevEl: ".cust-swiper-button-prev1",
                                }}
                                modules={[Keyboard, Autoplay, Navigation, Pagination]}
                                breakpoints={{
                                    0: { slidesPerView: 3.2, spaceBetween: 20 },
                                    768: { slidesPerView: 5, spaceBetween: 20 },
                                    1200: { slidesPerView: 9, spaceBetween: 25 },
                                }}
                                className="mySwiper"
                            >
                                {solutionSetData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="top-brands-card relative"
                                        >

                                            <div className="">
                                                <Image
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={120}
                                                    height={25}
                                                    className="max-w-full text-center m-auto object-contain w-[40%]"
                                                />

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBrands;
