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
            <img src={images?.phoneMockup} alt="Mobile phone mockup" className="phone-mockup" />

            {/* GIF that will play in the phone screen */}
            <div ref={phoneRef} className="phone-screen">
              <img src={images?.paymentDemo} alt="Payment demonstration" className="payment-demo-gif" />
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
          <div className="button-div">
            <button className="payment-button">
              <span>{safeContent?.buttonText}</span>
              <img className="button-icon" src="/images/paybylink/Arrow.svg" alt="arrow" />
            </button>
            {herocontent.signup && (
              <button className="button-second">
                <span>Sign up </span>
                <img className="button-icon" src="/images/paybylink/Arrow.svg" alt="arrow" />
              </button>
            )}
          </div>
        </div>

        {/* Decorative elements positioned absolutely */}
        <img className={images.blueRectangle.className} src={images.blueRectangle.link} />
        <img className={images.dotPattern.className} src={images.dotPattern.link} />
        <img className="dot-pattern dot-pattern-bottom-right" src={images.dotPattern.link} />
        <img className={images.upiOverlay.className} src={images.upiOverlay.link} />
      </div>
    </div>
  );
};

export default Hero;
