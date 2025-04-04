import React, { Fragment } from 'react'
import HomeBanner from './HomeBanner'
import InStoreSolutions from './InStoreSolutions'
import OnlineSolutions from './OnlineSolutions'
import AppAndPortal from './AppAndPortal'
import SolutionSets from './SolutionSets'
import WorkForYourBuisness from './WorkForYourBuisness'
import SeamlessIntegrations from './SeamlessIntegrations '
import TrustedBy from './TrustedBy'
import TopBrands from './TopBrands'
import LoyaltyAndRewards from './LoyaltyAndRewards'
import EnsuringComplaince from './EnsuringComplaince'
import NextGenerationOfpayments from './NextGenerationOfpayments'
import SeamlessPayment from './SeamlessPayment'
import Faqs from './Faqs'

const Home = ({homeData}) => {
  return (
    <Fragment>
      <main className="contant-main-sec" >
        <HomeBanner HomeVideo={homeData?.Banner} />
        <InStoreSolutions />
        <OnlineSolutions />
        <AppAndPortal />
        <SolutionSets />
        <WorkForYourBuisness />
        <SeamlessIntegrations />
        <TrustedBy />
        <TopBrands />
        <LoyaltyAndRewards />
        <EnsuringComplaince />
        <NextGenerationOfpayments />
        <Faqs />
        <SeamlessPayment />
      </main>
    </Fragment>
  )
}

export default Home