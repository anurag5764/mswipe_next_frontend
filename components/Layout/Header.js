import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const menuData = [
  {
    "label": "Retail",
    "dropdown": true,
    "subItems": [
      {
        "label": "In store solutions",
        "link": "/#",
        "categories": [
          {
            "name": "Smart POS",
            "products": [
              {
                "image": "/images/in-store-solutions/smart-pos/Wisepos Pro.svg",
                "name": "Wisepos Pro",
                "link": "/wisepos-pro"
              },
              {
                "image": "/images/in-store-solutions/smart-pos/Wisepos Neo.svg",
                "name": "Wisepos Neo",
                "link": "/wisepos-neo"
              },
              {
                "image": "/images/in-store-solutions/smart-pos/Wisepos Plus.svg",
                "name": "Wisepos Plus",
                "link": "/wisepos-plus"
              }
            ]
          },
          {
            "name": "Soundbox",
            "products": [
              {
                "image": "/images/in-store-solutions/soundbox/Boombox X1.svg",
                "name": "Boombox X1",
                "link": "boombox-x1"
              },
              {
                "image": "/images/in-store-solutions/soundbox/Boombox B2.svg",
                "name": "Boombox B2",
                "link": "boombox-b1"
              }
            ]
          }
        ]
      },
      {
        "label": "Online solutions",
        "link": "/#",
        "categories": [
          {
            "name": "Payment gateway",
            "products": [
              {
                "image": "/images/online-solutions/Payment gateway.png",
                "name": "Scale your e-commerce business with Mswipe Payment Gateway.",
                "link": "/#"
              },

            ]
          },
          {
            "name": "Pay by link",
            "products": [
              {
                "image": "/images/online-solutions/Pay by link.png",
                "name": "Simplify payments with Mswipe Pay by Link.",
                "link": "/#"
              },
            ]
          }
        ]
      },
      {
        "label": "Tracking solutions",
        "link": "/#",
        "categories": [
          {
            "name": "Merchant app",
            "products": [
              {
                "image": "/images/tracking-solutions/Merchant app.png",
                "name": "Manage transactions, devices, settlements, and invoices on the go.",
                "link": "/merchant-app"
              },

            ]
          },
          {
            "name": "Merchant portal",
            "products": [
              {
                "image": "/images/tracking-solutions/Merchant portal.png",
                "name": "Effortlessly handle transactions, devices, settlements, and invoices.",
                "link": "/merchant-portal"
              },
            ]
          }
        ]
      }
    ]
  },
  {
    "label": "Banks & Enterprises",
    "dropdown": false,
    "link": "/banks-enterprises"
  },
  {
    "label": "Billing BBPS",
    "dropdown": false,
    "link": "/billing-bbps"
  },
  {
    "label": "Knowledge",
    "dropdown": false,
    "link": "/knowledge"
  },
  {
    "label": "Developers",
    "dropdown": false,
    "link": "/developers"
  },
  {
    "label": "About Us",
    "dropdown": false,
    "link": "/about-us"
  },
  {
    "label": "Contact Us",
    "dropdown": false,
    "link": "/contact-us"
  }
]
console.log("menuData", menuData)
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main"); // "main" or "submenu"
  const [submenuItems, setSubmenuItems] = useState([]);
  console.log("submenuItems", submenuItems)
  const handleSubMenu = (submenu) => {
    setSubmenuItems(submenu);
    setActiveMenu("submenu");
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap's lg breakpoint is 992px
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const locations = [
    { label: "India", img: "/images/flag-icon/india.svg" },
    { label: "Singapore", img: "/images/flag-icon/singapore.svg" },
    { label: "UAE", img: "/images/flag-icon/uae.svg" },
  ];
  const language = [
    { label: "EN", img: "/images/language/en.svg" },
    { label: "HI", img: "/images/language/en.svg" },
    { label: "MA", img: "/images/language/en.svg" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(locations[0]);  // India selected by default

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [isOpenLangauge, setIsOpenLangauge] = useState(false);
  const [selectedOptionLangauge, setSelectedOptionLangauge] = useState(language[0]);  // India selected by default

  const handleSelectLangauge = (option) => {
    setSelectedOptionLangauge(option);
    setIsOpenLangauge(false);
  };
  const dropdownRef = useRef(null);

  const handleTabClick = (e) => {
    // Prevent the dropdown from closing
    e.stopPropagation();
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    $(document).ready(function () {
      var nav_header = $(".header_wrap");
      var pos = nav_header.position();
      $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 100) {
          nav_header.addClass("stick");
        } else {
          nav_header.removeClass("stick");
        }
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      // make it as accordion for smaller screens
      if (window.innerWidth < 992) {
        // close all inner dropdowns when parent is closed
        document
          .querySelectorAll(".navbar .dropdown")
          .forEach(function (everydropdown) {
            everydropdown.addEventListener("hidden.bs.dropdown", function () {
              // after dropdown is hidden, then find all submenus
              this.querySelectorAll(".submenu").forEach(function (
                everysubmenu
              ) {
                // hide every submenu as well
                everysubmenu.style.display = "none";
              });
            });
          });

        document
          .querySelectorAll(".dropdown-menu a")
          .forEach(function (element) {
            element.addEventListener("click", function (e) {
              let nextEl = this.nextElementSibling;
              if (nextEl && nextEl.classList.contains("submenu")) {
                // prevent opening link if link needs to open dropdown
                e.preventDefault();
                if (nextEl.style.display == "block") {
                  nextEl.style.display = "none";
                } else {
                  nextEl.style.display = "block";
                }
              }
            });
          });
      }
      // end if innerWidth
    });
    // DOMContentLoaded  end
  });
  return (
    <header className="header_wrap">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="header-top">
            <a className="navbar-brand" href="/">
              <Image width={104} height={34} src="/images/mswipe-logo.svg" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuData.map((item, index) =>
                item.dropdown ? (
                  <li className="nav-item dropdown" key={index}>
                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                      {item.label}
                    </Link>

                    {!isMobile ? (
                      <div className="dropdown-menu">
                        <div className="container">
                          <div>Solutions</div>
                          <div className="header-tab" onClick={handleTabClick}>
                            <Tabs
                              defaultActiveKey={item.subItems?.[0]?.label} // Ensure default key exists
                              id="uncontrolled-tab-example"
                              className="mb-3"
                            >
                              {item.subItems.map((subItem, subIndex) => (
                                <Tab key={subIndex} eventKey={subItem.label} title={
                                  <span>
                                    {subItem.label} <img src="/images/icons/greater-arrow-right.svg" alt="arrow" />
                                  </span>
                                }>
                                  {subItem.label === "In store solutions" ? (
                                    <div className="box-wrapper">
                                      {subItem.categories.map((category, catIndex) => (
                                        <div className="box" key={catIndex}>
                                          <div className="head">{category.name}</div>
                                          <ul className="item-lists">
                                            {category.products.map((product, prodIndex) => (
                                              <li key={prodIndex}>
                                                <Image width={91} height={107} src={product.image} alt={product.name} />
                                                <div className="title">{product.name}</div>
                                                <Link className="learn-more" href={product.link}>
                                                  Learn More <img src="/images/icons/greater-arrow-right.svg" alt="arrow" />
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="box-wrapper two-col">
                                      {subItem.categories.map((category, catIndex) => (
                                        <div className="box" key={catIndex}>
                                          <div className="head">{category.name}</div>
                                          <div className="inner">
                                            {category.products.map((product, prodIndex) => (
                                              <div className="row align-items-center">
                                                <div className="col-5">
                                                  <Image width={138} height={213} src={product.image} alt={product.name} />
                                                </div>
                                                <div className="col-7">
                                                  <div className="title">{product.name}</div>
                                                  <div className=""><Link className="learn-more" href={product.link}>Learn More <img src="/images/icons/greater-arrow-right.svg" /></Link></div>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </Tab>
                              ))}
                            </Tabs>
                          </div>
                        </div>
                      </div>
                    ) : (

                      <div className="dropdown-menu dropdownMobile show">
                        {activeMenu === "main" ? (
                          <ul className="submenu-m">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a href="#" onClick={(e) => {
                                  e.preventDefault(); // Prevent default anchor behavior
                                  handleSubMenu(subItem);
                                }}>
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="category-wrap">
                            <button className="back-arrow-btn" onClick={() => setActiveMenu("main")}>
                              <span className="back-arrow">
                                <img src="/images/icons/back-arrow.svg" alt="Back" />
                              </span>
                              Go back
                            </button>

                            {/* {submenuItems?.length > 0 && (
                              submenuItems.map((category, catIndex) => ( */}
                            <>
                              {submenuItems.label === "In store solutions" ? (
                                <div className="box-wrapper">
                                  {submenuItems.categories.map((subCategory, subCatIndex) => (
                                    <div className="box" key={subCatIndex}>
                                      <div className="head">{subCategory.name}</div>
                                      <ul className="item-lists">
                                        {subCategory.products.map((product, prodIndex) => (
                                          <li key={prodIndex}>
                                            <div className="image"><Image width={38} height={64} src={product.image} alt={product.name} /></div>
                                            <div>
                                              <div className="title">{product.name}</div>
                                              <Link className="learn-more" href={product.link}>
                                                Learn More <img src="/images/icons/greater-arrow-right.svg" alt="arrow" />
                                              </Link>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="box-wrapper two-col">
                                  {submenuItems.categories.map((subCategory, subCatIndex) => (
                                    <div className="box" key={subCatIndex}>
                                      <div className="head">{subCategory.name}</div>
                                      <div className="inner">
                                        {subCategory.products.map((product, prodIndex) => (
                                          <div className="row align-items-center text-center">
                                            <div className="col-12">
                                              <Image width={100} height={180} src={product.image} alt={product.name} />
                                            </div>
                                            <div className="col-12">
                                              <div className="title">{product.name}</div>
                                              <div className=""><Link className="learn-more" href={product.link}>Learn More <img src="/images/icons/greater-arrow-right.svg" /></Link></div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {/* <div className="" >
                                    {category.subItems?.map((subItem, subIndex) => (
                                      <div key={subIndex} eventKey={subItem.label}>


                                      </div>
                                    ))}
                                  </div> */}
                            </>
                            {/* ))
                            )} */}
                            {/* {submenuItems.length > 0 ? (
            submenuItems.map((category, catIndex) => (
              <div key={catIndex}>
                <strong>{category.name}</strong>
                {category.products.map((product, prodIndex) => (
                  <Link key={prodIndex} href={product.link}>
                    {product.name}
                  </Link>
                ))}
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )} */}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ) : (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" href={item.link}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}

            </ul>
            <div className="d-flex align-items-center search-dropdown-header">
              <form className="d-flex header-search" role="search">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                <Link href="" className="" type="submit"><Image width={20} height={20} src="/images/icons/search-icon.svg" /></Link>
              </form>
              <div className="select-country relative w-64">
                <div
                  className="customSelect cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="selectedOption flex items-center">
                    <img
                      src={selectedOption.img}
                      alt={selectedOption.label}
                      className="w-5 h-5 me-2"
                    />
                    {selectedOption.label}
                  </div>
                </div>

                {isOpen && (
                  <div className="dropdownContent absolute top-full left-0 w-full bg-white shadow-lg border rounded-lg mt-1 z-10">
                    {locations.map((loc, index) => (
                      <div
                        key={index}
                        className={`dropdownItem flex items-center p-2 hover:bg-gray-100 cursor-pointer ${selectedOption.label === loc.label ? "bg-gray-200" : ""
                          }`}
                        onClick={() => handleSelect(loc)}
                      >
                        <img src={loc.img} alt={loc.label} className="w-5 h-5 me-2" />
                        {loc.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="select-country select-language relative w-64">
                <div
                  className="customSelect cursor-pointer"
                  onClick={() => setIsOpenLangauge(!isOpenLangauge)}
                >
                  <div className="selectedOption flex items-center">
                    <img
                      src={selectedOptionLangauge.img}
                      alt={selectedOptionLangauge.label}
                      className="w-5 h-5 me-2"
                    />
                    {selectedOptionLangauge.label}
                  </div>
                </div>

                {isOpenLangauge && (
                  <div className="dropdownContent absolute top-full left-0 w-full bg-white shadow-lg border rounded-lg mt-1 z-10">
                    {language.map((loc, index) => (
                      <div
                        key={index}
                        className={`dropdownItem flex items-center p-2 hover:bg-gray-100 cursor-pointer ${selectedOptionLangauge.label === loc.label ? "bg-gray-200" : ""
                          }`}
                        onClick={() => handleSelectLangauge(loc)}
                      >
                        <img src={loc.img} alt={loc.label} className="w-5 h-5 me-2" />
                        {loc.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="signinsignup-wrap d-none">
                <Link className="signinsignup" href=""> Sign in/Sign up <img src="/images/icons/arrow-right.svg" alt="" /> </Link>
              </div>
            </div>
            <div className="mobile-signinsignup">
              <div className="signinsignup-wrap">
                <Link className="signinsignup" href=""> Sign in/Sign up <img src="/images/icons/arrow-right.svg" alt="" /> </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;
