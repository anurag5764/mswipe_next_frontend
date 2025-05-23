import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
const benefitData = {
  title: "Benefits of ",
  emphasized: "merchant app",
  data: [
    {
      title: "Powerful dashboard",
      description: "Get a clear overview of your daily and monthly transactions. Track payment trends, settlements, and reward metrics at a glance.",
      image: "/images/benefit-portal/01.png"
    },
    {
      title: "Track transactions",
      description: "Apply filters by date, month, or transaction mode for precise insights. Get account statements in pdf or excel.",
      image: "/images/benefit-portal/02.png"
    },
    {
      title: "Track settlements",
      description: "Monitor the status of your transaction settlements.",
      image: "/images/benefit-portal/03.png"
    },
    {
      title: "Robust support",
      description: "Contact your Relationship Manager, raise tickets, profile management simplified. Manage multiple accounts effortlessly.",
      image: "/images/benefit-portal/04.png"
    }
  ]
};
const BenefitOfMerchantaPortal = ({ acordianData }) => {
  // Use default data if acordianData is not provided
  const dataToUse = acordianData || benefitData;

  const [image, setImage] = useState(dataToUse.data[0].image);
  const title = dataToUse.title;
  const emphasis = dataToUse.emphasized;
  const data = dataToUse.data;

  return (
    <>
      <section className="merchant-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="head01">
                <div>
                  {" "}
                  {title}
                  <strong>{emphasis}</strong>{" "}
                </div>
              </h2>
            </div>
          </div>
          <div className="row sp-bg mt-2 mt-lg-5 align-items-center">
            <div className="col-lg-6">
              <div className="sp-container">
                <img className="img-fluid" src={image} alt="benefit-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <Accordion className="accordion-04" defaultActiveKey="0">
                {data.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index} onClick={() => setImage(item.image || data[0].image)}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.description}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitOfMerchantaPortal;
