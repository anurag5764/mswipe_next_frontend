import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const bankEMIData = [
    {
        image: "/images/bank-emi/01.svg",
        title: "Card-based EMI options",
        description: "Mswipe integrates Bank EMI programs, letting customers pay in installments using their credit or debit cards, making larger purchases easier to manage."
    },
    {
        image: "/images/bank-emi/02.svg",
        title: "Card-based EMI options",
        description: "Mswipe integrates Bank EMI programs, letting customers pay in installments using their credit or debit cards, making larger purchases easier to manage."
    },
    {
        image: "/images/bank-emi/03.svg",
        title: "Card-based EMI options",
        description: "Mswipe integrates Bank EMI programs, letting customers pay in installments using their credit or debit cards, making larger purchases easier to manage."
    },

]
const BankEMI = () => {
    return (
        <>
            <section className='bank-emi-section'>
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
                    <div className='row'>
                        {
                            bankEMIData && bankEMIData?.map((item, index) => (
                                <div className='col-md-4' key={index}>
                                    <div className='emi-card'>
                                        <div className='img'>
                                            <Image width={380} height={281} src={item?.image} />
                                        </div>
                                        <div className='inner'>
                                            <div className='title'>{item?.title}</div>
                                            <div className='fs-18'>{item?.description}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section></>
    )
}

export default BankEMI