import dynamic from 'next/dynamic';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
});

const SmartPOS = () => {
    return (
        <>
            <div className='row bg-grey text-light brad-10 p50 align-items-center'>
                <div className='col-lg-4'>
                    <ReactPlayer
                        className="inner-banner-video"
                        loop
                        muted
                        playbackRate={1}
                        playing={true}
                        url="/video/Smart POS.mp4"
                    ></ReactPlayer>
                </div>
                <div className='col-lg-8 mt-3 mt-lg-0'>
                    <div className='item-content ps-5'>
                        <h3 className='head02'>Smart POS</h3>
                        <div className='mb-2'>
                            <Image src="/images/wisepos-pro.svg" width={72} height={55} />
                        </div>
                        <p className='fs-18'>Introducing Wisepos Pro, the cutting-edge smart POS solution designed for seamless and secure transactions. Elevate your business with powerful tech features like octa-core processor for maximum efficiency, effortless payment processing with card tap, dip, dynamic QR and payment links. Get real-time analytics on our HD 6.75 inch touchscreen display.</p>
                        <Link className='fs-18' href="">Explore all terminals <Image className='ms-2' width={8} height={12} src="/images/icons/greater-arrow-right.svg" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmartPOS