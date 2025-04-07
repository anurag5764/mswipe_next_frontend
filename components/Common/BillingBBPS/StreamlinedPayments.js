import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import { Accordion, ProgressBar } from 'react-bootstrap';
const accordionData = [
    {
        key: "0",
        number: "1",
        title: "Seller creates invoices",
        description:
            "The seller generates invoices effortlessly using Mswipe Bharat Connect platform or their existing accounting software, ERP system, ensuring no disruption to their current workflow.",
        image: "/images/streamlined-payment/01.svg",
    },
    {
        key: "1",
        number: "2",
        title: "Instant access for buyers",
        description:
            "Buyers can instantly access the created invoices directly within their own ERP system, allowing for seamless collaboration without additional steps.",
        image: "/images/streamlined-payment/02.svg",
    },
    {
        key: "2",
        number: "3",
        title: "Review and action",
        description:
            "Buyers can Accept the invoice if all details are accurate, Reject the invoice if corrections are needed, Return the invoice with comments for amendments, This ensures clarity and eliminates miscommunication.",
        image: "/images/streamlined-payment/03.svg",
    },
    {
        key: "3",
        number: "4",
        title: "Hassle-free payments",
        description:
            "For accepted invoices, buyers can make payments directly from their ERP system via: Bank transfers, Corporate cards, Payment gateways.",
        image: "/images/streamlined-payment/04.svg",
    },
    {
        key: "4",
        number: "5",
        title: "Real-time transaction updates",
        description:
            "Both sellers and buyers receive real-time updates on the transaction status.",
        image: "/images/streamlined-payment/05.svg",
    },
];
const StreamlinedPayments = () => {
    const [activeKey, setActiveKey] = useState("0");
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(accordionData[0].image);

    // Animate progress and auto-slide
    useEffect(() => {
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    slideToNextTab();
                    return 100;
                }
                return prev + 1;
            });
        }, 50);
        return () => clearInterval(interval);
    }, [activeKey]);

    const slideToNextTab = () => {
        const nextIndex = (parseInt(activeKey) + 1) % accordionData.length;
        const nextKey = accordionData[nextIndex].key;
        setActiveKey(nextKey);
        setImage(accordionData[nextIndex].image);
    };

    const handleTabClick = (key) => {
        setActiveKey(key);
        const found = accordionData.find((item) => item.key === key);
        if (found) {
            setImage(found.image);
        }
    };



    return (
        <>
            <section className='accept-all-payments-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='head01'>
                            <div>Streamlined Payment Workflow</div>
                            <div>with<strong> Bharat Connect for Business</strong></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="row sp-bg">
                                <div className="col-lg-6">
                                    <Accordion
                                        className='accordion-03'
                                        activeKey={activeKey}
                                        onSelect={handleTabClick}
                                    >
                                        {accordionData.map((item) => (
                                            <Accordion.Item key={item.key} eventKey={item.key}>
                                                <Accordion.Header>
                                                    <span className='number'>{item.number}</span> {item.title}
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    {item.description}
                                                    <div className="mt-3">
                                                        {activeKey === item.key && (
                                                            <ProgressBar now={progress} label={`${progress}%`} />
                                                        )}
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>

                                <div className="col-lg-6">
                                    <div className="sp-container">
                                        <div id="banner" className="sp-banner">
                                            <img className="img-fluid" src={image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StreamlinedPayments