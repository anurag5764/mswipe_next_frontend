import dynamic from 'next/dynamic';
import Image from 'next/image'
import React, { Fragment } from 'react'
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
});

const AdvancedSpecifications = ({ advacedSpecificationsData, advacedSpecificationsBannerData }) => {
    return (
        <>
            <section className='advaced-specifications-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 p-0'>
                            <div className='img'>
                                <Image width={734} height={400} src={advacedSpecificationsBannerData?.image} />
                            </div>
                        </div>
                        <div className='col-md-5 p-0'>
                            <div className='inner-box'>
                                <div className='title'>
                                    <div className='me-1'>{advacedSpecificationsBannerData?.title?.highlight}</div>
                                    {/* {advacedSpecificationsBannerData.title.text.split("\n").map((line, index) => (
                                        <Fragment key={index}>
                                            {line}
                                            <br />
                                        </Fragment>
                                    ))} */}
                                    {advacedSpecificationsBannerData?.title?.text}
                                </div>
                                <div className='name-icon'>
                                    <Image width={108} height={80} src={advacedSpecificationsBannerData?.icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='lists-items'>
                                <div className='row'>
                                    {
                                        advacedSpecificationsData && advacedSpecificationsData?.map((item, index) => (
                                            <div className='col-6 col-md-4 col-lg-3 mb-4 mb-5' key={index}>
                                                <div className='item'>
                                                    <Image width={52} height={52} src={item?.image} />
                                                    <div className='title'>
                                                        {item?.title}
                                                    </div>
                                                    <div className='desc'>
                                                        {item?.description}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='video-wrap'>
                                <ReactPlayer
                                    className="banner_video"
                                    loop
                                    muted
                                    playbackRate={1}
                                    playing={true}
                                    url={advacedSpecificationsBannerData?.video}
                                ></ReactPlayer>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default AdvancedSpecifications