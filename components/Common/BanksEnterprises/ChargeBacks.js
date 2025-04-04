import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ChargeBacks = () => {
    return (
        <>
            <section className='charge-backs-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>Chargebacks</h2>
                        </div>
                    </div>
                    <div className='row align-items-center mb-4'>
                        <div className='col-md-6'>
                            <Image width={600} height={321} src="/images/chargebacks/01.svg" />
                        </div>
                        <div className='col-md-6'>
                            <div className='inner-content'>
                                <h3>Comprehensive chargeback management</h3>
                                <p className='fs-18'>End-to-end support for chargeback management, simplifying and streamlining the resolution process for both merchants and banks.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center mb-4'>
                       
                        <div className='col-md-6'>
                            <div className='inner-content'>
                                <h3>Real-time chargeback tracking</h3>
                                <p className='fs-18'>Mswipe’s chargeback tracking is available in real-time via the merchant app and portal, allowing merchants to monitor and respond to disputes with ease.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Image width={600} height={321} src="/images/chargebacks/02.svg" />
                        </div>
                    </div>
                    <div className='row align-items-center mb-4'>
                        <div className='col-md-6'>
                            <Image width={600} height={321} src="/images/chargebacks/03.svg" />
                        </div>
                        <div className='col-md-6'>
                            <div className='inner-content'>
                                <h3>Efficient communication channels</h3>
                                <p className='fs-18'>Mswipe facilitates streamlined communication among merchants, banks and customers throughout the chargeback process, ensuring clarity, efficiency and faster resolution.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 d-flex align-items-center justify-content-center'>
                            <Link href="" type="submit" className="btn btn-primary btn-submit d-flex align-items-center justify-content-center w-fit-content">Partner with Mswipe <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default ChargeBacks