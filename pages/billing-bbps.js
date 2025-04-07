import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import InnerBannerVideo from "../components/Common/Banner-video";
import Features from "../components/Common/BillingBBPS/Features";
import Benefits from "../components/Common/BillingBBPS/Benefits";
import StreamlinedPayments from "../components/Common/BillingBBPS/StreamlinedPayments";
import Faqs from "../components/home/Faqs";
import SeamlessPayment from "../components/home/SeamlessPayment";
const BannerData =
{
    desktopImage: "/images/banner/Billing-BBPS.png",
    tabImage: "/images/banner/Billing-BBPS-tab.png",
    mobileImage: "/images/banner/Billing-BBPS-m.png",
    // nameIcon: "/images/wisepos-neo-img.svg",
    title: {
        highlight: "Consolidate your business expenses",
        text: " with multiple payment options"
    },
    desc:"Streamline invoices & payments with Mswipe Bharat Connect.",
    orderbtn: {
        text: "Register Now",
        url: ""
    }
}
const FeaturesData = [
    {
        image: "/images/features-icons/01.svg",
        title: "Standardised <div>format</div>",
        description: "Get invoices in one standard format under one platform."
    },
    {
        image: "/images/features-icons/02.svg",
        title: "Flexibility <div>for payment</div>",
        description: "Choose your preferred mode of payment card, UPI, net banking."
    },
    {
        image: "/images/features-icons/03.svg",
        title: "Consolidate <div>invoice</div>",
        description: "Get all your invoices under one platform."
    },
    {
        image: "/images/features-icons/04.svg",
        title: "Automated  <div>payment reminders</div>",
        description: "Save time with auto-reminders for payments."
    },
    {
        image: "/images/features-icons/05.svg",
        title: "Seamless <div>ERP integration</div>",
        description: "Effortlessly integrate your business software."
    },
    {
        image: "/images/features-icons/06.svg",
        title: "Easy tracking <div>& reporting</div>",
        description: "Access detailed payment and invoice reports."
    },
    {
        image: "/images/features-icons/07.svg",
        title: "Instant invoice <div>sharing</div>",
        description: "Share and receive invoices instantly."
    },
    {
        image: "/images/features-icons/08.svg",
        title: "Real-time payment status  <div>updates</div>",
        description: "Get payment updates instantly in real time."
    },
]
const BillingBbpsPage = () => {
    return (
        <>
            <Layout>
                <main className="contant-main-sec" >
                    <InnerBannerVideo bannerData={BannerData} />
                    <Features featuresData={FeaturesData} />
                    <Benefits />
                    <StreamlinedPayments />
                    <Faqs />
                    <SeamlessPayment />
                </main>
            </Layout>
        </>
    );
};

export default BillingBbpsPage;


