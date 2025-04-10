import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const AcceptAllPayments = ({ slidesData }) => {
  const data = {
    title: (
      <div className="head01">
        <strong>Accept</strong> all payments
      </div>
    ),

    content: [
      {
        title: "QR code",
        description: "Scan and pay instantly with dynamic QR codes.",
        icon: "/images/icons/qrcode.svg",
        bgColor: "bg-black text-white",
        image: "/images/accept-all-payments/01.png" // Replace with actual image
      },
      {
        title: "NFC",
        description: "Tap-and-go payments for a faster checkout.",
        icon: "/images/icons/nfc.svg",
        bgColor: "bg-white text-black border",
        image: "/images/accept-all-payments/02.png" // Replace with actual image
      },
      {
        title: "IC card",
        description: "Chip-based payments for enhanced security and reliability.",
        icon: "/images/icons/ic-card.svg",
        bgColor: "bg-white text-black border",
        image: "/images/accept-all-payments/03.png" // Replace with actual image
      }
    ]
  };

  const slides = slidesData || data;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, 900000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="accept-all-payments-section">
        <div className="container">
          <div className="row text-center">{slides.title}</div>
          <div className="row">
            <div className="col-12">
              <div className="payment-slider">
                {/* Left Side: Fixed Titles & Descriptions */}
                <div className="text-section">
                  {slides.content.map((slide, index) => (
                    <div
                      key={index}
                      className={`text-card ${index === activeIndex ? "active" : ""}`}
                      style={{
                        backgroundColor: slide.bgColor,
                        color: slide.textColor
                      }}
                    >
                      <div className="card-content">
                        <span className="icon">
                          <Image width={24} height={24} src={slide.icon} />
                        </span>
                        <div>
                          <h3 className="title">{slide.title}</h3>
                          <p className="description">{slide.description}</p>
                        </div>
                      </div>
                      {/* Progress Bar (Inside Each Card) */}
                      <div className="progress-bar">{index === activeIndex && <div className="progress"></div>}</div>
                    </div>
                  ))}
                </div>

                {/* Right Side: Swiper Slider */}
                <div className="image-section">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    // autoplay={false}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false
                    }}
                    onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                  >
                    {slides.content.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <img src={slide.image} alt={slide.title} className="slide-image" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcceptAllPayments;
