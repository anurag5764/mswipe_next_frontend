import Image from 'next/image'
import React from 'react'

const LoyaltyAndRewards = () => {
  return (
    <>
    <section className='loyalty-and-rewards-section'>
        <div className='container'>
        <div className='row text-center'>
                <div className='col-12'>
                    <h2 className='head01'>Loyalty and <strong>Rewards</strong></h2>
                </div>
            </div>
        </div>
        <div className='container bg-greys'>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className='inner-content'>
                        <h2 className='head01'>
                            <div>Transact more, earn coins, and redeem rewards from 150+ top brands online</div>
                        </h2>
                        <p className='fs-18'>Unlock extra points with Scratch Cards, and track your progress easily on the Merchant app and Portal.</p>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='img'>
                    <Image width={594} height={400} src="/images/rewards.svg" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LoyaltyAndRewards