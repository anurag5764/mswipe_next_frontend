import Image from 'next/image'
import React from 'react'
const seamlessData = [
    {
        title: "APIs",
        description: "Integrate Mswipe with your business software or website using APIs for payments, billing, commerce, inventory, and merchant services."
    },
    {
        title: "SDKs",
        description: "Seamlessly connect Mswipe payment hardware to your business software through SDKs."
    },
    {
        title: "Apps",
        description: "Explore trusted, ready-to-use integrations in the Mswipe App Marketplace."
    },
    {
        title: "Custom solutions",
        description: "Looking for custom solutions? Work with Mswipe specialist to adapt Mswipe to your unique business requirements."
    },

]
const SeamlessIntegrations = () => {
    return (
        <>
            <section className='seamless-integrations-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <h2 className='head01'>
                                <div>Seamless <strong>integrations</strong> </div>
                                <div>to power your business</div>
                            </h2>
                            <ul className='seamless-lists'>
                                {
                                    seamlessData && seamlessData.map((item, index) => (
                                        <li key={index}>
                                            <div className='title'>{item?.title}</div>
                                            <div className='description fs-18'>{item?.description}</div>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className='col-5 d-none d-lg-block'>
                            <Image className='w-100 h-100' width={555} height={537} src="/images/Seamless integrations.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeamlessIntegrations 