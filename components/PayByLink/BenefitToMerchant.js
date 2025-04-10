// BenefitsToMerchants.jsx
import React from "react";

const BenefitsToMerchants = () => {
  // Data object to map the four card properties
  const benefitsData = [
    {
      id: 1,
      title: "Secure transactions",
      description: "Benefit from the security of Mswipe's RBI-approved payment aggregator infrastructure.",
      imageUrl: "/images/paybylink/frame (1).png" // Replace with actual image path
    },
    {
      id: 2,
      title: "Enhanced efficiency",
      description: "Streamlined payment processes help businesses save time and reduce checkout drop-offs.",
      imageUrl: "/images/paybylink/frame (2).png" // Replace with actual image path
    },
    {
      id: 3,
      title: "Boost sales",
      description: "Seamlessly collect payments remotely at your convenience from any location, boosting sales.",
      imageUrl: "/images/paybylink/frame (3).png" // Replace with actual image path
    },
    {
      id: 4,
      title: "Increased conversions",
      description: "Pay by Link improves the checkout experience, leading to higher conversion rates.",
      imageUrl: "/images/paybylink/frame (4).png" // Replace with actual image path
    }
  ];

  return (
    <div className="benefits-container">
      <div className="header-section">
        <h1 className="title">
          <span className="title-bold">Benefits</span> to merchants
        </h1>
      </div>

      <div className="benefits-grid">
        {benefitsData.map(benefit => (
          <div key={benefit.id} className="benefit-card">
            <div className="card-image-container">
              <img src={benefit.imageUrl} alt={benefit.title} className="card-image" />
            </div>

            <h3 className="card-title">{benefit.title}</h3>
            <p className="card-description">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="signup-container">
        <button className="signup-button">
          <span>Sign up</span>
          <img className="arrow-icon" src="/images/paybylink/Arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default BenefitsToMerchants;
