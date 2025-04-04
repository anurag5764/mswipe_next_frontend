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
    nameIcon: "/images/boombox-b1-img.svg",
    title: {
        highlight: "Now Get Sound & Display",
        text: " <strong>Alerts </strong> On Every <strong>QR Payment</strong>"
    },
    orderbtn: {
        text: "Order Boombox",
        url: ""
    }
}
const AdvacedSpecificationsData = [
    {
        image: "/images/advanced-specification-icons/18.svg",
        title: "Easy scan & pay",
        description: "Quick payments via static QR code using any UPI app."
    },
    {
        image: "/images/advanced-specification-icons/19.svg",
        title: "Instant alerts",
        description: "Immediate sound and display notifications for every payment."
    },
    {
        image: "/images/advanced-specification-icons/16.svg",
        title: "Multi-language support",
        description: "Get sound alerts in language of your choice."
    },
    {
        image: "/images/advanced-specification-icons/14.svg",
        title: "4G connectivity",
        description: "Stable and fast connection with built-in 4G micro SIM support."
    },
    {
        image: "/images/advanced-specification-icons/17.svg",
        title: "Link multiple QRs",
        description: "Connect multiple QR codes to a single Boombox for convenience."
    },
    {
        image: "/images/advanced-specification-icons/01.svg",
        title: "Compact design",
        description: "Sleek, space-saving design that fits perfectly in any setup."
    },

    
   
    

]
const AdvacedSpecificationsBannerData = {
    "image": "/images/man standing in a walkway 2.png",
    "title": {
        "highlight": "Flexibility to use UPI",
        "text": "interface of your choice"
    },
    "icon": "/images/boombox-b1-img.svg",
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
const BoomboxB1Page = () => {
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

export default BoomboxB1Page;


