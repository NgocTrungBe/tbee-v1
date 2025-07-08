import { FormData } from "@/types";
import { easeOut, motion } from "framer-motion";
import React, { useState } from "react";

const ContactForm = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleBlurEmail = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      setEmailError("Email is invalid.");
    } else {
      setEmailError("");
    }
  };

  const isValid = Object.values(formData).every(
    (e) => e.trim() !== "" && emailError === ""
  );

  return (
    <motion.form
      className="form w-full mt-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-wrap items-center sm:flex-nowrap sm:gap-4"
        variants={fadeUp}
      >
        <div className="mb-4 w-full">
          <div className="form-label">
            <label htmlFor="firstname">First Name</label>
          </div>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="form-input"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <div className="form-label">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
          </div>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="form-input"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
      </motion.div>
      <motion.div className="mb-4" variants={fadeUp}>
        <div className="form-label">
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
        <input
          type="text"
          id="email"
          name="email"
          className="form-input"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlurEmail}
        />
        {emailError && (
          <p className="mt-3 text-xs font-fira text-red-400">{emailError}</p>
        )}
      </motion.div>
      <motion.div className="mb-4" variants={fadeUp}>
        <div className="form-label">
          <label htmlFor="message" className="form-label">
            Message
          </label>
        </div>
        <div className="h-[80px]">
          <textarea
            id="message"
            name="message"
            className="form-input h-full resize-none"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
      </motion.div>
      <motion.div className="flex justify-center mt-10" variants={fadeUp}>
        <button
          type="button"
          disabled={!isValid}
          className="button w-full sm:w-[200px] px-2 py-2.5"
        >
          Submit
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
