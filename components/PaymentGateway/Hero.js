import React, { useEffect, useRef } from "react";

const Hero = props => {
  // Object containing all image sources
  const { images, herocontent } = props;
  const phoneRef = useRef(null);

  useEffect(() => {
    // Reference to the phone screen where GIF will play

    const phoneScreen = phoneRef.current;

    if (phoneScreen) {
      // You can add animation logic here if needed
      console.log("Phone screen ready for GIF animation");
    }
  }, [herocontent]);

  // Add a fallback for content if it's undefined or null
  const safeContent = herocontent;

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        {/* Phone mockup section */}
        <div className="phone-section">
          {/* Phone mockup container */}
          <div className="phone-container">
            <img src={images?.phoneMockup || "/images/payment-gateways/Nothing Phone (1) 1.svg"} alt="Mobile phone mockup" className="phone-mockup" />

            {/* GIF that will play in the phone screen */}
            <div ref={phoneRef} className="phone-screen">
              <img src={images?.paymentDemo || "/images/payment-gateways/payment.gif"} alt="Payment demonstration" className="payment-demo-gif" />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="content-section">
          <h1 className="payment-title">{safeContent?.title}</h1>
          <h2 className="payment-subtitle">
            {safeContent?.subtitle}
            <span className="highlight">{safeContent?.emphasis}</span>
            <span className="gateway">{safeContent?.highlight}</span>
          </h2>
          <p className="payment-description">{safeContent?.description}</p>
          <button className="payment-button">
            {safeContent?.buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" className="button-icon" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Decorative elements positioned absolutely */}
        <div className="blue-rectangle"></div>
        <div className="dot-pattern dot-pattern-top-left"></div>
        <div className="dot-pattern dot-pattern-bottom-right"></div>
        <div className="upi-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
