import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
});
const AboutUsBanner = () => {
    return (
        <>
            <section className='about-us-banner-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='about-us-banner'>
                                <ReactPlayer
                                    className="banner_video"
                                    loop
                                    muted
                                    playbackRate={1}
                                    playing={true}
                                    url="/video/about-us-banner.mp4"
                                ></ReactPlayer>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='container aboutus-content'>
                    <div className='row text-center d-none d-lg-block'>
                        <div className='col-12'>
                            <h2 className='head001'>Empowering Payments</h2>
                        </div>
                    </div>
                    <div className='row  d-block d-lg-none'>
                        <div className='col-12'>
                            <h2 className='head001'>
                                <div>Empowering Payments by</div>
                                <div>Redefining Transactions</div>    
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 d-none d-md-block'>
                            <div className='img'>
                                <Image width={572} height={345} className='w-100 h-100' src="/images/aboutus.png" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='head-logo'>About <Image width={105} height={34} src="/images/mswipe-logo.svg" /></div>
                            <div className='fs-18'>
                                Mswipe, an RBI-approved payment aggregator in India, is a leader in omni-channel digital payment solutions serving merchants across largest cities and the smallest towns. Mswipe offers a full suite of payment solutions with frontend and backend technology-POS devices, QR soundboxes and payment gateways for seamless payments for merchants, banks and enterprises. It encompasses robust software offerings built in-house such as switch solutions for all payment methods, risk management, merchant onboarding to settlement and terminal telemetry solutions. With this integrated approach, we address the need for secure, efficient and scalable payment infrastructure in India and beyond.
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-4'>
                            <div className="counter-wrap">
                                <CountUp start={0} end={800}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <div className='number'>
                                                <span ref={countUpRef} /> +
                                            </div>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <div className='title'>Cities & towns</div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="counter-wrap">
                                <CountUp start={0} end={1600}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <div className='number'>
                                                <span ref={countUpRef} /> +
                                            </div>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <div className='title'>Pin codes</div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="counter-wrap">
                                <CountUp start={0} end={650}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <div className='number'>
                                                <span ref={countUpRef} /> +
                                            </div>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <div className='title'>Service engineers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsBanner