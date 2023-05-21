import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const SupportPage = () => {
  return (
    <div>
      <Head>
        <title>Customer Support</title>
      </Head>
      <div className="container py-5">
        <h1 className="text-center mb-5">Customer Support</h1>

        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-3">Frequently Asked Questions (FAQs)</h4>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeadingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapseOne"
                    aria-expanded="true"
                    aria-controls="faqCollapseOne"
                  >
                    How can I track my order?
                  </button>
                </h2>
                <div
                  id="faqCollapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="faqHeadingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    You can track your order by visiting the Order Tracking page and entering your order number and
                    email address.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeadingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapseTwo"
                    aria-expanded="false"
                    aria-controls="faqCollapseTwo"
                  >
                    How can I return or exchange a product?
                  </button>
                </h2>
                <div
                  id="faqCollapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeadingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Our returns and exchanges process is quick and easy. Visit the Returns & Exchanges page for detailed
                    instructions.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeadingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapseThree"
                    aria-expanded="false"
                    aria-controls="faqCollapseThree"
                  >
                    What payment methods do you accept?
                  </button>
                </h2>
                <div
                  id="faqCollapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeadingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We accept all major credit cards, PayPal, and Apple Pay for secure and convenient payments.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="mb-3">Contact Us</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Phone:</strong> 1-800-123-4567
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> support@example.com
              </li>
              <li className="list-group-item">
                <strong>Live Chat:</strong> Visit our website and click on the Live Chat button to chat with a
                representative.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
