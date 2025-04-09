import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import InnerBanner from "../components/Common/Careers/Banner";
import WeSayItStraight from "../components/Common/Careers/WeSayItStraight";
const BannerData =
{
    desktopImage: "/images/banner/careers.png",
    tabImage: "/images/banner/wisepse-pro-tab.png",
    mobileImage: "/images/banner/wisepse-pro-m.png",
    nameIcon: "/images/wisepos-neo-img.svg",
    title: {
        highlight: "<strong>Beyond everything,</strong>",
        text: " <strong>people first</strong> "
    },
    description:"Find out how you will fit in with us.",
    orderbtn: {
        text: "See open positions",
        url: ""
    }
}

const WiseposNeoPage = () => {
    return (
        <>
            <Layout>
                <main className="contant-main-sec" >
                    <InnerBanner bannerData={BannerData} />
                    <WeSayItStraight />
                </main>
            </Layout>
        </>
    );
};

export default WiseposNeoPage;


