import React from "react";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../componets/landingPages/Contact";
import {
  appDevBanner,
  appLandingAbout,
  webDevBanner,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";

export const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  return (
    <>
      <div id="banner" className="h-screen relative">
        <img
          src={isWebDevelopment ? webDevBanner : appDevBanner}
          className="w-full h-full object-cover object-right absolute"
          alt=""
        />
        <div className="bg-gradient-to-r from-white/20 to-secondary/80 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-black font-medium text-black">
              {isWebDevelopment ? "Web Development" : "App Development"}
            </div>
            <h1 className="heading-1 text-black">
              {isWebDevelopment
                ? "Building Websites for Lasting Growth"
                : "Your Vision, Skillfully Shaped into Apps"}
            </h1>
            <p className="text-black font-semibold desc">
              We specialize in delivering cutting-edge IT solutions tailored to
              meet the unique needs of modern businesses.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Get Started
            </ScrollLink>
          </div>
        </div>
      </div>

      <section id="about" className="py-[5rem] bg-main text-white wrapper">
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          {isWebDevelopment ? "Web Development" : "App Development"}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                {isWebDevelopment
                  ? "Bringing Your Ideas to Life Online."
                  : "Apps That Elevate Your Business to New Heights."}
              </h2>
              <p className="desc">
                {isWebDevelopment
                  ? "A website is more than a digital address; it’s the core of your online presence. Our development team specializes in transforming ideas into fully functional, high-performing websites. From e-commerce platforms to corporate sites and tailored web applications, we create websites that are fast, secure, and built to grow with your business. Every solution is user-friendly and optimized for maximum performance."
                  : "From startups with bold ideas to established enterprises, we offer end-to-end app development services tailored to your specific goals. Our apps are crafted to enhance engagement, maximize performance, and grow alongside your business, delivering a competitive advantage."}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={isWebDevelopment ? webLandingAbout : appLandingAbout}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>

      <LandingServices page={page} />
      <WhyChooseUs />

      <section className="pt-[10rem] pb-[5rem] bg-main text-white">
        <div className="wrapper text-center flex flex-col gap-3">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto mb-4"
          >
            Our Solutions
          </div>
          <h1
            data-aos="fade-up"
            className="heading-1  md:min-h-[5rem] text-white bg-clip-text text-transparent"
          >
            Design & Revolution
          </h1>
          <p data-aos="fade-up" className="desc max-w-[50rem] mx-auto">
            {isWebDevelopment
              ? "At Elevanco, we recognize that in today's digital landscape, your            website is far more than a mere online presence—it's the core of            your brand, a powerful business asset, and often the first            interaction for potential clients. With first impressions holding            more weight than ever, a well-crafted, high-performing, and            responsive website is essential to business success. Our website            development services go beyond simply creating a site; we build a            comprehensive digital experience that fosters engagement, drives          conversions, and equips your business for sustained growth."
              : "At Elevanco, we know that in today’s competitive market, an app is more than just a product—it’s a strategic asset and an extension of your brand. Whether you're enhancing customer engagement or optimizing operations, a well-crafted, high-performance app is essential for success. Our app development services focus on creating a seamless digital experience, combining functionality with intuitive design to increase user satisfaction, support business growth, and provide a foundation for future innovation."}
          </p>
        </div>
      </section>

      <section className="bg-primary overflow-hidden h-[70vh] relative flex items-center">
        <div className="wrapper">
          <div className="flex justify-center md:justify-normal gap-5">
            <div className="absolute -z-10 md:z-10 md:relative flex gap-5">
              <div
                data-aos="fade-up"
                id="to-top"
                className="flex flex-col -translate-y-[20%]"
              >
                <img
                  src={section5Img1}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img2}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img3}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
              <div
                data-aos="fade-up"
                id="to-bottom"
                className="flex flex-col translate-y-[20%]"
              >
                <img
                  src={section5Img4}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img5}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
                <img
                  src={section5Img6}
                  className="h-[10rem] object-contain"
                  alt={"section5Img1"}
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex z-10 flex-col gap-5 justify-center ml-10 text-white"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                Design
              </h2>
              <div className="flex items-center gap-2">
                <img
                  src={section5Img7}
                  className="sm:flex hidden h-[3rem] lg:h-[5rem] object-contain"
                  alt=""
                />
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                  & Recreate
                </h2>
              </div>
              <p className="desc text-white/70">
                Leverage your existing marketing platforms and sync the data
                seamlessly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Faqs /> */}

      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};
