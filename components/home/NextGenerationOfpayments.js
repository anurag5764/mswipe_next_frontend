import Fancybox from "../Fancybox";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/autoplay';

const NextGenerationOfpayments = () => {
    const BlogsData = [
        {
            image: "/images/blogs/business.png",
            title: "Business",
            description: "POS innovations transforming retail payments with smart solutions",
            link: ""
        },
        {
            image: "/images/blogs/finance.png",
            title: "Finance",
            description: "Payment gateways enhancing security for online transactions",
            link: ""
        },
        {
            image: "/images/blogs/tech.png",
            title: "Tech",
            description: "EMI solutions expanding payment flexibility for consumers nationwide",
            link: ""
        },

    ]
    const VlogsData = [
        {
            image: "/images/vlogs/business.png",
            title: "Business",
            description: "POS innovations transforming retail payments with smart solutions",
            link: "https://www.youtube.com/watch?v=DAxGk_mQX3A&ab_channel=MswipeTechnologies"
        },
        {
            image: "/images/vlogs/finance.png",
            title: "Finance",
            description: "Payment gateways enhancing security for online transactions",
            link: "https://www.youtube.com/watch?v=inCLljJSQ44&ab_channel=MswipeTechnologies"
        },
        {
            image: "/images/vlogs/tech.png",
            title: "Tech",
            description: "EMI solutions expanding payment flexibility for consumers nationwide",
            link: "https://www.youtube.com/watch?v=x8BO3fgbCSY&ab_channel=MswipeTechnologies"
        },

    ]
    return (
        <>
            <section className='next-generation-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center text-lg-start'>
                            <h2 className='head01'>
                                <div>Learn more about</div>
                                <div>the <strong>next generation</strong> of payments</div>
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='tabs-02'>
                                <Tabs
                                    defaultActiveKey="blogs"
                                    id="justify-tab-example"
                                    className="mb-3"
                                    justify
                                >
                                    <Tab eventKey="blogs" title="Blogs">
                                        <div className='row products-lists'>
                                        <Swiper
                                slidesPerView={3}
                                spaceBetween={25}
                                keyboard={{ enabled: true }}
                                loop={false}
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
                                modules={[Keyboard, Autoplay]}
                                breakpoints={{
                                    0: { slidesPerView: 1, spaceBetween: 20 },
                                    768: { slidesPerView: 1.8, spaceBetween: 20 },
                                    1200: { slidesPerView: 3, spaceBetween: 25 },
                                }}
                                className="mySwiper"
                            >
                                            {BlogsData && BlogsData.map((item, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                    <div className='' key={index}>
                                                        <div className='products-item'>
                                                            <div className='img'>
                                                                <Image width={323} height={323} className='w-100 h-100' src={item?.image} />
                                                            </div>
                                                            <div className='title'>{item?.title}</div>
                                                            <div className='description fs-18'>{item?.description}</div>
                                                            <div className='read-more'>
                                                                <Link href={item?.link} className="fs-18">Read more <Image width={24} height={25} src="/images/icons/arrow-right-circle.svg" alt="" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                              </SwiperSlide>
                                            )})}
                                        </Swiper>

                                        </div>
                                    </Tab>
                                    <Tab eventKey="vlogs" title="Vlogs">
                                        <div className='row products-lists'>
                                            {VlogsData && VlogsData.map((item, index) => {
                                                return (
                                                    <div className='col-4'>
                                                        <div className='products-item'>
                                                            <div className='img'>
                                                                <Fancybox
                                                                    options={{
                                                                        Toolbar: {
                                                                            display: {
                                                                                left: [],
                                                                                //right: ["close"],
                                                                            },
                                                                        },
                                                                        Thumbs: false,
                                                                        Hash: false,
                                                                    }}
                                                                >
                                                                    <Link href={item?.link} data-fancybox="locationmap"
                                                                    >
                                                                        <Image width={323} height={323} className='w-100 h-100' src={item?.image} />
                                                                        <div className="ame_txt_wrap">
                                                                            <div className="zoom_btn">
                                                                                <Image
                                                                                    src="/images/icons/play-button.svg"
                                                                                    alt="Video Play"
                                                                                    width={68}
                                                                                    height={68}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </Fancybox>
                                                            </div>
                                                            <div className='title'>{item?.title}</div>
                                                            <div className='description'>{item?.description}</div>
                                                            <div className='read-more'>
                                                                <Link href={item?.link} className="fs-18">Watch now <Image width={24} height={25} src="/images/icons/play-blue-icon.svg" alt="" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </Tab>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NextGenerationOfpayments