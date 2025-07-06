import React from "react";
import NumberedHeading from "../NumberedHeading";
import FeaturedProjects from "../FeaturedProjects";
import { featuredProjects } from "@/content/featured";

const Featured = () => {
  return (
    <section id="work" className="max-w-[900px] m-auto py-20 md:py-28">
      <NumberedHeading title="Some Things I’ve Built" />
      <FeaturedProjects featuredProjects={featuredProjects} />
    </section>
  );
};

export default Featured;
