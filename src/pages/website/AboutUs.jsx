import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_15%] h-full w-full"
          alt=""
        />
      </div>
      <div className="py-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <h2 data-aos="fade-up" className="heading-2">
            Unveiling the Future of IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            Our process begins with a detailed assessment to understand your
            specific objectives, challenges, and requirements.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Tailored Solutions
                  </h6>
                  <p className="desc mt-2">
                    At Elevanco, we understand that every business is unique,
                    which is why we offer customized solutions designed to meet
                    your specific needs. By deeply analyzing your challenges and
                    objectives, we craft tailored strategies that align with
                    your vision. Whether it's web and mobile development, UI/UX
                    design, automation, or AI-powered tools, our solutions are
                    crafted to deliver tangible results and exceed expectations.
                    We focus on creating personalized experiences that drive
                    growth, improve efficiency, and ensure long-term success for
                    your business.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Seamless Collaboration
                  </h6>
                  <p className="desc mt-2">
                    we believe in the power of collaboration to create impactful
                    solutions. Our team works closely with you at every stage of
                    the project, ensuring open communication and a deep
                    understanding of your vision. By involving you in the
                    process, we ensure that your ideas and feedback are
                    incorporated, making the final product truly reflective of
                    your goals. This collaborative approach allows us to build
                    solutions that not only meet your expectations but also
                    drive meaningful outcomes for your business.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    we are dedicated to delivering solutions of the highest
                    quality. Our meticulous quality assurance process ensures
                    that every aspect of our work, from development to design
                    and automation, meets rigorous standards. We prioritize
                    attention to detail and thorough testing to guarantee that
                    our solutions are reliable, efficient, and free from errors.
                    This commitment to excellence ensures that our clients
                    receive exceptional, seamless experiences that drive
                    long-term success and satisfaction.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovative & Sustainable Solutions
                  </h6>
                  <p className="desc mt-2">
                    we embrace the ever-evolving digital landscape by
                    integrating the latest and most relevant technologies into
                    our solutions. We focus on building future-ready systems
                    that are not only innovative but also adaptable to changing
                    business needs. By leveraging cutting-edge tools and staying
                    ahead of technological trends, we ensure that our solutions
                    are scalable, secure, and sustainable, providing our clients
                    with a competitive edge that lasts for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UnlockEfficiency />
        <div className="wrapper mt-[5rem]">
          <h2 data-aos="fade-up" className="heading-2">
            Why Choose Elevanco?
          </h2>
          <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
            {whyChooseUsContent.map((item) => (
              <li data-aos="fade-up" key={item.id} className="text-primary">
                <span className="font-raleway font-bold">{item.title}:</span>{" "}
                <span className="desc text-white ml-1">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <OurServices length={3} />
      <Testimonials />
    </>
  );
};

export default AboutUs;
