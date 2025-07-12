import { easeOut, motion } from "framer-motion";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { container, motionBaseProps } from "@/config/animation";
import { FormData } from "@/types";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [emailError, setEmailError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
    (e) => e.trim() !== "" && emailError === "" && !isSubmitting
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        setFormData(initialFormData);
        toast.success("Message sent. I'll get back to you soon!");
      } else {
        toast.error("An error occurred. Please contact me via email or phone.");
      }
      setIsSubmitting(false);
    } catch (error) {
      toast.error("An error occurred. Please contact me via email or phone.");
      setIsSubmitting(false);
      return error;
    }
  };

  return (
    <>
      <motion.form
        className="form mt-12 w-full"
        onSubmit={handleSubmit}
        variants={container}
      >
        {/* Name fields */}
        <motion.div
          className="flex flex-wrap items-center sm:flex-nowrap sm:gap-4"
          variants={fadeUp}
          {...motionBaseProps}
        >
          <div className="mb-5 w-full">
            <div className="form-label">
              <label htmlFor="firstName">First Name</label>
            </div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              autoComplete="off"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 w-full">
            <div className="form-label">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              autoComplete="off"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </motion.div>

        {/* Email field */}
        <motion.div className="mb-5" variants={fadeUp} {...motionBaseProps}>
          <div className="form-label">
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            className="form-input"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlurEmail}
          />
          {emailError && (
            <p className="mt-3 text-xs font-fira text-red-400">{emailError}</p>
          )}
        </motion.div>

        {/* Message field */}
        <motion.div className="mb-5" variants={fadeUp} {...motionBaseProps}>
          <div className="form-label">
            <label htmlFor="message">Message</label>
          </div>
          <textarea
            id="message"
            name="message"
            className="form-input text-area resize-none"
            autoComplete="off"
            value={formData.message}
            onChange={handleChange}
          />
        </motion.div>

        {/* Submit button */}
        <motion.div
          className="mt-10 flex justify-center"
          variants={fadeUp}
          {...motionBaseProps}
        >
          <button
            type="submit"
            disabled={!isValid}
            className={`button w-full px-2 py-3 sm:w-[200px] sm:py-2.5 ${
              isSubmitting ? "submitting" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </motion.div>
      </motion.form>

      {/* Toaster */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            marginTop: 80,
            padding: 8,
            height: 50,
            fontSize: 13,
            maxWidth: 300,
          },
        }}
      />
    </>
  );
};

export default ContactForm;
