import Image from 'next/image'
import React from 'react'

const EnsuringComplaince = () => {
    return (
        <>
            <section className='work-for-your-business-section ensuring-complaince-desction'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>Ensuring <strong>compliance: our licenses & approvals</strong></h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/licenses.svg" />
                                <div className='title'>
                                    <span>Payment
                                    </span>
                                    <span>Aggregator License</span>
                                </div>
                                <div className='desc fs-18'>
                                Received RBI license received in FY24 for merchant payments aggregation.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/licenses.svg" />
                                <div className='title'>
                                    <span>PPI License</span>
                                </div>
                                <div className='desc fs-18'>
                                Received in-principle approval in FY24; COA currently under process.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/licenses.svg" />
                                <div className='title'>
                                    <span>TPAP License</span>
                                </div>
                                <div className='desc fs-18'>
                                License approval in progress for direct UPI app publishing, enabling real time operations.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/licenses.svg" />
                                <div className='title'>
                                    <span>NBFC License</span>
                                </div>
                                <div className='desc fs-18'>
                                Successfully obtained in FY22 for lending activities and credit provision.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EnsuringComplaince