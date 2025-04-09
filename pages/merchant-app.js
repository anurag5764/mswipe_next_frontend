import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import BrandEMI from "../components/Common/BanksEnterprises/BrandEMI";
import BenefitOfMerchantaPortal from "../components/Common/MerchantApp/BenefitOfMerchantaPortal";
import BenefitOfMerchantaApp from "../components/Common/MerchantApp/BenefitOfMerchantaApp";

const MerchantAppsPage = () => {
    return (
        <>
            <Layout>
                <main className="contant-main-sec" >
                    <BenefitOfMerchantaPortal />
                    <BenefitOfMerchantaApp />
                </main>
            </Layout>
        </>
    );
};

export default MerchantAppsPage;


