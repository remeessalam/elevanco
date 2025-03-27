import React, { lazy, useState } from "react";
import Banner from "../../componets/website/Banner";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { companyDetails } from "../../constant";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const MapComponent = lazy(() => import("../../componets/website/MapComponent"));

const ContactUs = () => {
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    if (spinner) return;
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    // emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from Elevanco",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => "");
    setSpinner(false);
    // };
  };

  return (
    <>
      <Banner page="Contact Us" />
      <div className="wrapper py-[5rem] grid lg:grid-cols-[45%_auto] gap-7">
        <div
          data-aos="fade-right"
          className=" flex flex-col gap-2 text-white bg-primary p-4 rounded-xl"
        >
          <div className="gradient-rounded-text-box">Contact Us</div>
          <h2 className="heading-2 mt-5">Get in Touch</h2>
          <p className="desc">
            Let Elevanco be the driving force behind your digital
            transformation. Together, we’ll create solutions that reflect your
            vision's dynamism, helping your business achieve unprecedented
            growth.
          </p>
          <Link
            to={`tel:${companyDetails.phone}`}
            className="flex items-start gap-3 w-fit mt-5"
          >
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <FaPhone className="text-2xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Call Us</p>
              <p className="desc">{companyDetails.phone}</p>
              <p className="desc">{companyDetails.phone2}</p>
            </div>
          </Link>
          <Link
            to={`mailto:${companyDetails.email}`}
            className="flex items-start gap-3 w-fit mt-5"
          >
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <IoMail className="text-3xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Email</p>
              <p className="desc">{companyDetails.email}</p>
            </div>
          </Link>
          <div className="flex items-start gap-3 w-fit mt-5">
            <div className="min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <FaLocationDot className="text-2xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Office Address</p>
              <p className="desc max-w-[20rem]">
                {companyDetails.officeaddress}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 w-fit mt-5">
            <div className="min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-primary flex justify-center items-center">
              <FaLocationDot className="text-2xl scale-x-[-1]" />
            </div>
            <div className="flex flex-col h-full">
              <p className="font-medium">Registered Address</p>
              <p className="desc max-w-[20rem]">{companyDetails.address}</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="h-full flex flex-col justify-between gap-7"
        >
          <div className="p-[1px] text-white h-full bg-white  rounded-lg">
            <div className="rounded-lg h-full bg-[#101010] p-4">
              <h3 className="text-lg">Have Any Question?</h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 mt-5"
              >
                <div className="flex flex-col gap-1">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="border-primary p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                      type="email"
                      className="border-primary p-2 rounded-md border outline-none bg-transparent"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        Valid Email is required
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input
                      {...register("phone", {
                        required: true,
                        minLength: 10,
                        maxLength: 10,
                      })}
                      type="tel"
                      className="border-primary p-2 rounded-md border outline-none bg-transparent"
                      placeholder="Phone Number"
                    />
                    {errors.phone && (
                      <span className="text-red-500">
                        Valid Phone Number is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <textarea
                    {...register("message", { required: true })}
                    rows="4"
                    className="border-primary p-2 rounded-md border outline-none bg-transparent"
                    placeholder="Message"
                  />
                  {errors.message && (
                    <span className="text-red-500">Message is required</span>
                  )}
                </div>

                <button type="submit" className="tertiary-btn mt-3">
                  {spinner ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="flex gap-5 items-center text-white mb-1">
            <p>Follow Us On:</p>
            <div className="flex items-center gap-3">
              <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
                <BsFacebook className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
                <BsTwitter className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
                <BsLinkedin className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center">
                <BsYoutube className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MapComponent />
    </>
  );
};

export default ContactUs;
