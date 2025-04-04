import React from 'react'
import ReactPlayer from 'react-player'
import SmartPOS from './SmartPOS'
import Soundbox from './Soundbox'

const InStoreSolutions = () => {
  return (
    <>
      <section className='in-store-solution-section'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-12'>
              <h2 className='head01'><strong>In-store</strong> solutions</h2>
            </div>
          </div>
          <SmartPOS />
          <Soundbox />
        </div>
      </section>
    </>
  )
}

export default InStoreSolutions