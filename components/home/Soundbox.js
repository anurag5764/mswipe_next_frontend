import dynamic from 'next/dynamic';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
});

const Soundbox = () => {
  return (
    <>
      <div className='row bg-grey text-light brad-10 p50 align-items-center mt-5'>

        <div className='col-lg-8 mt-3 mt-lg-0 order-2 order-lg-1'>
          <div className='item-content pe-5'>
            <h3 className='head02'>Soundbox</h3>
            <div className='mb-2'>
              <Image src="/images/boombox.svg" width={117} height={49} />
            </div>
            <p className='fs-18'>Experience the Boombox X1 – the revolutionary all-in-one Soundbox + POS terminal that redefines convenience and innovation! Get real-time audio confirmations with every transaction, making payments more secure. With its cutting-edge dynamic QR scan and pay feature, seamless card acceptance, and crystal-clear payment alerts, the Boombox X1 is engineered for ultimate efficiency. It’s sleek, compact design fits perfectly into the counter space, making it the perfect blend of style and technology.</p>
            <Link className='fs-18' href="">Explore all terminals <Image className='ms-2' width={8} height={12} src="/images/icons/greater-arrow-right.svg" /></Link>
          </div>
        </div>
        <div className='col-lg-4 order-1 order-lg-2'>
          <ReactPlayer
            className="inner-banner-video"
            loop
            muted
            playbackRate={1}
            playing={true}
            url="/video/Soundbox.mp4"
          ></ReactPlayer>
        </div>
      </div>
    </>
  )
}

export default Soundbox