import Image from 'next/image'
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
const forBuyers = [
    {
        title: "Single platform",
        description: "Consolidates invoices from all your suppliers in one place to track your expenses on one single platform."
    },
    {
        title: "Flexible payment actions",
        description: "Buyers can accept, reject, or make part payments directly on the platform with ease."
    },
    {
        title: "Automatic payment reminders",
        description: "Ensure timely payments and avoid late fee charges and save time."
    },
    {
        title: "Error-free reconciliation",
        description: "Reconciliation and auto-update on accounting software like Tally, minimizing manual intervention."
    },
    {
        title: "Financing support",
        description: "Access financing and bill discounting facilities to manage cash flow effectively."
    },

]
const forSellers = [
    {
        title: "Seamless invoicing",
        description: "Create and share invoices directly from your ERP or accounting software for faster processing."
    },
    {
        title: "Automatic reminders",
        description: "Eliminate delays with automated payment workflows, ensuring timely receipt of funds."
    },
    {
        title: "Improved cash flow",
        description: "Manage receivables for better fund management and effective cash flow with monitoring real-time transactions."
    },
    {
        title: "Reduced administrative effort",
        description: "Minimize manual tasks with automated reconciliation and integrated payment solutions."
    },

]
const Benefits = () => {
    return (
        <>
            <section className='benefits-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01 grd-bg'>Benefits for your business</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='tabs-02 tabs-02-abs'>
                                <Tabs
                                    defaultActiveKey="forbuyers"
                                    id="justify-tab-example"
                                    className="mb-3"
                                    justify
                                >
                                    <Tab eventKey="forbuyers" title="For buyers">
                                        <div className='row align-items-center'>
                                            <div className='col-md-6'>
                                                <ul className='seamless-lists'>
                                                    {
                                                        forBuyers && forBuyers.map((item, index) => (
                                                            <li key={index}>
                                                                <div className='title'>{item?.title}</div>
                                                                <div className='description fs-18'>{item?.description}</div>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                            <div className='col-md-6 d-none d-lg-block'>
                                                <div className='img'><Image width={585} height={567} src="/images/Buyers.png" /></div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="forSellers" title="For sellers">
                                    <div className='row align-items-center'>
                                            <div className='col-md-6'>
                                                <ul className='seamless-lists'>
                                                    {
                                                        forSellers && forSellers.map((item, index) => (
                                                            <li key={index}>
                                                                <div className='title'>{item?.title}</div>
                                                                <div className='description fs-18'>{item?.description}</div>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                            <div className='col-md-6 d-none d-lg-block'>
                                                <div className='img'><Image width={585} height={567} src="/images/Buyers.png" /></div>
                                            </div>
                                        </div>
                                    </Tab>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits