import Link from 'next/link';
import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'

const BrandEMI = () => {
  const [image, setimage] = useState("/images/brand-emi/01.svg");
  return (
    <>
      <section className='brand-emi-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <h2 className='head01'>
                <div> <strong>Brand EMI </strong> </div>
              </h2>
            </div>
            <div className='col-md-3 '>
              <Link href="" type="submit" className="btn btn-primary btn-submit d-flex align-items-center justify-content-center w-fit-content">Partner with Mswipe <img src="/images/icons/greater-arrow-right-w.svg" alt="" /></Link>
            </div>
          </div>
          <div className="row sp-bg">
            <div className="col-lg-6">
              <Accordion className='accordion-02' defaultActiveKey="0">
                <Accordion.Item eventKey="0" onClick={() => {
                  setimage("/images/brand-emi/01.svg")
                }
                }>
                  <Accordion.Header>Tailored installment solutions</Accordion.Header>
                  <Accordion.Body>Brand EMI feature enables merchants to offer customised installment plans on specific brands, making premium products more affordable for customers.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" onClick={() => {
                  setimage("/images/brand-emi/02.svg")
                }}>
                  <Accordion.Header>Boost in high-value purchases</Accordion.Header>
                  <Accordion.Body>Merchants can drive higher sales by offering easy financing options for popular brands, encouraging customers to buy more.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" onClick={() => {
                  setimage("/images/brand-emi/03.svg")
                }}>
                  <Accordion.Header>Brand loyalty and increased revenue</Accordion.Header>
                  <Accordion.Body>This feature not only improves customer loyalty to specific brands but also helps merchants boost their revenue through repeat business.</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-lg-6">
              <div className="sp-container">
                <div id="banner" className="sp-banner">
                  <img className="img-fluid" src={image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandEMI