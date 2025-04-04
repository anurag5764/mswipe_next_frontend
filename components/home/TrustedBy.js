import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import SwiperButton1 from './useables/SwiperButton1';

const TrustedBy = () => {

    const solutionSetData = [
        {
            img: "/images/trusted-by/01.png",
            description: "Humne jab unka machine liya, uske 8-10 dine mei hi kaafi changes dikhe humare business mei.",
            name: "Customer’s name",
            company: "K2C Pharmacy",
        },
        {
            img: "/images/trusted-by/02.png",
            description: "Mswipe ki POS machine se digital payments ke zariye humare customers aur hume payments lena aasaan ho gaya hai",
            name: "Customer’s name",
            company: "Happy Book Stall",
        },
        {
            img: "/images/trusted-by/03.png",
            description: "Humne jab unka machine liya, uske 8-10 dine mei hi kaafi changes dikhe humare business mei.",
            name: "Customer’s name",
            company: "K2C Pharmacy",
        }
    ];

    return (
        <section className='trusted-by-section'>
            <div className='container mt-3'>
                <div className='row text-center'>
                    <div className='col-12'>
                        <h2 className='head01'>Trusted by over 6 lakh <strong>businesses big and small</strong> </h2>
                    </div>
                </div>
            </div>
            <div className='container-pl-1'>

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
                                
                                speed={1200}
                                navigation={{
                                    nextEl: ".cust-swiper-button-next1",
                                    prevEl: ".cust-swiper-button-prev1",
                                }}
                                modules={[Keyboard, Autoplay, Navigation]}
                                breakpoints={{
                                    0: { slidesPerView: 1.1, spaceBetween: 20 },
                                    768: { slidesPerView: 1.5, spaceBetween: 20 },
                                    1200: { slidesPerView: 2.5, spaceBetween: 25 },
                                }}
                                className="mySwiper"
                            >
                                {solutionSetData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="target-by-card relative">
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <div className='img'>
                                                        <Image
                                                            src={item.img}
                                                            alt={item.name}
                                                            width={270}
                                                            height={311}
                                                            className="max-w-full text-center m-auto object-contain w-[40%] w-100 h-100"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-7'>
                                                    <div className="inner-content">

                                                        <p className="fs-18 ValkyRegular date text-[#D6B750] p-tag">
                                                            {item.description}
                                                        </p>
                                                        <div className='position-bottom'>
                                                            <div className="name">
                                                                {item.name}
                                                            </div>
                                                            <div className="company">
                                                                {item.company}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

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
        </section>
    );
};

export default TrustedBy;
