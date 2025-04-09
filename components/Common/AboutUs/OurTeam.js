import Image from 'next/image'
import React from 'react'

const ourTeamData = [
    {
        image: "/images/team/01.png",
        name: 'Manish Patel',
        position: 'Founder & Managing Director',
    },
    {
        image: "/images/team/02.png",
        name: 'Ketan Patel',
        position: 'Co-Founder & CEO',
    },
    {
        image: "/images/team/03.png",
        name: 'Saikiran Amin',
        position: 'Chief Human Resource Officer',
    },
    {
        image: "/images/team/04.png",
        name: 'Rohit Agarwal',
        position: 'Chief Financial Officer',
    },
    {
        image: "/images/team/05.png",
        name: 'Sachin Shettigar',
        position: 'Chief Risk Officer',
    },
    {
        image: "/images/team/06.png",
        name: 'Nayantara Bhargava',
        position: 'Chief Business Officer',
    },
    {
        image: "/images/team/07.png",
        name: 'Harish Patel',
        position: 'Chief Technology Officer',
    },
    {
        image: "/images/team/08.png",
        name: 'Harita Desai Jani',
        position: 'Chief Marketing Officer',
    },
    {
        image: "/images/team/09.png",
        name: 'Farhat Shaikh',
        position: 'Head Customer Service',
    },
    {
        image: "/images/team/10.png",
        name: 'Mandar Surve',
        position: 'Head Operations',
    },
    {
        image: "/images/team/11.png",
        name: 'Sagar Thokale',
        position: 'Head Procurement',
    },
    {
        image: "/images/team/12.png",
        name: 'Yogesh Verma',
        position: 'Head-Southeast Asia, UPI International, EMI & Bill Payments',
    },
    {
        image: "/images/team/13.png",
        name: 'Moneet Vijayakar',
        position: 'Head - Payment Products',
    },

]
const OurTeam = () => {
    return (
        <>
            <section className='our-team-section'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h2 className='head01 grd-bg '>Meet  Our Team</h2>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            ourTeamData && ourTeamData.map((item, index) => (
                                <div className='col-6 col-md-3' key={index}>
                                    <div className='team-member'>
                                        <div className='team-member-image'>
                                            <Image width={280} height={220} src={item?.image} alt='team-member-image' />
                                        </div>
                                        <div className='team-member-detail'>
                                            <div className='name'>{item?.name}</div>
                                            <p className='designation fs-18'>{item?.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam