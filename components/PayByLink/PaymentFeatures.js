import React from "react";

const paymentFeatures = [
  {
    id: 1,
    title: "Instant payment collection",
    description: "Share payment links through SMS, email, WhatsApp, or chat using Mswipe merchant app or portal.",
    icon: "/images/paybylink/icon div.png"
  },
  {
    id: 2,
    title: "Set expiry dates",
    description: "You can set the expiry date of the payment link based on your requirement.",
    icon: "/images/paybylink/icon div (1).png"
  },
  {
    id: 3,
    title: "No coding required",
    description: "Use the service without needing technical expertise, no need for a website or app.",
    icon: "/images/paybylink/icon div (2).png"
  },
  {
    id: 4,
    title: "Wide payment options",
    description: "Customers can pay using UPI, credit/debit cards or net banking ensuring convenience .",
    icon: "/images/paybylink/icon div (3).png"
  },
  {
    id: 5,
    title: "Real-time monitoring",
    description: "Track payments, analyse transactions, and review settlement reports with a robust dashboard on the merchant app and portal.",
    icon: "/images/paybylink/icon div (4).png"
  }
];

const PaymentFeaturesComponent = () => {
  return (
    <div className="payFeatures-wrapper">
      <div className="payFeatures-headingBox">
        <h2 className="payFeatures-mainHeading">
          Packed with <span className="payFeatures-headingHighlight">powerful features</span>
        </h2>
      </div>

      <div className="payFeatures-contentBox">
        <div className="payFeatures-itemsLayout">
          {paymentFeatures.slice(0, 5).map(feature => (
            <div key={feature.id} className="payFeatures-item">
              <div className="payFeatures-iconWrapper">
                <img src={feature.icon} alt={feature.title} className="payFeatures-iconImage" />
              </div>
              <div className="payfeature-div">
                <h3 className="payFeatures-itemTitle">{feature.title}</h3>
                <p className="payFeatures-itemText">{feature.description}</p>
              </div>
            </div>
          ))}

          <div className="payFeatures-ctaBlock">
            <h3 className="payFeatures-ctaHeading">Sign up today to take advantage of our powerful features.</h3>
            <div className="payFeatures-ctaButtonBox">
              <button className="payFeatures-ctaButton">
                Sign up
                <img src="/images/paybylink/Arrow.svg" alt="Arrow right" className="payFeatures-arrowIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFeaturesComponent;
