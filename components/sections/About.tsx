import React from "react";
import NumberedHeading from "../NumberedHeading";
import AboutContent from "../AboutContent";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[900px] m-auto mb-20 no-count scroll-mt-26"
    >
      <NumberedHeading title="About me" />
      <AboutContent />
    </section>
  );
};

export default About;
