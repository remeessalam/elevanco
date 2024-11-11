import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[5rem]  bg-white text-black">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-black items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box-black">Our Vision</div>
        <h2 className="heading-2">
          Empowering Global Businesses Through Innovation
        </h2>
        <p className="desc max-w-[40rem] text-center">
          To be a trusted technology partner for companies worldwide,
          transforming how businesses operate and connect with their audiences.
          We envision a future where digital solutions drive positive change,
          enabling companies of all sizes to achieve more through intuitive
          technology, automation, and elevated user experiences.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
