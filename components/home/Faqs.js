'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const faqData = [
  {
    question: "How do I get started with Mswipe payments?",
    answer: [
      {
        subQuestion: "How do I get started with Mswipe payments?",
        subAnswers: [
          "Getting started with Mswipe is simple! Just have your KYC documents ready: PAN card, business proof, bank account details, a cancelled cheque, and photos of your business (inside and outside). Click the sign-up link, choose your product, fill in the form, complete KYC, and finish the payment process—that’s it! You’re all set to start accepting payments with Mswipe.",
          "If you're a bank or corporate representative, simply fill out the form, and our team will reach out to discuss your customised requirements.",
        ],
      },
    ],
  },
  {
    question: "What does Mswipe offer?",
    answer: [
      {
        subQuestion: "What does Mswipe offer?",
        subAnswers: [
          "Mswipe offers a complete payment solution from POS terminals, QR code payments, mobile payment links, and payment gateway integration.",
        ],
      },
    ],
  },
  {
    question: "Can I accept Amex cards with an Mswipe POS terminal?",
    answer: [
      {
        subQuestion: "Can I accept Amex cards with an Mswipe POS terminal?",
        subAnswers: [
          "Yes, Mswipe POS terminals support Amex cards along with Visa, Mastercard, and Rupay cards.",
        ],
      },
    ],
  },
  {
    question: "Can I accept international debit / credit cards with an Mswipe POS terminal?",
    answer: [
      {
        subQuestion: "Can I accept international debit / credit cards with an Mswipe POS terminal?",
        subAnswers: [
          "Yes, international debit and credit cards are accepted, depending on your merchant account settings.",
        ],
      },
    ],
  },
  {
    question: "How secure are Mswipe devices for transactions?",
    answer: [
      {
        subQuestion: "How secure are Mswipe devices for transactions?",
        subAnswers: [
          "Mswipe devices are PCI-DSS compliant and support end-to-end encryption to ensure transaction security.",
        ],
      },
    ],
  },
  {
    question: "Can Mswipe devices be integrated with business software?",
    answer: [
      {
        subQuestion: "Can Mswipe devices be integrated with business software?",
        subAnswers: [
          "Yes, Mswipe provides APIs and SDKs for easy integration with your existing business software and ERP systems.",
        ],
      },
    ],
  },
];

const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  const handleBack = () => {
    setSelectedIndex(null);
  };

  return (
    <section className="faqs-section">
      <div className="container">
        {/* Heading */}
        <div className="row text-center mb-4">
          <div className="col-12">
            <h2 className="head01">
              How can we <strong>help</strong> you today?
            </h2>
          </div>
        </div>

        {/* Question & Answer Section */}
        <div className="row">
          <div className="col-12">
            <div className="faq-container">
              <ul className="question-lists">
                {selectedIndex === null ? (
                  faqData.map((faq, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleSelect(index)}
                        className="faq-question fs-18"
                      >
                        {faq.question}
                        <span className="arrow-icon">
                          <Image
                            src="/images/icons/arrow_outward.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </span>
                      </button>
                    </li>
                  ))
                ) : (
                  <div className="answer-section">
                    {faqData[selectedIndex]?.answer?.map((sub, i) => (
                      <div key={`${selectedIndex}-${i}`}>
                        <div className="sub-question">
                          <Image
                            src="/images/icons/question-icon.svg"
                            alt=""
                            width={40}
                            height={40}
                          />
                          {sub.subQuestion}
                        </div>
                        <ul className="lists-item">
                          {sub.subAnswers.map((item, idx) => (
                            <li key={idx} className="sub-answer">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Related Questions */}
                    <div className="related-question mt-4">
                      <div className="title">Related Questions</div>
                      <div className="swiper-custom mt-2">
                        <Swiper
                          slidesPerView={3}
                          spaceBetween={25}
                          keyboard={{ enabled: true }}
                          speed={1000}
                          modules={[Keyboard, Autoplay]}
                          breakpoints={{
                            0: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                          }}
                        >
                          {faqData.map((faq, idx) => {
                            if (idx !== selectedIndex) {
                              return (
                                <SwiperSlide key={idx}>
                                  <div className="related-question-data">
                                    <button
                                      onClick={() => handleSelect(idx)}
                                      className="faq-question-rq"
                                    >
                                      {faq.question}
                                      <span className="arrow-icon">
                                        <Image
                                          src="/images/icons/arrow_outward-no-bg.svg"
                                          alt=""
                                          width={16}
                                          height={16}
                                        />
                                      </span>
                                    </button>
                                  </div>
                                </SwiperSlide>
                              );
                            }
                            return null;
                          })}
                        </Swiper>
                      </div>
                    </div>

                    {/* Back to Questions */}
                    <button onClick={handleBack} className="back-button mt-4">
                      X
                      {/* ← Back to Questions */}
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="search-faqs">
              <input
                type="text"
                placeholder="Type your question here..."
                className="search-input"
              />
              <Image
                className="icon"
                src="/images/icons/search-faq-icon.svg"
                alt=""
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
