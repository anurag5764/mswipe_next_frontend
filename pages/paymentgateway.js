import React from "react";
import Hero from "../components/PaymentGateway/Hero";
import Layout from "../components/Layout/Layout";
import WorkForYourBussiness from "../components/home/WorkForYourBuisness";
import Faqs from "../components/home/Faqs";
import SeamlessPayment from "../components/home/SeamlessPayment";

import HowItWorks from "../components/PaymentGateway/HowItWorks";
import EasyIntegrations from "../components/PaymentGateway/EasyIntegrations";
import ExploreMore from "../components/Common/InStoreSolution/ExploreMore";

import EnsuringComplaince from "../components/home/EnsuringComplaince";
import BenefitOfMerchantaPortal from "../components/Common/MerchantApp/BenefitOfMerchantaPortal";

const acordianData = {
  prefix: "Benefit to ",
  emphasized: "merchants",
  data: [
    {
      title: "RBI-approved and highly secure",
      description:
        "We are an RBI-approved payment aggregator, ensuring your transactions are protected with the highest level of security and compliance. We also have PCI DSS and PPI licences.",
      image: ""
    },
    {
      title: "Save time with low-code integration",
      description:
        "Our low-code SDKs and APIs as well as ready-to-use plugins save significant development time. Your business can start accepting payments quickly, with minimal technical effort.",
      image: ""
    },
    {
      title: "Tailored support for easy setup",
      description:
        "Our expert technical team provides step-by-step guidance during the integration process, ensuring a seamless and worry-free setup. Whether it’s a simple plug-and-play integration or a customised solution, we’ve got you covered.",
      image: ""
    },
    {
      title: "Scalable and reliable for high growth",
      description:
        "Mswipe is designed to handle high transaction volumes, making it the perfect choice for businesses looking to scale. Even during peak sales periods, our robust infrastructure ensures smooth and uninterrupted performance. ",
      image: ""
    },
    {
      title: "Boost sales with a smooth checkout experience",
      description:
        "With fast and hassle-free payment options, Mswipe helps reduce cart abandonment and enhances customer satisfaction, ensuring every shopper enjoys a smooth checkout journey.",
      image: ""
    },
    {
      title: "Powerful dashboard for real-time tracking",
      description:
        "Gain detailed insights into your transactions and settlements with Mswipe’s merchant app and portal. Access real-time data, generate reports, and easily manage invoices to stay on top of your business finances.",
      image: ""
    }
  ]
};

const powerfulFeaturesData = {
  heading: {
    main: "Packed with ",
    emphasized: "powerful features",
    suffix: ""
  },
  items: [
    {
      icon: "/images/section/icon div.svg", // Path may need adjustment
      title: ["Simple &", "flexible Integration"],
      description:
        "Integrate our payment gateway easily onto your website or app using low-code SDKs and APIs for web, iOS or Android. Our solutions are compatible with all major programming languages, making the process quick and easy."
    },
    {
      icon: "/images/section/icon div (1).svg", // Path may need adjustment
      title: ["Easy", "Plug-ins"],
      description:
        "Seamless integration with ready-to-use kits for popular platforms like WooCommerce, Magento for your website or app. These plugins are available for Android, iOS & web."
    },
    {
      icon: "/images/section/icon div (2).svg", // Path may need adjustment
      title: ["Customisable", "for your Brand"],
      description:
        "We offer customisable integration options to align perfectly with your business requirement. Whether you need a simple setup or a whitelisted, brand-synergised payment experience, we provide tailored solutions."
    },
    {
      icon: "/images/section/icon div (3).svg", // Path may need adjustment
      title: ["Multiple", "payment options"],
      description:
        "Accept payments via UPI, net banking, credit & debit & prepaid cards, ensuring a smooth and quick checkout experience for your customers, while offering them the flexibility to choose their preferred payment method."
    }
  ]
};

const Payment = () => {
  const herocontent = {
    title: "Power Your E-commerce",
    subtitle: "With ",
    emphasis: "Mswipe Payment ",
    highlight: "Gateway",
    description: "Easily integrate with your app or website using our low-code integration or ready-to-use SDKs and plugins, available in all major programming languages.",
    buttonText: "Get it now"
  };
  const images = {
    phoneMockup: "/images/payment-gateways/Nothing Phone (1) 1.svg",
    paymentDemo: "/images/payment-gateways/payment.gif",
    // Additional images that might be needed for decorative elements
    dotPattern: "/images/payment-gateways/dot-pattern.svg",
    upiOverlay: "/images/payment-gateways/upi-overlay.svg"
  };

  return (
    <Layout>
      <div className="payment-page">
        <Hero images={images} herocontent={herocontent} />
        <WorkForYourBussiness powerfulFeaturesData={powerfulFeaturesData} />
        <BenefitOfMerchantaPortal acordianData={acordianData} />
        <HowItWorks />
        <EasyIntegrations />
        <EnsuringComplaince />
        <ExploreMore />
        <Faqs />
        <SeamlessPayment />
      </div>
    </Layout>
  );
};

export default Payment;
