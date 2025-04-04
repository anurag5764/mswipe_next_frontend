import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const seamlessData = [
  {
    title: "Comprehensive payment processing",
    description: "Mswipe's Switch Solutions support card, UPI, and online transactions on a single, integrated platform, facilitating seamless payment handling across diverse channels."
  },
  {
    title: "SaaS-based flexibility",
    description: "Offered as a SaaS solution, Mswipe’s switch technology provides banks and businesses with easy deployment and scalability, minimizing infrastructure costs while delivering robust performance."
  },
  {
    title: "Enhanced speed and efficiency",
    description: "Optimized for high transaction volumes, our payment switch ensures faster processing times and reduced latency, enhancing customer experience and operational efficiency."
  },
  {
    title: "Secure and compliant",
    description: "Built to meet industry standards, Mswipe’s payment switch is fully compliant with regulatory guidelines, offering a secure and reliable framework for all payment types"
  },

]
const MswipeSwitch = () => {
  return (
    <>
      <section className='mswipe-switch-section seamless-integrations-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <h2 className='head01'>
                <div> <strong>Mswipe Switch: Smarter, Faster Payments </strong> </div>
              </h2>
            </div>
            <div className='col-md-3 d-none d-lg-block'>
              <Link href="" type="submit" className="btn btn-primary btn-submit d-flex align-items-center justify-content-center w-fit-content">Partner with Mswipe <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 order-1 order-lg-0'>

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
            <div className='col-lg-6 order-0 order-lg-1 mb-4'>
              <Image className='w-100 h-100' width={555} height={537} src="/images/mswipe-switch.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MswipeSwitch