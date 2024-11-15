import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-[5rem] text-black bg-white">
      <div className="wrapper">
        <div className="h-full grid md:grid-cols-2 gap-10 py-10">
          <div data-aos="fade-right" className="flex flex-col gap-4">
            <h2 className="heading-2">Get In Touch With Us!</h2>
            <p className="desc">
              Let <span className="font-semibold">Elevanco</span> drive your
              digital transformation. We work closely with you to create
              innovative, tailored solutions that align with your vision,
              empowering your business to thrive and achieve sustainable growth
              in the ever-evolving digital landscape.
            </p>
          </div>
          <form
            data-aos="fade-left"
            className="flex flex-col gap-4 md:px-[1rem]"
          >
            <div className="">
              <input
                required
                className="w-full bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="">
              <input
                required
                className="w-full bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="">
              <input
                required
                className="w-full bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="number"
                placeholder="Mobile"
              />
            </div>
            <div className="">
              <textarea
                className="w-full bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                rows="4"
                placeholder="Message"
                required
              />
            </div>
            <button className="primary-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
