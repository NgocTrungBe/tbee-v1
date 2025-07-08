"use client";

import React from "react";
import NumberedHeading from "../NumberedHeading";
import { easeOut, motion } from "framer-motion";
import Info from "../Info";
import ContactForm from "../ContactForm";

const Contact = () => {
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
  return (
    <section
      id="contact"
      className="contact-section max-w-[700px] m-auto py-20 md:py-28"
    >
      <NumberedHeading title="What’s Next?" centered overline />
      <motion.h2
        className="text-center text-3xl sm:font-4xl font-bold mt-2.5 mb-10 text-lightest-slate"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="m-auto text-light-slate mb-10 text-center max-w-[500px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Feel free to reach out to me if you're looking for a developer, have a
        query, or simply want to connect.
      </motion.p>
      <div className="flex flex-col items-start">
        <Info />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
