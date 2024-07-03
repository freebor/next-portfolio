"use client";

import React, { useEffect, useRef, useState } from "react";
import gitHubIcons from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setloading] = useState(false);

  const [state, handleSubmit] = useForm("xkndeery");

  useEffect(() => {
    if (state.succeeded) {
      setloading(false);
      setForm({ name: "", email: "", message: "" });
    }
    if (state.submitting) {
      setloading(true);
    }
  }, [state]);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg top-3/4 absolute -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          whether you have a question or just want to say hi, i'll try my best
          to get back to you!
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="github.com">
            <Image src={gitHubIcons} alt="gitHub-icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="linkedin-icon" />
          </Link>
        </div>
      </div>
      {/* FORM SECTION */}
      <div className="z-10">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col"
          method="post"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block font-medium text-sm mb-2"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border bg-[#18191E] border-[#333F3F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="peter@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block font-medium text-sm mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border bg-[#18191E] border-[#333F3F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Just saying hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block font-medium text-sm mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              id="message"
              className="border bg-[#18191E] border-[#333F3F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hey, I'm looking for new opportunities!"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full ${
              loading ? "sending-animation" : ""
            }`}
          >
            {loading ? "sending....." : "Send Message"}
          </button>

          <div>
            {state.succeeded ? (
              <p className="text-green-500 font-semibold text-[15px]">
                Message Sent! I'll get back to you as soon as possible, thank
                you!
              </p>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;