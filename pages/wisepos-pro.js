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
    nameIcon: "/images/wisepos-pro-img.svg",
    title:{
      highlight:"Smart POS terminal with",
      text: "seamless <strong>payment processing</strong>"
  },
  orderbtn: {
    text: "Order POS",
    url: ""
}
}
const AdvacedSpecificationsData = [
    {
        image: "/images/advanced-specification-icons/01.svg",
        title: "Sleek metallic design",
        description: "Modern, durable, and perfect for retail environments."
    },
    {
        image: "/images/advanced-specification-icons/02.svg",
        title: "HD touchscreen display",
        description: "Large 6.75” display for clear, easy navigation."
    },
    {
        image: "/images/advanced-specification-icons/03.svg",
        title: "Easy card dip",
        description: "Convenient side slot for for any debit, credit or prepaid card."
    },
    {
        image: "/images/advanced-specification-icons/04.svg",
        title: "NFC tap & go",
        description: "Customer-friendly NFC reader for fast payments."
    },
    {
        image: "/images/advanced-specification-icons/05.svg",
        title: "Dynamic QR payments",
        description: "Scan and pay via UPI with dynamic QR codes."
    },
    {
        image: "/images/advanced-specification-icons/06.svg",
        title: "High capacity battery",
        description: "13-day standby for long-lasting, uninterrupted usage."
    },
    {
        image: "/images/advanced-specification-icons/07.svg",
        title: "In-built printer",
        description: "Print receipts and invoices on the spot."
    },
    {
        image: "/images/advanced-specification-icons/08.svg",
        title: "Access to merchant app",
        description: "Manage transactions, devices, settlements, and invoices."
    },

]
const AdvacedSpecificationsBannerData = {
    "image": "/images/women standing in a walkway 1.png",
    "title": {
        "highlight": "Engineered for",
        "text": "peak performance"
    },
    "icon":"/images/wisepos-pro-img.svg",
    "video":"/video/01.mp4"
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
const WiseposProPage = () => {
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

export default WiseposProPage;


