import React, { useState } from 'react'
// import { FaArrowUpRight } from "react-icons/fa6";
import { FaArrowUpRight } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
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
            }
        ]

    },
    {
        question: "What does Mswipe offer?",
        answer: [
            {
                subQuestion: "How do I get started with Mswipe payments?",
                subAnswers: [
                    "2 Getting started with Mswipe is simple! Just have your KYC documents ready: PAN card, business proof, bank account details, a cancelled cheque, and photos of your business (inside and outside). Click the sign-up link, choose your product, fill in the form, complete KYC, and finish the payment process—that’s it! You’re all set to start accepting payments with Mswipe.",
                    "If you're a bank or corporate representative, simply fill out the form, and our team will reach out to discuss your customised requirements.",
                ],
            }
        ]
    },
    {
        question: "Can I accept Amex cards with an Mswipe POS terminal?",
        answer: [
            {
                subQuestion: "How do I get started with Mswipe payments?",
                subAnswers: [
                    "3 Getting started with Mswipe is simple! Just have your KYC documents ready: PAN card, business proof, bank account details, a cancelled cheque, and photos of your business (inside and outside). Click the sign-up link, choose your product, fill in the form, complete KYC, and finish the payment process—that’s it! You’re all set to start accepting payments with Mswipe.",
                    "If you're a bank or corporate representative, simply fill out the form, and our team will reach out to discuss your customised requirements.",
                ],
            }
        ]
    },
    {
        question: "Can I accept international debit / credit cards with an Mswipe POS terminal?",
        answer: [
            {
                subQuestion: "How do I get started with Mswipe payments?",
                subAnswers: [
                    "4 Getting started with Mswipe is simple! Just have your KYC documents ready: PAN card, business proof, bank account details, a cancelled cheque, and photos of your business (inside and outside). Click the sign-up link, choose your product, fill in the form, complete KYC, and finish the payment process—that’s it! You’re all set to start accepting payments with Mswipe.",
                    "If you're a bank or corporate representative, simply fill out the form, and our team will reach out to discuss your customised requirements.",
                ],
            }
        ]
    },
    {
        question: "How secure are Mswipe devices for transactions?",
        answer: [
            {
                subQuestion: "How do I get started with Mswipe payments?",
                subAnswers: [
                    "5 Getting started with Mswipe is simple! Just have your KYC documents ready: PAN card, business proof, bank account details, a cancelled cheque, and photos of your business (inside and outside). Click the sign-up link, choose your product, fill in the form, complete KYC, and finish the payment process—that’s it! You’re all set to start accepting payments with Mswipe.",
                    "If you're a bank or corporate representative, simply fill out the form, and our team will reach out to discuss your customised requirements.",
                ],
            }
        ]
    },
    {
        question: "Can Mswipe devices be integrated with business software?",
        answer: [
            {
                subQuestion: "How do I get started with Mswipe payments?",
                subAnswers: [
                    "6 Getting started with Mswipe is simple! Just have your KYC documents ready: PAN card, business proof, bank account details, a cancelled cheque, and photos of your business (inside and outside). Click the sign-up link, choose your product, fill in the form, complete KYC, and finish the payment process—that’s it! You’re all set to start accepting payments with Mswipe.",
                    "If you're a bank or corporate representative, simply fill out the form, and our team will reach out to discuss your customised requirements.",
                ],
            }
        ]
    },
];
console.log("faqData", faqData)
const Faqs = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const showAnswers = (index) => {
        setSelectedIndex(null);  // Reset first to trigger re-render
        setTimeout(() => setSelectedIndex(index), 0); // Wait for React to process
    };

    const showAllQuestions = () => {
        setSelectedIndex(null);
    };
    return (
        <>
            <section className="faqs-section">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h2 className="head01">
                                How can we <strong>help</strong> you today?
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-container">
                                <ul className="question-lists">
                                    {selectedIndex === null ? (
                                        faqData.map((faq, index) => (
                                            <li key={index}>
                                                <button
                                                    onClick={() => showAnswers(index)}
                                                    className="faq-question fs-18"
                                                >
                                                    {faq.question}
                                                    <span className="arrow-icon">
                                                        <img src="/images/icons/arrow_outward.svg" alt="" />
                                                    </span>
                                                </button>
                                            </li>
                                        ))
                                    ) : (
                                        <div className="answer-section">
                                            <div key={selectedIndex}>  {/* Unique key ensures React updates */}
                                                {faqData[selectedIndex]?.answer?.map((sub, i) => (
                                                    <div key={`${selectedIndex}-${i}`}>
                                                        <div className="sub-question">
                                                            <img src="/images/icons/question-icon.svg" alt="" />
                                                            {sub.subQuestion} {/* ✅ Now updates correctly */}
                                                        </div>
                                                        <ul className="lists-item">
                                                            {sub.subAnswers.map((item, index) => (
                                                                <li key={index} className="sub-answer">
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Related Questions */}
                                            <div className="related-question">
                                                <div className="title">Related Questions</div>
                                                <div className="mt-2 swiper-custom">
                                                    <Swiper
                                                        slidesPerView={3}
                                                        spaceBetween={25}
                                                        keyboard={{ enabled: true }}
                                                        speed={1200}
                                                        modules={[Keyboard, Autoplay]}
                                                        breakpoints={{
                                                            0: { slidesPerView: 3.2, spaceBetween: 20 },
                                                            768: { slidesPerView: 2, spaceBetween: 20 },
                                                            1200: { slidesPerView: 4, spaceBetween: 25 },
                                                        }}
                                                        className="mySwiper"
                                                    >
                                                        {faqData.map((faq, index) => {
                                                            // Exclude currently selected question
                                                            if (index !== selectedIndex) {
                                                                return (
                                                                    <SwiperSlide key={index}>
                                                                        <div className="related-question-data">
                                                                            <button
                                                                                onClick={() => showAnswers(index)} // 🔥 Correctly update the index
                                                                                className="faq-question-rq"
                                                                            >
                                                                                {faq.question}
                                                                                <span className="arrow-icon">
                                                                                    <img src="/images/icons/arrow_outward-no-bg.svg" alt="" />
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

                                            {/* Back button */}
                                            <button onClick={showAllQuestions} className="back-button">
                                                ← Back to Questions
                                            </button>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Search FAQs */}
                    <div className="row">
                        <div className="col-12">
                            <div className="search-faqs">
                                <input
                                    type="text"
                                    placeholder="Type your question here..."
                                    className="search-input"
                                />
                                <img
                                    className="icon"
                                    src="/images/icons/search-faq-icon.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs