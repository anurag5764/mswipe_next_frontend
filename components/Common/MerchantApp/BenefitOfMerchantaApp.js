import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
const benefitData = [
    {
        title: "Seamless payment acceptance",
        description: "The Mswipe Merchant App streamlines payments, whether through cards, UPI or pay by link which gives access to pay via net banking. Its intuitive design ensures even first-time users can navigate effortlessly. ",
        image: "/images/benefit-app/01.png"
    },
    {
        title: "Easily track transactions",
        description: "Keeping track of sales and performance is no longer a hassle. The app’s detailed analytics provide merchants with actionable insights, helping them make informed decisions to grow their business.",
        image: "/images/benefit-app/02.png"
    },
    {
        title: "Track settlements",
        description: "For many small and medium-sized businesses, timely access to funds is crucial.Through the app’s settlement tracking, merchants can easily gain daily/monthly settlement details helping the merchants stay focused on serving their customers.",
        image: "/images/benefit-app/03.png"
    },
    {
        title: "Manage invoices",
        description: "Creating and managing invoices is seamless on the app. Merchants can generate digital invoices in just a few clicks, reducing paperwork and ensuring better record-keeping. This feature simplifies billing, making the process professional and efficient.",
        image: "/images/benefit-app/04.png"
    },
    {
        title: "Support at fingertips",
        description: "In-app support ensures that merchants receive timely assistance by contacting their relationship manager or easily raise a ticket to resolve any problem via the merchant app  reinforcing trust and reliability. By addressing everyday business challenges, the Mswipe Merchant App has become an essential tool for merchants looking to simplify operations and achieve efficiency.",
        image: "/images/benefit-app/05.png"
    }
];

const BenefitOfMerchantaApp = () => {
    const [image, setImage] = useState(benefitData[0].image);
    return (
        <>
            <section className='merchant-section app'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <h2 className='head01'>
                                <div> Benefits of <strong>merchant app</strong> </div>
                            </h2>
                        </div>
                    </div>
                    <div className="row sp-bg mt-2 mt-lg-5 align-items-center">
                        <div className="col-lg-6 order-1 order-lg-0">
                            <Accordion className='accordion-04' defaultActiveKey="0">
                                {benefitData.map((item, index) => (
                                    <Accordion.Item
                                        eventKey={index.toString()}
                                        key={index}
                                        onClick={() => setImage(item.image)}
                                    >
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>{item.description}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                        <div className="col-lg-6 order-0 order-lg-1">
                            <div className="sp-container">
                                <img className="img-fluid" src={image} alt="benefit-img" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BenefitOfMerchantaApp    