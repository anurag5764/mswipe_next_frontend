import Image from 'next/image'
import React from 'react'


const QuickSupportVideo = ({quickSupportVideoData}) => {
    return (
        <>
            <section className='quick-support-video-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>
                                Quick <strong>support videos</strong>
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            quickSupportVideoData && quickSupportVideoData?.map((item, index) => (
                                <div className='col-md-4' key={index}>
                                    <div className='qsv-item'>
                                        <Image width={384} height={202} src={item?.videothumbnail}/>
                                        <div className='desc'>{item?.description}</div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 d-flex justify-content-center'>
                        <button type="submit" className="btn btn-outline-secondary btn-submit-outline ms-2">See all <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default QuickSupportVideo