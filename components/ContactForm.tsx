import { FormData } from "@/types";
import { easeOut, motion } from "framer-motion";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

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
    }
  };
  return (
    <>
      <motion.form
        className="form w-full mt-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        onSubmit={handleSubmit}
      >
        <motion.div
          className="flex flex-wrap items-center sm:flex-nowrap sm:gap-4"
          variants={fadeUp}
        >
          <div className="mb-4 w-full">
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
          <div className="mb-4 w-full">
            <div className="form-label">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
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
            value={formData.email}
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
          <textarea
            id="message"
            name="message"
            className="form-input text-area resize-none"
            autoComplete="off"
            value={formData.message}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div className="flex justify-center mt-8" variants={fadeUp}>
          <button
            type="submit"
            disabled={!isValid}
            className={`button w-full sm:w-[200px] px-2 py-2.5 ${
              isSubmitting ? "submitting" : ""
            }`}
          >
            {`${isSubmitting ? "Submitting..." : "Send Message"}`}
          </button>
        </motion.div>
      </motion.form>
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
