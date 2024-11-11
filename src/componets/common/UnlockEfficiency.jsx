import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[5rem]  bg-white text-black">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-black items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box-black">
          Delivering Excellence
        </div>
        <h2 className="heading-2">
          Empower Your Business with Our IT Solutions
        </h2>
        <p className="desc max-w-[40rem] text-center">
          Helping businesses excel, innovate, and grow in the dynamic,
          ever-evolving digital world, ensuring long-term success and
          competitive advantage.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
