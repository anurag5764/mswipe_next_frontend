import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AppAndPortal = () => {
    return (
        <>
            <section className='app-and-portal-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className=''>
                                <h2 className='head01'>Unified <strong>app</strong> and <strong>portal</strong></h2>
                                <p className='fs-18'>Analyse transactions, manage users and devices, track settlements and generate reports and invoices.</p>
                                <div className='d-flex justify-content-center justify-content-md-start'>
                                    <button type="submit" class="btn btn-primary btn-submit">Learn more<img src="/images/icons/greater-arrow-right-w.svg" alt="" /></button>
                                </div>
                                <div className='mt-5'>
                                    <p className='default'>Available on the:</p>
                                    <div className='d-flex align-items-center justify-content-center justify-content-md-start mb-5'>
                                        <Link href="" className=''>
                                            <Image className='h-100 w-100' width={160} height={48} src="/images/app-store.svg" />
                                        </Link>
                                        <Link href="" className='ms-3'>
                                            <Image className='h-100 w-100' width={160} height={48} src="/images/google-play.svg" />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='w-100 h-100'>
                                <Image className='w-100 h-100' width={619} height={768} src="/images/app-and-portal.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppAndPortal