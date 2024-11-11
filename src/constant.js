import logoImg from "./assets/images/logo/Logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
};

// company details
export const companyDetails = {
  phone: "+91-7388885517",
  whatsapp: "+91-7388885517",
  email: "example@domainname.com",
  address: "Flat 345, DDA Flats Pocket 2, Sector 9, Dwarka 110077 ",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web & Mobile Development",
    desc: "We develop web and mobile applications that align with your business goals, ensuring each solution is scalable, high-performing, and user-friendly. Our team works with you from concept to launch, creating responsive websites, e-commerce platforms, and mobile apps that drive engagement and deliver a seamless experience across devices.",
    detailContent:
      "We create custom web and mobile applications that align with your business goals, making sure each solution is built to handle growth and deliver consistently high performance. From concept to launch, our team works closely with you to understand the unique needs of your business, developing applications that engage users and provide seamless functionality across devices. Whether you need a responsive website, an e-commerce platform, or a feature-rich mobile app, our development process focuses on flexibility, usability, and future scalability.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Our UI/UX design team creates visually appealing, user-focused interfaces that make a real impact. Through thoughtful design and a deep understanding of user behavior, we deliver smooth, engaging experiences that not only look great but drive results by simplifying interactions and enhancing user satisfaction.",
    detailContent:
      "In a crowded digital space, a well-designed interface can make all the difference. Our UI/UX design team is dedicated to crafting intuitive, visually appealing interfaces that prioritize the user experience. Every design is strategically planned to create a smooth, engaging journey that keeps users coming back. We blend creativity with a deep understanding of user behavior to build interfaces that not only look good but also drive conversions by making interactions simple, seamless, and satisfying.",
  },
  {
    id: 3,
    title: "Robotic Process Automation (RPA)",
    desc: "Our RPA solutions automate repetitive tasks, enabling your team to focus on high-value work. By reducing costs, minimizing errors, and enhancing productivity, we create tailored automation workflows that align with your operations, delivering sustainable improvements for long-term success.",
    detailContent:
      "Efficiency and accuracy are critical to business success. Our RPA solutions focus on automating repetitive, time-consuming tasks, allowing your team to focus on higher-value work. By automating manual processes, we help you reduce operational costs, minimize human errors, and enhance productivity. Our RPA experts work closely with you to identify automation opportunities and design workflows that align with your business operations, delivering sustainable improvements that boost your bottom line.",
  },
  {
    id: 4,
    title: "Game Development",
    desc: "Our game development team blends creativity and technical expertise to create immersive, interactive games. From concept to launch, we craft engaging gameplay, stunning graphics, and seamless user experiences, whether for mobile, console, or cross-platform games.",
    detailContent:
      "Creating games that captivate and entertain is both an art and a science. Our game development team combines creativity with technical expertise to develop immersive, interactive games that appeal to a broad audience. From concept design and storyboarding to coding and final launch, we focus on creating engaging gameplay, visually stunning graphics, and smooth user experiences. Whether you’re looking to develop a mobile game, a console game, or a cross-platform experience, we’re here to bring your game concept to life.",
  },
  {
    id: 5,
    title: "AI Services",
    desc: "Our AI services harness the power of advanced technology to transform data into actionable insights. From predictive analytics and recommendation systems to natural language processing and computer vision, we help optimize business processes, enhance customer experiences, and support informed decision-making to drive growth.",
    detailContent:
      "In today’s data-driven world, smart solutions can give you a competitive edge. Our AI services use advanced artificial intelligence to transform raw data into actionable insights, improving decision-making and driving efficiency. We offer solutions ranging from predictive analytics and recommendation systems to natural language processing and computer vision. With our AI-powered tools, we help you optimize business processes, enhance customer experiences, and make better-informed decisions that fuel growth.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Customized Solutions",
    desc: "We recognize that every business has unique needs. Our personalized approach ensures that each project aligns with your goals and exceeds your expectations.",
  },
  {
    title: "Collaborative Process",
    desc: "We work alongside you, maintaining open communication at every stage. Your input guides us to ensure your vision is captured and reflected throughout the project.",
  },
  {
    title: "Quality Assurance",
    desc: "Quality is our top priority. From development to design and automation, every element is crafted with attention to detail to meet the highest standards.",
  },
  {
    title: "Future-Ready Technology",
    desc: "The digital world is constantly evolving, and we stay ahead of trends. Our team uses the latest technology, so your digital solutions are both innovative and sustainable for the future.",
  },
];
