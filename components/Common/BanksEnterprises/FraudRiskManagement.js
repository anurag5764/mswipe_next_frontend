import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FraudRiskManagement = () => {
    return (
        <>
            <section className='fraud-risk-management-section work-for-your-business-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01'>Fraud Risk Management: Merchant and transaction risk</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/fraud-risk-management/01.svg" />
                                <div className='title'>
                                    <span>Advanced fraud detection</span>
                                </div>
                                <div className='desc'>
                                    Mswipe’s FRM solution uses real-time monitoring and algorithms based on geography, business category and transaction type to identify and mitigate suspicious activity.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/fraud-risk-management/02.svg" />
                                <div className='title'>
                                    <span>Risk Mitigation </span>
                                </div>
                                <div className='desc'>
                                    The system helps banks reduce transaction risks, fraud losses, and chargebacks, ensuring secure payment processing.
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <div className='item'>
                                <Image width={52} height={52} src="/images/fraud-risk-management/03.svg" />
                                <div className='title'>
                                    <span>Customer protection</span>
                                </div>
                                <div className='desc'>
                                    Banks can safeguard both merchants and customers, maintaining compliance with regulatory standards.
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

export default FraudRiskManagement