import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PaymentGateway = () => {
    return (
        <>
            <div className='row align-items-center'>
                
                <div className='col-md-8 order-2 order-md-1'>
                    <div className='item-content pe-5 text-center text-md-start'>
                        <h3 className='head03'>Payment gateway</h3>
                        <p className='fs-18'>Supercharge your e-commerce business with Mswipe Payment Gateway – the fastest, most efficient solution for seamless payments. With easy low-code integration for your app or website, instantly accept payments via credit, debit, prepaid cards, UPI, and net banking. Gain real-time insights with a powerful dashboard on your merchant app and portal to analyse your transactions and settlements. Scale at lightning speed with Mswipe – where technology and efficiency drive your business forward!</p>
                        <Link href="">Learn more <Image className='ms-2' width={8} height={12} src="/images/icons/greater-arrow-right.svg" /></Link>
                    </div>
                </div>
                <div className='col-md-4 order-1 order-md-2'>
                    <Image className='w-100 h-100' width={619} height={768} src="/video/Payment gateway.gif" />
                </div>
            </div>
        </>
    )
}

export default PaymentGateway