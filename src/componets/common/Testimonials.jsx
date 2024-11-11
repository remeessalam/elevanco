import React from "react";
import { useKeenSlider } from "keen-slider/react";
import profileImg1 from "../../assets/images/profileimg-1.png";
import profileImg2 from "../../assets/images/profileimg-2.png";
import profileImg3 from "../../assets/images/profileimg-4.jpg";
import profileImg4 from "../../assets/images/profileimg-5.jpg";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const reviews = [
  {
    id: 1,
    profileImg: profileImg1,
    name: "Michelle L",
    role: "CEO at Innovative Tech Corp",
    desc: "“Working with Innovative Tech Corp on our mobile and web applications has been transformative for our business. From the initial consultation, they took the time to really understand our goals and offered valuable insights on how to structure the app for scalability. Their development team was not only technically skilled but also proactive in addressing our needs at every stage. The final product exceeded our expectations, both in performance and user experience. We’ve seen a significant increase in user engagement, and our clients love the seamless design and functionality. I highly recommend their team for anyone looking to take their digital presence to the next level.”",
  },
  {
    id: 2,
    profileImg: profileImg2,
    name: "Andrew R",
    role: "Product Managerat Green Future Ltd",
    desc: "“We knew our app needed a complete overhaul in terms of user interface and experience, and Product Managerat delivered on every front. The design team’s approach was highly collaborative, and they paid close attention to the look and feel we wanted. They developed wireframes and prototypes that captured our vision and made it even better, with innovative touches we hadn’t even considered. The end result? A beautiful, intuitive interface that our users find easy to navigate and love using. We’ve seen a measurable increase in user satisfaction, and I truly believe it’s due to the team’s attention to every little detail. Brilliant work all around!”",
  },
  {
    id: 2,
    profileImg: profileImg4,
    name: "Sarah T",
    role: "Operations Director at  BrightTech Innovations",
    desc: "“We partnered with BrightTech Innovations to streamline some of our most repetitive and time-consuming processes, and it’s been a game-changer. Their RPA team quickly identified automation opportunities within our workflows and customized solutions to fit our exact needs. We’re now saving hours of manual work each week, and the accuracy improvements have been outstanding. Not only has the automation increased our efficiency, but it’s also allowed our team to focus on more strategic projects, which has boosted our overall productivity. BrightTech Innovations exceeded our expectations with their expertise and commitment to quality.”",
  },
  {
    id: 2,
    profileImg: profileImg3,
    name: "Ryan M",
    role: "CEO at Alpha Digital Solutions",
    desc: "“From day one, the game development team at Alpha Digital Solutions was dedicated to bringing our vision to life. They were just as excited about the project as we were, and it showed in every interaction. Their creative insights and technical know-how made the entire development process smooth and enjoyable. The final product is an engaging, beautifully designed game that has been a hit with our audience. We’ve received so much positive feedback on the graphics and gameplay. This team truly understands what it takes to create a successful game, and I wouldn’t hesitate to work with them again on future projects!”",
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-center gap-7">
        <div className="gradient-rounded-text-box" data-aos="fade-up">
          Testimonials
        </div>
        <h2
          className="heading-2 text-white mb-2 text-center"
          data-aos="fade-up"
        >
          Our Clients' Experiences
        </h2>
        <div ref={sliderRef} className="keen-slider" data-aos="fade-up">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-[#101010] rounded-xl flex flex-col gap-4"
            >
              <p className="italic desc">{item.desc}</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    src={item.profileImg}
                    alt={item.name}
                    className="h-full w-[2rem] rounded-full object-cover"
                  />
                  <div className="flex flex-col h-full">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
