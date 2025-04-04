import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const SolutionSets = () => {

    const solutionSetData = [
        {
            img: "/images/solution-sets/01.png",
            title: "Restaurant and cafes",
            description: "Provide holistic payment options to your customers with cards, UPI or option to pay with your Pluxee wallet. Simplify your operations with Smart POS for seamless payments, table management, orders, tips, billing and printing. Easily integrate billing and order management with low-code setup.",
        },
        {
            img: "/images/solution-sets/02.png",
            title: "Retail chains & supermarket",
            description: "Streamline the customer checkout process with a fast, seamless and efficient solution.Mswipe easily integrates with billing software, supports quick barcode scanning, and enables customer record management, offering a range of payment options, including  Pluxee. Reduce wait times with self-checkout kiosks solutions.",
        },
        {
            img: "/images/solution-sets/03.png",
            title: "Apparel & Accessories",
            description: "Integrated billing solution with a host of payment devices based on store requirements. Provide holistic payment solutions including payment links, static or dynamic QR or debit, credit or prepaid cards. For e-commerce, use our plug-and-play offering or low-code integration solutions for your online business.",
        },
        {
            img: "/images/solution-sets/04.png",
            title: "Hospitals & Pharmacies",
            description: "Seamlessly integrate Mswipe payment solutions with your business software via APIs or SDKs to manage customer records. Provide holistic payment solutions including payment links, UPI, or cards, reducing patients' and relatives' waiting time with faster, hassle-free transactions.",
        },
        {
            img: "/images/solution-sets/05.png",
            title: "Electronics",
            description: "Get flexible options like card payments, QR codes, soundbox and payment links to ensure smooth transactions for customers. Opportunity to increase sales with brand and bank EMI options, making high-value purchases more accessible and affordable for customers.",
        },
        {
            img: "/images/solution-sets/06.png",
            title: "Jewellery",
            description: "Secure, fully compliant payment solutions designed for high-value transactions.Offer your valued customers a range of payment options: card, QR, Pay by Link for an in-store payment experience or provide easy at-home payments for home trials and deliveries.",
        },
        {
            img: "/images/solution-sets/07.png",
            title: "Salons and Spas",
            description: "Mswipe provides salons with an affordable, efficient payment solution, supporting card, static QR, and soundbox payments—all with real-time audio confirmations on both the soundbox and merchant app so you can focus on your clients without interruptions.",
        },
        {
            img: "/images/solution-sets/08.png",
            title: "Others",
            description: "Mswipe’s full range of front-end and back-end technology is designed to simplify digital transactions for businesses of all sizes, across all categories. The front-end online and offline solutions also make it convenient for professionals like doctors, freelancers, lawyers, and real estate agents.",
        },
    ];

    return (
        <section className='solution-sets-section'>
            <div className='container mt-3'>
                <div className='row text-center'>
                    <div className='col-12'>
                        <h2 className='head01'>Solution sets for every business <strong>type</strong> and <strong>size</strong></h2>
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
                                pagination={{ clickable: true }}
                                speed={1200}
                                navigation={{
                                    nextEl: ".cust-swiper-button-next1",
                                    prevEl: ".cust-swiper-button-prev1",
                                }}
                                modules={[Keyboard, Autoplay, Navigation, Pagination]}
                                breakpoints={{
                                    0: { slidesPerView: 1.2, spaceBetween: 20 },
                                    768: { slidesPerView: 1.8, spaceBetween: 20 },
                                    1200: { slidesPerView: 3.2, spaceBetween: 25 },
                                }}
                                className="mySwiper"
                            >
                                {solutionSetData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className={`solution-set-card relative ${index % 2 === 0 ? 'bg-[#0E2330]' : 'bg-[#0E302E]'}`}
                                        >

                                            <div className="flex flex-col h-full w-full relative z-[2]">
                                                <Image
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={402}
                                                    height={256}
                                                    className="max-w-full text-center m-auto object-contain w-[40%]"
                                                />
                                                <div className="inner-content">
                                                    <h3 className="">
                                                        {item.title}
                                                    </h3>
                                                    <p className="ValkyRegular date text-[#D6B750] p-tag">
                                                        {item.description}
                                                    </p>
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
    );
};

export default SolutionSets;
