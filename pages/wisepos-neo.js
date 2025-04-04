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
    nameIcon: "/images/wisepos-neo-img.svg",
    title: {
        highlight: "Smart POS for your",
        text: " <strong>End-to-End</strong> business needs."
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
        description: "Large 6.75 android display for easy and clear navigation."
    },
    {
        image: "/images/advanced-specification-icons/10.svg",
        title: "High-Resolution Back Camera",
        description: "5 MP back camera for accurate barcode scanning."
    },

    {
        image: "/images/advanced-specification-icons/11.svg",
        title: "Card Tap or Insert",
        description: "Supports all debit, credit, and prepaid cards for convenient transactions."
    },
    {
        image: "/images/advanced-specification-icons/12.svg",
        title: "Multiple Payment Options",
        description: "Accept payments through magstripe, EMV, and NFC card readers."
    },
    {
        image: "/images/advanced-specification-icons/13.svg",
        title: "2D Barcode Scanner",
        description: "Efficient barcode scanning for inventory management and seamless checkout."
    },
    {
        image: "/images/advanced-specification-icons/07.svg",
        title: "Built-in Printer",
        description: "Integrated wireless Android system with a built-in printer for instant receipts."
    },
    {
        image: "/images/advanced-specification-icons/14.svg",
        title: "4G Connectivity",
        description: "Supports 4G, WiFi, Bluetooth, and micro-USB for seamless connectivity."
    },


]
const AdvacedSpecificationsBannerData = {
    "image": "/images/man standing in a walkway 1.png",
    "title": {
        "highlight": "Unleash potential",
        "text": "with cutting-edge features"
    },
    "icon": "/images/wisepos-neo-img.svg",
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
const WiseposNeoPage = () => {
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

export default WiseposNeoPage;


