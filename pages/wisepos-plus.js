import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import InnerBanner from "../components/Common/Banner";
import AdvancedSpecifications from "../components/Common/InStoreSolution/AdvancedSpecifications";
import FullyCertified from "../components/Common/InStoreSolution/FullyCertified";
import AcceptAllPayments from "../components/Common/InStoreSolution/AcceptAllPayments";
import ExploreMore from "../components/Common/InStoreSolution/ExploreMore";
import QuickSupportVideo from "../components/Common/InStoreSolution/QuickSupportVideo";
import Faqs from "../components/home/Faqs";
import SeamlessPayment from "../components/home/SeamlessPayment";
const BannerData =
{
  desktopImage: "/images/banner/wisepse-pro.png",
  tabImage: "/images/banner/wisepse-pro-tab.png",
  mobileImage: "/images/banner/wisepse-pro-m.png",
  nameIcon: "/images/wisepos-plus-img.svg",
  title: {
    highlight: "Smart POS terminal with",
    text: "seamless <strong>payment processing</strong>"
  },
  orderbtn: {
    text: "Order POS",
    url: ""
  }
}
const AdvacedSpecificationsData = [
  {
    image: "/images/advanced-specification-icons/02.svg",
    title: "HD touchscreen display",
    description: "5.5 screen for easy, clear navigation."
  },
  {
    image: "/images/advanced-specification-icons/06.svg",
    title: "High capacity battery",
    description: "2500mAh battery for long-lasting, uninterrupted use."
  },
  {
    image: "/images/advanced-specification-icons/04.svg",
    title: "NFC tap & go",
    description: "Customer-friendly NFC reader for quick and convenient payments."
  },
  {
    image: "/images/advanced-specification-icons/03.svg",
    title: "Easy card dip",
    description: "Convenient side slot for debit, credit, or prepaid cards."
  },
  {
    image: "/images/advanced-specification-icons/05.svg",
    title: "Dynamic QR payments",
    description: "Enable easy UPI payments through dynamic QR codes."
  },

  {
    image: "/images/advanced-specification-icons/09.svg",
    title: "Transaction Analysis",
    description: "Track daily, weekly, and monthly transactions for insightful business performance analysis."
  },






]
const AdvacedSpecificationsBannerData = {
  "image": "/images/women standing in a walkway 2.png",
  "title": {
    "highlight": "⁠Advanced specifications for",
    "text": " next-level productivity"
  },
  "icon": "/images/wisepos-pro-img.svg",
  "video": "/video/01.mp4"
}
const QuickSupportVideoData = [
  {
    videothumbnail: "/images/support-video01.png",
    description: "WisePOS Pro: Quick Setup and Payment Guide"
  },
  {
    videothumbnail: "/images/support-video02.png",
    description: "How to Troubleshoot Common Issues on WisePOS Pro"
  },
  {
    videothumbnail: "/images/support-video02.png",
    description: "Mastering WisePOS Pro Features: Card Payments, NFC, and More"
  },

]
const WiseposPlusPage = () => {
  return (
    <>
      <Layout>
        <main className="contant-main-sec" >
          <InnerBanner bannerData={BannerData} />
          <AdvancedSpecifications advacedSpecificationsData={AdvacedSpecificationsData} advacedSpecificationsBannerData={AdvacedSpecificationsBannerData} />
          <FullyCertified />
          <AcceptAllPayments />
          <ExploreMore />
          <QuickSupportVideo quickSupportVideoData={QuickSupportVideoData} />
          <Faqs />
          <SeamlessPayment />
        </main>
      </Layout>
    </>
  );
};

export default WiseposPlusPage;


