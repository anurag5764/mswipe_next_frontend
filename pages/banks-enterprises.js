import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import FlexiblePaymentSolution from "../components/Common/BanksEnterprises/FlexiblePaymentSolution";
import PaymentTechnology from "../components/Common/BanksEnterprises/PaymentTechnology";
import MswipeSwitch from "../components/Common/BanksEnterprises/MswipeSwitch";
import TerminalTelemetry from "../components/Common/BanksEnterprises/TerminalTelemetry";
import FraudRiskManagement from "../components/Common/BanksEnterprises/FraudRiskManagement";
import ChargeBacks from "../components/Common/BanksEnterprises/ChargeBacks";
import Integration from "../components/Common/BanksEnterprises/Integration";
import BrandEMI from "../components/Common/BanksEnterprises/BrandEMI";
import BankEMI from "../components/Common/BanksEnterprises/BankEMI";
import TopBanks from "../components/Common/BanksEnterprises/TopBanks";
import EnsuringComplaince from "../components/home/EnsuringComplaince";

const BanksEnterprisesPage = () => {
    return (
        <>
            <Layout>
                <main className="contant-main-sec" >
                    <FlexiblePaymentSolution />
                    <PaymentTechnology />
                    <MswipeSwitch />
                    <TerminalTelemetry />
                    <FraudRiskManagement />
                    <ChargeBacks />
                    <Integration />
                    <BrandEMI />
                    <BankEMI />
                    <TopBanks />
                    <EnsuringComplaince />
                </main>
            </Layout>
        </>
    );
};

export default BanksEnterprisesPage;


