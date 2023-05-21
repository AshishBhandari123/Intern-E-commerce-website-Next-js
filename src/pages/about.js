import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p className="lead">Welcome to our e-commerce website!</p>
            <p>
              At Shopee Store, we are dedicated to providing the best online shopping experience for our customers. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Our mission is to offer a wide range of high-quality products at competitive prices. We carefully select
              our suppliers to ensure that our customers receive reliable and authentic products. Whether you are looking
              for electronics, fashion, home goods, or more, we have got you covered.
            </p>
            <p>
              We value our customers and strive to make your shopping experience convenient and enjoyable. Our website
              provides secure payment options and fast shipping services. If you have any questions or concerns, our
              dedicated customer support team is here to assist you.
            </p>
            <p>
              Thank you for choosing Shopee Store. We appreciate your trust in us and look forward to serving you with
              exceptional products and service.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <Image
              src="/images/about.jpg"
              alt="About Us"
              width={500}
              height={400}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
