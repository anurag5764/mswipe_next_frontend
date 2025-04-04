import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Integration = () => {
  return (
    <>
        <section className='integration-section work-for-your-business-section'>
        <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'><strong>Integration  </strong>- SDKs and APIs</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/integration/01.svg" />
                                <div className='title'>
                                    <span>Seamless system Integration for enhanced efficiency</span>
                                </div>
                                <div className='desc'>
                                Built to integrate effortlessly with websites, mobile applications and business software to provide smooth merchant onboarding and lifecycle experience.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/integration/02.svg" />
                                <div className='title'>
                                    <span>Developer-friendly APIs
                                    and SDKs </span>
                                </div>
                                <div className='desc'>
                                Our flexible APIs and SDKs allow for easy integration with order management, billing and other core platforms, enabling custom, low-code solutions that fit seamlessly into your existing workflows.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/integration/03.svg" />
                                <div className='title'>
                                    <span>Comprehensive support and documentation</span>
                                </div>
                                <div className='desc'>
                                Mswipe provides detailed documentation and dedicated support to ensure a smooth implementation, empowering banks and businesses to integrate and optimize our payment solutions with minimal effort.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 d-flex align-items-center justify-content-center'>
                            <Link href="" type="submit" className="btn btn-primary btn-submit d-flex align-items-center justify-content-center w-fit-content">Partner with Mswipe <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Integration