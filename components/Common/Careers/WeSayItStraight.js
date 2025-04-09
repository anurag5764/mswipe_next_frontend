import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
const weSayData = [
    {
        title: "We do Things Right",
        description: "Most often, the correct path forward is daunting, but we never shy away from a challenge."
    },
    {
        title: "We Take Responsibility and Act",
        description: "For our products to be top-notch, we have to stand by our decisions - and take accountability when things get hard."
    },
    {
        title: "We Act as One Team",
        description: "There are no weak links or supporting roles. Excellence is everyone’s business and we help at any point we can."
    },
    {
        title: "We Hire Better People Than We Are",
        description: "Teams thrive when stacked with a wide range of expertise & personalities. That's why we value people who can add spice with their uniqueness."
    },
]
const drivenData = [
    {
        img: "/images/driven-by/01.png",
    },
    {
        img: "/images/driven-by/02.png",
    },
    {
        img: "/images/driven-by/03.png",
    },
];
const WeSayItStraight = () => {
    return (
        <>
            <section className='we-say-it-straight-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01 grd-bg'>We say it straight</h2>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            weSayData && weSayData.map((item, index) => (
                                <div className='col-md-6 mb-4' key={index}>
                                    <div className='we-say-item'>
                                        <div className='title'>{item?.title}</div>
                                        <div className='description'>{item?.description}</div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='head01'>
                                <div>Driven by passion </div>
                                <div>and collaboration</div>
                            </h2>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                Yeah, that’s right. We talk to each other openly and honestly. Why? Because we care about working in an environment where everyone communicates directly and respectfully.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='driven-by-passion'>
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
                                    0: { slidesPerView: 1.2, spaceBetween: 20 },
                                    768: { slidesPerView: 2, spaceBetween: 20 },
                                    1200: { slidesPerView: 3, spaceBetween: 25 },
                                }}
                                className="mySwiper"
                            >
                                {drivenData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="top-brands-card relative"
                                        >

                                            <div className="">
                                                <Image
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={400}
                                                    height={376}
                                                    className="max-w-full text-center m-auto object-contain w-[40%]"
                                                />

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                </div>

            </section>
        </>
    )
}

export default WeSayItStraight