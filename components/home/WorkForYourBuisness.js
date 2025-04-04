import Image from 'next/image'
import React from 'react'

const WorkForYourBuisness = () => {
    return (
        <>
            <section className='work-for-your-business-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>Here’s how Mswipe <strong>works</strong> for your business</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/work-for-your-business/01.svg" />
                                <div className='title'>
                                    <span>Easy</span>
                                    <span>sign-up</span>
                                </div>
                                <div className='desc'>
                                Seamless onboarding
                                process to have your business accepting payments in no time
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/work-for-your-business/02.svg" />
                                <div className='title'>
                                    <span>Pricing to keep </span>
                                    <span>costs low</span>
                                </div>
                                <div className='desc'>
                                Enjoy competitive pricing and transparent fees to maximize your profits.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/work-for-your-business/03.svg" />
                                <div className='title'>
                                    <span>Enhanced</span>
                                    <span>reporting insights</span>
                                </div>
                                <div className='desc'>
                                Gain valuable insights into your sales and transactions with detailed reporting.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/work-for-your-business/04.svg" />
                                <div className='title'>
                                    <span>Robust</span>
                                    <span>customer support</span>
                                </div>
                                <div className='desc'>
                                Contact us via WhatsApp, email, or our toll-free number. Merchants can also submit support tickets through the app for quick assistance.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkForYourBuisness