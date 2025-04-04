import React from 'react'
import PayByLink from './PayByLink'
import PaymentGateway from './PaymentGateway'

const OnlineSolutions = () => {
  return (
    <>
      <section className='in-store-solution-section online-solution-section'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-12'>
              <h2 className='head01'><strong>Online</strong> solutions</h2>
            </div>
          </div>
          <PayByLink />
          <PaymentGateway />
        </div>
      </section>
    </>
  )
}

export default OnlineSolutions