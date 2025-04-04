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
    nameIcon: "/images/boombox-x1-img.svg",
    title: {
        highlight: "Introducing the <strong>Boombox X1</strong>.",
        text: "The all-in-one <strong>soundbox</strong> + POS terminal"
    },
    orderbtn: {
        text: "Order Boombox",
        url: ""
    }
}
const AdvacedSpecificationsData = [
    {
        image: "/images/advanced-specification-icons/05.svg",
        title: "Dynamic QR payments",
        description: "2.8-inch screen for dynamic QR."
    },
    {
        image: "/images/advanced-specification-icons/11.svg",
        title: "Card tap & dip",
        description: "Accept payments using any credit, debit or pre-paid card via tap or dip."
    },
    {
        image: "/images/advanced-specification-icons/15.svg",
        title: "Secure PIN pad",
        description: "Built-in PIN pad located at the back."
    },
    {
        image: "/images/advanced-specification-icons/16.svg",
        title: "Multi-language alerts",
        description: "Instant sound alerts in your preferred language."
    },
    {
        image: "/images/advanced-specification-icons/06.svg",
        title: "Long battery life",
        description: "Lasts 24 hours with fast type-c charging support."
    },

    {
        image: "/images/advanced-specification-icons/14.svg",
        title: "Strong connectivity",
        description: "Supports 4G & 2G connectivity for seamless operation."
    },
    {
        image: "/images/advanced-specification-icons/17.svg",
        title: "Transaction analytics",
        description: "Track transactions and reports via Merchant app or portal."
    },
    {
        image: "/images/advanced-specification-icons/18.svg",
        title: "Cost-efficient solution",
        description: "Combines soundbox and card acceptance in one."
    },

]
const AdvacedSpecificationsBannerData = {
    "image": "/images/women standing in a walkway 3.png",
    "title": {
        "highlight": "Sound and display alerts",
        "text": "on every card and QR transaction"
    },
    "icon": "/images/boombox-x1-img.svg",
    "video": "/video/boombox-x1.mp4"
}
const QuickSupportVideoData = [
    {
        videothumbnail: "/images/support-video03.png",
        description: "How to Accept Payments with Boombox x1"
    },
    {
        videothumbnail: "/images/support-video04.png",
        description: "Setting Up Boombox x1 for Seamless Transactions"
    },
    {
        videothumbnail: "/images/support-video02.png",
        description: "Managing Transactions via the Mswipe Merchant App"
    },

]
const BoomboxX1Page = () => {
    return (
        <>
            <Layout>
                <main className="contant-main-sec" >
                    <InnerBanner bannerData={BannerData} />
                    <AdvancedSpecifications advacedSpecificationsData={AdvacedSpecificationsData} advacedSpecificationsBannerData={AdvacedSpecificationsBannerData} />
                    <AcceptAllPayments />
                    <QuickSupportVideo quickSupportVideoData={QuickSupportVideoData} />
                    <Faqs />
                    <SeamlessPayment />
                </main>
            </Layout>
        </>
    );
};

export default BoomboxX1Page;


