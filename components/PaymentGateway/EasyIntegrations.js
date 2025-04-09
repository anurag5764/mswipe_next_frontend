import React from "react";

const EasyIntegrations = () => {
  // Image URLs will be provided later
  const logos = {
    arrowIcon: "", // URL for the arrow icon
    buttonArrow: "", // URL for the button arrow icon
    apple: "/images/Easy Integrations/Integration/apple.png", // URL for Apple/iOS logo
    android: "/images/Easy Integrations/Integration/android.png", // URL for Android logo
    java: "/images/Easy Integrations/Integration/javascript.png", // URL for Java logo
    php: "/images/Easy Integrations/Integration/php.png", // URL for PHP logo
    python: "/images/Easy Integrations/Integration/python.png", // URL for Python logo
    nodejs: "/images/Easy Integrations/Integration/node.png", // URL for Node.js logo
    netCore: "/images/Easy Integrations/Integration/net.png", // URL for .NET logo
    wooCommerce: "/images/Easy Integrations/Plugins/woo.png", // URL for WooCommerce logo
    magento: "/images/Easy Integrations/Plugins/magneto.png" // URL for Magento logo
  };

  const bulletPointImage = "/images/Easy Integrations/icon div.png"; // Replace with actual path to the bullet point image

  // Background wave image path (Image 3)
  const backgroundWaveImage = "/images/Easy Integrations/Vector 252.png";

  return (
    <div className="integration-container">
      {/* Background wave - now using image instead of CSS */}
      <div className="background-wave">
        <img src={backgroundWaveImage} alt="" className="wave-image" />
      </div>

      <div className="content-container">
        {/* Left section */}
        <div className="content-left">
          <div className="content-title">
            <h2 className="title">
              The <span className="emphasis">easiest</span> integrations
            </h2>
            <p className="description">Integrate effortlessly with our simple, well-documented payment gateway, designed for smooth, hassle-free setup.</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="bullet-point">
                <img src={bulletPointImage} alt="" className="bullet-image" />
              </div>
              <p>Low-code kits for Android and iOS SDKs.</p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">
                <img src={bulletPointImage} alt="" className="bullet-image" />
              </div>
              <p>Plug-ins for WooCommerce and Magento platforms.</p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">
                <img src={bulletPointImage} alt="" className="bullet-image" />
              </div>
              <p>Supports Java, PHP, Python, Node.js, .NETCore.</p>
            </div>

            <div className="feature-item">
              <div className="bullet-point">
                <img src={bulletPointImage} alt="" className="bullet-image" />
              </div>
              <p>Seamless integration enhances payments.</p>
            </div>
          </div>

          <a href="#" className="doc-button">
            See documentation
            {/* Using Image 1 for the arrow */}
            <img src="/images/Easy Integrations/Frame.png" alt="" className="arrow-icon" />
          </a>
        </div>

        {/* Right section - only visible on desktop */}
        <div className="content-right">
          <div className="integrations-card">
            <div className="integration_container">
              <h3 className="section-title">Integrations</h3>

              <div className="platform-logos">
                {/* Platform logos */}

                <img src={logos.apple} alt="Apple iOS" className="logo logo-apple" />

                <img src={logos.android} alt="Android" className="logo logo-android" />

                <img src={logos.java} alt="Java" className="logo logo-java" />

                <img src={logos.php} alt="Android" className="logo logo-android" />

                <img src={logos.python} alt="Python" className="logo logo-python" />

                <img src={logos.nodejs} alt="Node.js" className="logo logo-nodejs" />

                <img src={logos.netCore} alt=".NET Core" className="logo logo-net" />
              </div>
            </div>
            <div className="plugins-container">
              <h3 className="section-title">Plugins</h3>

              <div className="plugin-logos">
                {/* Plugin logos */}
                <div className="logo-container">
                  <img src={logos.wooCommerce} alt="WooCommerce" className="logo logo-woo" />
                </div>
                <div className="logo-container">
                  <img src={logos.magento} alt="Magento" className="logo logo-magento" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyIntegrations;
