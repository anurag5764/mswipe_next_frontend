import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4 order">
                  <div class="div1">
                    <div className="row">
                      <div className="col-12">
                        <Image className="mb-2" width={104} height={34} src="/images/mswipe-logo.svg" />
                        <p>Mswipe is a leading provider of the best innovative payment solutions in India empowering businesses with efficient, secure, and user-friendly technologies. Our state-of-the-art POS machines and customizable SDKs cater to diverse sectors, thereby streamlining payment processing and enhancing customer experiences across India and abroad.</p>
                        <p>With a focus on affordability, Mswipe offers competitive pricing, allowing the merchants to reduce operational costs without sacrificing quality. Our easy sign-up process, robust & fast customer support, and insightful reporting tools help businesses thrive in a cashless economy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div class="div2 footer-link">
                        <div className="row">
                          <div className="col-4">
                            <h5>POS devices</h5>
                            <ul>
                              <li><Link href="">Wisepos Plus</Link></li>
                              <li><Link href="">Wisepos Pro</Link></li>
                              <li><Link href="">Wisepos Mini</Link></li>
                              <li><Link href="">Wisepos Neo</Link></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <h5>Boombox</h5>
                            <ul>
                              <li><Link href="">Boombox B2</Link></li>
                              <li><Link href="">Boombox X1</Link></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <h5>Online payments</h5>
                            <ul>
                              <li><Link href="">Pay by link</Link></li>
                              <li><Link href="">Payment gateway</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                      <div class="div3 footer-link">
                        <div className="row">
                          <div className="col-6">
                            <h5>Value Added Services</h5>
                            <ul>
                              <li><Link href="">Merchant onboarding</Link></li>
                              <li><Link href="">UPI switch</Link></li>
                              <li><Link href="">POS switch</Link></li>
                              <li><Link href="">Terminal telemetry solutions</Link></li>
                              <li><Link href="">Settlement</Link></li>
                              <li><Link href="">Risk product</Link></li>
                              <li><Link href="">Chargebacks</Link></li>
                              <li><Link href="">Integrations</Link></li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <h5>Tracking & analytics</h5>
                            <ul>
                              <li><Link href="">Merchant app</Link></li>
                              <li><Link href="">Merchant portal</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                      <div class="div4 footer-link">
                        <div className="row">
                          <div className="col-4">
                            <h5>Company</h5>
                            <ul>
                              <li><Link href="">About</Link></li>
                              <li><Link href="">Press & media</Link></li>
                              <li><Link href="">Careers</Link></li>
                              <li><Link href="">Contact us</Link></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <h5>Partner now</h5>
                            <ul>
                              <li><Link href="">Banks</Link></li>
                              <li><Link href="">Corporates</Link></li>
                              <li><Link href="">Governments</Link></li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <h5>Support</h5>
                            <ul>
                              <li><Link href="">Support videos</Link></li>
                              <li><Link href="">API docs</Link></li>
                              <li><Link href="">Developer docs</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                      <div class="div5 footer-link">
                        <div className="row">
                          <div className="col-6">
                            <h5>Knowledge base</h5>
                            <ul>
                              <li><Link href="">Blogs</Link></li>
                              <li><Link href="">Vlogs</Link></li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <h5>Get the app</h5>
                            <ul>
                              <li>
                                <Link href="">
                                  <Image width={160} height={48} src="/images/google-play.svg" />
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  <Image width={160} height={48} src="/images/app-store.svg" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-6">
              <ul className="social-icons">
                <li>
                  <Link href=""><Image width={24} height={24} src="/images/icons/linkedin.svg" /></Link>
                </li>
                <li>
                  <Link href=""><Image width={24} height={24} src="/images/icons/instagram.svg" /></Link>
                </li>
                <li>
                  <Link href=""><Image width={24} height={24} src="/images/icons/facebook.svg" /></Link>
                </li>
              </ul>
            </div>
            <div className="col-8 col-md-6">
              <ul className="privacy-policy">
                <li>
                  <Link href="">Privacy policy</Link>
                </li>
                <li><span>|</span></li>
                <li>
                  <Link href="">Terms & conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
