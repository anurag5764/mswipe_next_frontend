import Image from 'next/image'
import React from 'react'

const FullyCertifiedData = [
    {
        image: "/images/fully-certified/01.svg"
    },
    {
        image: "/images/fully-certified/02.svg"
    },
    {
        image: "/images/fully-certified/03.svg"
    },
    {
        image: "/images/fully-certified/04.svg"
    },
    {
        image: "/images/fully-certified/05.svg"
    },
    {
        image: "/images/fully-certified/06.svg"
    },
]

const FullyCertified = () => {
    return (
        <>
            <section className='fully-certified-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>
                            Fully <strong>certified POS</strong>
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            FullyCertifiedData && FullyCertifiedData.map((item, index) => (
                                <div className='col-6 col-md-2' key={index}>
                                    <div className='fully-certified-icon'>
                                        <Image src={item?.image} width={120} height={46} />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default FullyCertified