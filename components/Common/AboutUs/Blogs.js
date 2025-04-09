import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const BlogsData = [
    {
        image: "/images/blog/01.png",
        date: "June 6, 2024",
        description: "Exclusive | Mswipe gets RBI nod, to foray into online payments and merchant sound devices",
        link: ""
    },
    {
        image: "/images/blog/02.png",
        date: "Aug 7, 2024",
        description: "Mswipe launches new payment solution for small businesses",
        link: ""
    },
    {
        image: "/images/blog/03.png",
        date: "Aug 7, 2024",
        description: "Mswipe launches new payment solution for small businesses",
        link: ""
    },

]
const Blogs = () => {
    return (
        <>
            <section className='latest-news-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <h2 className='head01'>
                                <div> Latest  <strong>News & Updates</strong>from Mswipe </div>
                            </h2>
                        </div>
                        <div className='col-md-2 d-none d-lg-block'>
                            <Link href="" type="submit" className="view-all-btn d-flex align-items-center justify-content-center w-fit-content">View all <Image width={10} height={17} src="/images/icons/greater-arrow-right.svg" alt="" className='ms-2' /></Link>
                        </div>
                    </div>
                    <div className='row tabs-02'>
                            {BlogsData && BlogsData.map((item, index) => {
                                return (

                                    <div className='col-md-4' key={index}>
                                        <div className='products-item'>
                                            <div className='img'>
                                                <Image width={323} height={323} className='w-100 h-100' src={item?.image} />
                                            </div>
                                            <div className='title'>{item?.date}</div>
                                            <div className='description fs-18'>{item?.description}</div>
                                            {/* <div className='read-more'>
                                                <Link href={item?.link} className="fs-18">Read more <Image width={24} height={25} src="/images/icons/arrow-right-circle.svg" alt="" /></Link>
                                            </div> */}
                                        </div>
                                    </div>

                                )
                            })}
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs