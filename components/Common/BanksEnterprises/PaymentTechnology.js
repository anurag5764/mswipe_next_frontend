import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Accordion } from 'react-bootstrap'
const merchantOnboardingData = [
    {
        key: "0",
        title: "Web-Based Digital Onboarding",
        content: "Mswipe offers a fully web-based onboarding solution that simplifies merchant acquisition. Banks can easily submit applications and complete KYC verification in compliance with RBI guidelines, ensuring a streamlined and secure process.",
    },
    {
        key: "1",
        title: "Seamless API Integration",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        key: "2",
        title: "Bulk Onboarding Support",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        key: "3",
        title: "Swift Approvals and Activation",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];
const PaymentTechnology = () => {
    return (
        <>
            <section className='payment-technology-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <div className='sub-head01 justify-content-center'>
                                <Image className='me-1' width={24} height={24} src="/images/icons/tech.svg" />    BACK-END
                            </div>
                            <h2 className='head01'>Payment Technology</h2>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='sub-head02'>Merchant Onboarding</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 order-1 order-lg-0'>
                            <Accordion className='accordion-01' defaultActiveKey="0">
                                {merchantOnboardingData.map((item) => (
                                    <Accordion.Item eventKey={item.key} key={item.key}>
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>{item.content}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                        <div className='col-md-6 order-0 order-lg-1'>
                            <div className='rt-img'>
                                <Image width={560} height={351} src="/images/merchant-onboarding.png" />
                            </div>
                        </div>
                    </div>
                    <div className='row text-center mt-3'>
                        <div className='col-12 justify-content-center d-flex'>
                            <Link href="" type="submit" className="btn btn-primary btn-submit d-flex align-items-center justify-content-center w-fit-content">Partner with Mswipe <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentTechnology