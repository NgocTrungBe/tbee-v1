import { StaticImageData } from "next/image";

export type Job = {
  date: string;
  title: string;
  company: string;
  location: string;
  range: string;
  url: string;
  content: string[];
};

export type SKill = {
  name: string;
  icon: string;
};

export type FeaturedProject = {
  name: string;
  desc: string;
  img: string | StaticImageData;
  technicals: string[];
  external: string;
  github: string;
};
