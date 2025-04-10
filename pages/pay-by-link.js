import React from "react";
import Layout from "../components/Layout/Layout";
import ExploreMore from "../components/Common/InStoreSolution/ExploreMore";
import EnsuringComplaince from "../components/home/EnsuringComplaince";
import HowItWorks from "../components/PaymentGateway/HowItWorks";
import Faqs from "../components/home/Faqs";
import SeamlessPayment from "../components/home/SeamlessPayment";
import Hero from "../components/PaymentGateway/Hero";
import AcceptAllPayments from "../components/Common/InStoreSolution/AcceptAllPayments";
import BenefitsToMerchants from "../components/PayByLink/BenefitToMerchant";
const images = {
  phoneMockup: "/images/payment-gateways/Nothing Phone (1) 1.svg",
  paymentDemo: "/images/paybylink/pay-by-link.gif",
  blueRectangle: { link: "/images/paybylink/frame.svg", className: "paybylinkoverlay" },
  dotPattern: { link: "/images/payment-gateways/Vector.svg", className: "dot-pattern paybylinkBluedot" },
  upiOverlay: { link: "/images/paybylink/image 4473.png", className: "paybylinkIcons" }
};
const herocontent = {
  title: "Collect Payments",
  subtitle: "",
  emphasis: "Anywhere ",
  highlight: "Anytime",
  description:
    "With Mswipe Pay by Link, collecting payments has never been easier. Whether you're selling online or offline, instantly generate and share payment links without the need for a website, app or coding knowledge.",
  buttonText: "Generate Payment Link",
  signup: true
};

const slidesData = {
  title: (
    <div className="head01">
      How it <strong>works</strong> ?
    </div>
  ),
  content: [
    {
      title: "Create payment link ",
      description: "Generate a payment link for your product or service directly via the Mswipe Merchant App or Portal by clicking on ‘Pay by Link.",
      icon: "/images/paybylink/Group 2085663401.png",
      bgColor: "bg-black text-white",
      image: "/images/paybylink/Payby link.svg" // Replace with actual image
    },
    {
      title: "Share the link",
      description: "Include the amount, attach the invoice and send the link through WhatsApp, SMS, email, chat, or any other platform.",
      icon: "/images/paybylink/Group 2085663401 (1).png",
      bgColor: "bg-white text-black border",
      image: "/images/paybylink/Payby link (1).svg" // Replace with actual image
    },
    {
      title: "Get paid Instantly",
      description: "Track payments and settlements in real time with our powerful dashboard, simplifying reconciliation and business management.",
      icon: "/images/paybylink/Group 2085663401 (2).png",
      bgColor: "bg-white text-black border",
      image: "/images/paybylink/Payby link (2).svg" // Replace with actual image
    }
  ]
};

const payByLink = () => {
  return (
    <Layout>
      <Hero images={images} herocontent={herocontent} />
      <BenefitsToMerchants />
      <AcceptAllPayments slidesData={slidesData} />
      <HowItWorks />

      <EnsuringComplaince />
      <ExploreMore />
      <Faqs />
      <SeamlessPayment />
    </Layout>
  );
};

export default payByLink;
