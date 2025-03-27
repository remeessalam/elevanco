import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { companyDetails } from "../../constant";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [spinner, setSpinner] = useState(false);
  const onSubmit = async (values) => {
    if (spinner) return;
    setSpinner(true);

    var emailBody = "Name: " + values.fullName + "\n\n";
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
  };
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
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-left"
            className="flex flex-col gap-4 md:px-[1rem]"
          >
            <div>
              <input
                {...register("fullName", { required: true })}
                className="w-full bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="text"
                placeholder="Full Name"
              />
              {errors.fullName && (
                <span className="text-red-500">Full Name is required</span>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="w-full bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500">Valid Email is required</span>
              )}
            </div>

            <div>
              <input
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
                className="w-full bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                type="number"
                placeholder="Mobile"
              />
              {errors.mobile && (
                <span className="text-red-500">
                  Valid Mobile Number is required
                </span>
              )}
            </div>

            <div>
              <textarea
                {...register("message", { required: true })}
                className="w-full bg-transparent outline-none border rounded-sm font-light border-primary px-2 py-3"
                rows="4"
                placeholder="Message"
              />
              {errors.message && (
                <span className="text-red-500">Message is required</span>
              )}
            </div>

            <button className="primary-btn" type="submit">
              {spinner ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
