import React from "react";
import Layout from "../components/Layout/Layout";

const definitionsArray = [
  {
    id: "1.1.",
    content: (
      <span>
        {" "}
        "<strong>Applicable Laws</strong>" shall mean any statute, law, regulation, directive, guideline, policy, requirement, or any governmental restriction or any similar
        form of decision of, or determination by, or any interpretation or administration having the force of law of any of the foregoing, by any governmental authority having
        jurisdiction over the matter or the Parties in question, whether in effect as of the date of these Terms and Conditions or thereafter.
      </span>
    )
  },
  {
    id: "1.2.",
    content: (
      <span>
        {" "}
        "<strong>Application</strong>" means the Application Form, whether physical or digital, submitted by the Merchant and verified and accepted by Mswipe for the purpose
        of availing Mswipe's services.
      </span>
    )
  },
  {
    id: "1.3.",
    content: (
      <span>
        {" "}
        "<strong>Business Day</strong>" shall mean a day (excluding Saturdays and Sundays) on which banks in India are open for normal banking business.
      </span>
    )
  },
  {
    id: "1.4.",
    content: (
      <span>
        {" "}
        "<strong>Card Member</strong>" or "<strong>Member</strong>" or "<strong>Customer</strong>" or "<strong>Cardholder</strong>" shall mean a person making payment using a
        Valid Mode.
      </span>
    )
  },
  {
    id: "1.5.",
    content: (
      <span>
        {" "}
        "<strong>Chargeback</strong>" means any dispute regarding a Valid Charge raised by a Cardholder/ Customer with the issuing bank and/or the card scheme.
      </span>
    )
  },
  {
    id: "1.6.",
    content: (
      <span>
        {" "}
        "<strong>Equipment</strong>" shall mean the equipment specified in the Application as may be provided or sold for authorization by Mswipe to the Merchant. Equipment
        does not include Mswipe's systems (embedded and supporting software), confidential documentation or any related and other Intellectual Property Rights supplied by
        Mswipe.
      </span>
    )
  },
  {
    id: "1.7.",
    content: (
      <span>
        {" "}
        "<strong>Features</strong>" means the additional services or features offered by Mswipe through the Mswipe Gateway, including, but not limited to, credit against
        authorisation ("CAAT"), Mventry, ATMLe, ATMExpress Link etc. on the terms and conditions more clearly specified herein.
      </span>
    )
  },
  {
    id: "1.8.",
    content: (
      <span>
        {" "}
        "<strong>Intellectual Property Rights</strong>" shall deem to mean and include all copyright, designs, inventions patents, service marks, trademarks (in each case,
        whether registered or arising at common law, or its overseas equivalent) or applications for any of these, formulations, trade names, business names, inventions,
        discoveries, trade secrets, know-how, source code, object code, technical information, commercial and financial data and all other industrial or intellectual property
        rights (whether or not registered).
      </span>
    )
  },
  {
    id: "1.9.",
    content: (
      <span>
        {" "}
        "<strong>Merchant Discount Rate</strong>" or "<strong>MDR</strong>" means with respect to each Transaction Amount a percentage thereof as specified in the Application.
        Provided however that the Merchant Discount Rate may be revised from time to time by Mswipe and Mswipe will intimate Merchant of any such change.
      </span>
    )
  },
  {
    id: "1.10.",
    content: (
      <span>
        {" "}
        "<strong>Merchant Website</strong>" shall mean website/application/software that is controlled, operated and owned by the Merchant.
      </span>
    )
  },
  {
    id: "1.11.",
    content: (
      <span>
        {" "}
        "<strong>Mswipe Products</strong>" shall mean the Equipment, Mswipe Gateway Services, Other Modes, Features and Other Equipment services provided to the Merchant as
        per these Terms and Conditions, as may be applicable.
      </span>
    )
  },
  {
    id: "1.12.",
    content: (
      <span>
        {" "}
        "<strong>Mswipe Gateway Services</strong>" shall mean the payment gateway services provided in accordance with under PART B of these Terms and Conditions.
      </span>
    )
  },
  {
    id: "1.13.",
    content: (
      <span>
        {" "}
        "<strong>Facility Providers</strong>" means various bank or banking entity, card association, software providers, as well as third party service providers associated
        with Mswipe that participate in authorization / facilitation in settlement of Valid Charges to the Merchant.
      </span>
    )
  },
  {
    id: "1.14.",
    content: (
      <span>
        {" "}
        "<strong>Other Equipment</strong>" means devices such as android or other cell phones, bluetooth printer etc. that may be sold by Mswipe to the Merchant on an outright
        sale basis as specified in the Application.
      </span>
    )
  },
  {
    id: "1.15.",
    content: (
      <span>
        {" "}
        "<strong>Other Mode(s)</strong>" shall mean modes of payment other than Valid Cards, including, without limitation, net banking, MQR, UPI, Amazon Pay, or such other
        modes as may be communicated by Mswipe from time to time.
      </span>
    )
  },
  {
    id: "1.16.",
    content: (
      <span>
        {" "}
        "<strong>Support Services</strong>" shall mean transaction processing services through Mswipe Products and help desk service on Mswipe's standard terms and conditions.
      </span>
    )
  },
  {
    id: "1.17.",
    content: (
      <span>
        {" "}
        "<strong>Transaction Amount</strong>" shall mean the amount payable by the Customer using the Valid Mode for the product/ service offered by the Merchant inclusive of
        shipping charges and other taxes, duties, cost, charges and expenses in respect of the product / service that are to be charged to the Cardholder/ Customer.
      </span>
    )
  },
  {
    id: "1.18.",
    content: (
      <span>
        {" "}
        "<strong>Transaction Receipt</strong>" means the digital/physical receipt generated after authorisation of a Valid Charge provided to the Customer and the Merchant
        recording the charges and transaction details.
      </span>
    )
  },
  {
    id: "1.19.",
    content: (
      <span>
        {" "}
        "<strong>Valid Card</strong>" shall mean a VISA/MasterCard/American Express/Rupay or any other debit or credit card issued as per the rules of any such card
        association as notified by Mswipe from time to time bearing signature of the holder.
      </span>
    )
  },
  {
    id: "1.20.",
    content: (
      <span>
        {" "}
        "<strong>Valid Charges</strong>" is a charge within the amount authorized herein below, which is charged to the Customer (i) on a Transaction Receipt acceptable to
        Mswipe, bearing details of the Valid Mode and wherever applicable, bearing the same signature as that on the Valid Card; and (ii) using the Equipment with Transaction
        Receipt generated from the Equipment after swiping or dipping the Valid Card or using the Other Mode, and wherever applicable, bearing the same signature as that on
        the Valid Card.
      </span>
    )
  },
  {
    id: "1.21.",
    content: (
      <span>
        {" "}
        "<strong>Valid Mode</strong>" shall mean collectively the Valid Card and the Other Modes.
      </span>
    )
  }
];

const TermsAndConditions = () => {
  return (
    <>
      <Layout>
        <div className="terms-header">
          <h1 className="terms-title">Terms and Conditions</h1>
        </div>
        <div className="terms-content">
          <p className="terms-intro-text">
            This Terms and Conditions (“Terms and Conditions”) is between you (“Merchant”) and Mswipe Technologies Private Limited (“Mswipe”) and governs your use of Mswipe’s
            products and services. These Terms and Conditions shall be applicable in respect of each and every transaction involving payment by means of a Valid Mode. By
            clicking “I Accept” or “I Agree” on the signup page, or by accessing and using our products and/or services in any way, you agree to be bound by these Terms and
            Conditions
          </p>
          <h3 className="terms-section-title">1. DEFINITIONS</h3>
          <div className="terms-definitions">
            {definitionsArray.map((definition, index) => {
              return (
                <p key={index} className="definition-item">
                  {definition.id}
                  {definition.content}
                </p>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TermsAndConditions;
