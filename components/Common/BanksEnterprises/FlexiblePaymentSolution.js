import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const frontendData = [
    {
        img: "/images/frontend/01.png",
        title: "POS Terminals",
        description: "Cutting-edge Smart POS solution designed for seamless and secure transactions.",
        btn: {
            text: "Explore more",
            url: ""
        }
    },
    {
        img: "/images/frontend/02.png",
        title: "Soundbox",
        description: "All-in-one Soundbox+POS terminal that provides real-time audio confirmations for every transaction.",
        btn: {
            text: "Explore more",
            url: ""
        }
    },
    {
        img: "/images/frontend/03.png",
        title: "Online",
        description: "Effortlessly scale e-commerce with Mswipe’s easy integration and seamless online solutions.",
        btn: {
            text: "Learn more",
            url: ""
        }
    },
];

const FlexiblePaymentSolution = () => {
    return (
        <>
            <section className='banks-enterprises-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='sub-head01'>
                                <Image className='me-1' width={24} height={24} src="/images/icons/tech.svg" />    FRONT-END
                            </div>
                            <h2 className='head01'><strong>Flexible payment solutions</strong> for your customers</h2>
                            <div className="mb-4 d-flex align-items-center">
                                <Link href="#" type="submit" class="btn btn-primary btn-submit">Partner with Mswipe<img src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>
                            </div>

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
                                    autoplay={false}
                                    // autoplay={{
                                    //     delay: 2500,
                                    //     disableOnInteraction: false,
                                    // }}
                                    pagination={{ clickable: true }}
                                    speed={1200}
                                    navigation={{
                                        nextEl: ".cust-swiper-button-next1",
                                        prevEl: ".cust-swiper-button-prev1",
                                    }}
                                    modules={[Keyboard, Autoplay, Navigation, Pagination]}
                                    breakpoints={{
                                        0: { slidesPerView: 1, spaceBetween: 20 },
                                        768: { slidesPerView: 2, spaceBetween: 20 },
                                        1200: { slidesPerView: 3, spaceBetween: 35 },
                                    }}
                                    className="mySwiper"
                                >
                                    {frontendData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                className="frontend-card relative">

                                                <div className="">
                                                    <Image
                                                        src={item.img}
                                                        alt={item.name}
                                                        width={402}
                                                        height={256}
                                                        className="text-center m-auto object-contain img"
                                                    />
                                                    <div className="inner-content">
                                                        <h3 className="">
                                                            {item.title}
                                                        </h3>
                                                        <p className="">
                                                            {item.description}
                                                        </p>
                                                        <div>
                                                            <Link href={item?.btn?.url} type="submit" class="btn btn-outline-secondary btn-submit-outline d-inline-flex">{item?.btn?.text} <img className='ms-1' src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>
                                                        </div>
                                                    </div>

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
        </>
    )
}

export default FlexiblePaymentSolution