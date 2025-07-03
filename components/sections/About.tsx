import React from "react";
import NumberedHeading from "../NumberedHeading";
import Image from "next/image";
import Avatar from "@/assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="max-w-[900px] m-auto mb-20 no-count">
      <NumberedHeading>About me</NumberedHeading>
      <div className="md:grid md:grid-cols-[3fr_2fr] md:gap-[50px] block">
        <div className="text-slate">
          <p>
            Hello! My name is Ngoc Trung Be. I'm a Front-End Developer with 3
            years of experience specializing in JavaScript (ES6+) and modern
            front-end technologies, especially ReactJS. I build responsive,
            cross-browser web applications with clean, maintainable code. My
            focus is on writing scalable UI components and following UI/UX best
            practices.
          </p>
          <br />
          <p>
            I've worked closely with designers, back-end developers, and product
            teams in Agile environments to deliver features efficiently and
            consistently.
          </p>
          <br />
          <p>
            I'm passionate about solving UI challenges and constantly improving
            my skills through real-world projects and learning.
          </p>
        </div>
        <div className="max-w-[300px] md:m-0 mt-12 m-auto">
          <div className="avatar-wrapper">
            <Image src={Avatar} alt="my-avatar" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
