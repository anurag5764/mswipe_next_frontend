import dynamic from 'next/dynamic';
import Image from 'next/image'
import React, { Fragment } from 'react'
const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
});

const Features = ({ featuresData }) => {
    return (
        <>
            <section className='advaced-specifications-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>Features</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='lists-items'>
                                <div className='row'>
                                    {
                                        featuresData && featuresData?.map((item, index) => (
                                            <div className='col-6 col-md-4 col-lg-3 mb-4 mb-5' key={index}>
                                                <div className='item'>
                                                    <Image width={52} height={52} src={item?.image} />
                                                    <div className='title' dangerouslySetInnerHTML={{__html: item?.title}}>
                                                       
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
                   
                </div>
            </section></>
    )
}

export default Features