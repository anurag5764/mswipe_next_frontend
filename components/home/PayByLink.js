import dynamic from 'next/dynamic';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
});

const PayByLink = () => {
    return (
        <>
            <div className='row mb-5 align-items-center'>
                <div className='col-md-4'>
                    <ReactPlayer
                        className="inner-banner-video"
                        loop
                        muted
                        playbackRate={1}
                        playing={true}
                        url="/video/Pay by link.mp4"
                    ></ReactPlayer>
                </div>
                <div className='col-md-8'>
                    <div className='item-content ps-5 text-center text-md-start'>
                        <h3 className='head03'>Pay by link</h3>
                        <p className='fs-18'>Collect Payments from the Comfort of Your Shop – No Integration Needed! With Mswipe Pay by Link, merchants can easily send payment links via SMS, email, or WhatsApp, allowing customers to pay effortlessly. Whether through net banking, mobile banking, credit card, debit card, prepaid card, or UPI, this seamless solution offers ultimate convenience for both merchants and customers. Streamline your payment process without the hassle of integration, and provide a smooth, secure
                        transaction experience every time.</p>
                        <Link href="">Learn more <Image className='ms-2' width={8} height={12} src="/images/icons/greater-arrow-right.svg" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayByLink