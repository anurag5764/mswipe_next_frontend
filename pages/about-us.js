import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AboutUsBanner from "../components/Common/AboutUs/AboutUsBanner";
import OurJourney from "../components/Common/AboutUs/OurJourney";
import OurTeam from "../components/Common/AboutUs/OurTeam";
import Blogs from "../components/Common/AboutUs/Blogs";

const AboutUsPage = () => {
    return (
        <>
            <Layout>
                <main className="contant-main-sec" >
                   <AboutUsBanner />
                   <OurJourney />
                   <OurTeam/>
                   <Blogs />
                </main>
            </Layout>
        </>
    );
};

export default AboutUsPage;


