import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import SwiperButton1 from '../../home/useables/SwiperButton1';
const solutionSetData = [
    {
        logo: "/images/explore-more-product/wisepos-plus.svg",
        img: "/images/explore-more-product/wisepos-plus-img.svg",
        title: "Wisepos Plus",
    },
    {
        logo: "/images/explore-more-product/wisepos-pro.svg",
        img: "/images/explore-more-product/wisepos-pro-img.svg",
        title: "Wisepos Pro",
    },
    {
        logo: "/images/explore-more-product/wisepos-neo.svg",
        img: "/images/explore-more-product/wisepos-neo-img.svg",
        title: "Wisepos Neo",
    },
    {
        logo: "/images/explore-more-product/wisepos-mini.svg",
        img: "/images/explore-more-product/wisepos-mini-img.svg",
        title: "Wisepos Mini",
    },
    {
        logo: "/images/explore-more-product/boombox-x1.svg",
        img: "/images/explore-more-product/boombox-x1-img.svg",
        title: "Boombox X1",
    },
    {
        logo: "/images/explore-more-product/boombox-b1.svg",
        img: "/images/explore-more-product/boombox-b1-img.svg",
        title: "Boombox B1",
    },
];
const ExploreMore = () => {
    return (
        <>
            <section className='explore-more-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>Explore more products</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="mt-2 swiper-custom swiper-custom-center">
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

                                    speed={1200}
                                    navigation={{
                                        nextEl: ".cust-swiper-button-next1",
                                        prevEl: ".cust-swiper-button-prev1",
                                    }}
                                    modules={[Keyboard, Autoplay, Navigation]}
                                    breakpoints={{
                                        0: { slidesPerView: 1, spaceBetween: 20 },
                                        768: { slidesPerView: 1.5, spaceBetween: 20, centeredSlides: true, },
                                        1200: { slidesPerView: 3.4, spaceBetween: 25 },
                                    }}
                                    className="mySwiper"
                                >
                                    {solutionSetData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="explore-more-card relative">
                                                <div className='box'>
                                                    <div className='logo'><Image width={116} height={26} src={item?.logo} /></div>
                                                    <div className='product-image'><Image width={106} height={226} src={item?.img} /></div>
                                                </div>
                                                <div className='title'>{item?.title}</div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="w-full md:hidden block mt-[50px]">
                                    <div className="w-full flex justify-center items-center h-full"
                                    >
                                        <SwiperButton1
                                            next={"cust-swiper-button-next1"}
                                            prev={"cust-swiper-button-prev1"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default ExploreMore