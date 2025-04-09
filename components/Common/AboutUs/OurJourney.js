import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/autoplay';
const ourJorneyData = [
    {
        img: "/images/our-journey/01.png",
        description: "When it all began",
        year:"2011"
    },
    {
        img: "/images/our-journey/02.png",
        description: "Mswipe first POS solution launched in India",
        year:"2012"
    },
    {
        img: "/images/our-journey/03.png",
        description: "Wisepad - Classic mPOS terminal was launched",
        year:"2013"
    },
    {
        img: "/images/our-journey/04.png",
        description: "Transaction processing gateway One of the few players in the market to introduce NFC/tap to pay, card payment solutions with Standalone MPOS.",
        year:"2014"
    },
    {
        img: "/images/our-journey/05.png",
        description: "POS loans were launched",
        year:"2015"
    },
    {
        img: "/images/our-journey/06.png",
        description: "Wisepad G2 - The second generation mPOS was launched",
        year:"2016"
    },
    {
        img: "/images/our-journey/07.png",
        description: "Wisepos - India's first smart POS terminal was launched",
        year:"2017"
    },
    {
        img: "/images/our-journey/08.png",
        description: "In-house switch was launched",
        year:"2018"
    },

    {
        img: "/images/our-journey/09.png",
        description: "Launched several value added platforms - EMI, Mcards, Brand portal and the Money Store",
        year:"2019"
    },
    {
        img: "/images/our-journey/10.png",
        description: "<span> 4G standalone mPOS</span> <span>Online PG option for websites, apps </span> <span>ATM Express </span> <span>Moneyback Card </span>",
        year:"2020"
    },
    {
        img: "/images/our-journey/11.png",
        description: "<span>Wisepad GO </span> <span>Wisepos Neo</span><span>Pay by Link - Netbanking </span>",
        year:"2021"
    },
    {
        img: "/images/our-journey/12.png",
        description: "<span>Introduced Wisepos Go device that works like a smartphone</span><span>Launched Boombox payment soundbox</span>",
        year:"2022"
    },
    {
        img: "/images/our-journey/13.png",
        description: "<span>Dynamic Boombox</span><span>Mini POS machine introduced Wisepad G4</span>",
        year:"2023"
    },
    {
        img: "/images/our-journey/14.png",
        description: "<span>4G standalone mPOS</span><span>Online PG option for websites, apps</span><span>ATM Express</span><span>Moneyback Card</span>",
        year:"2024"
    },
];
const OurJourney = () => {
  return (
    <>
        <section className='our-journey-section'>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-12'>
                        <h2 className='head01'>Our Journey</h2>
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
                                modules={[Keyboard, Autoplay,]}
                                breakpoints={{
                                    0: { slidesPerView: 1.2, spaceBetween: 20 },
                                    768: { slidesPerView: 1.8, spaceBetween: 0 },
                                    1200: { slidesPerView: 3.5, spaceBetween: 0 },
                                }}
                                className="mySwiper"
                            >
                                {ourJorneyData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="our-journey-card relative">

                                            
                                                <div className='img'>
                                                <Image
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={402}
                                                    height={256}
                                                    className="max-w-full text-center m-auto object-contain w-[40%]"
                                                />
                                                </div>
                                                <div className="inner-content">
                                                    <p className="fs-18" dangerouslySetInnerHTML={{__html: item.description}}>
                                                        
                                                    </p>
                                                    <div className='year-wrap'><span className='year'>{item?.year}</span></div>
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

export default OurJourney