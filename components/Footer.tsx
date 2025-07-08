import { socialMedia } from "@/data";
import React from "react";
import Icon from "./icons/icon";

const Footer = () => {
  return (
    <footer className="footer min-h-[70px] p-4">
      <div className="flex flex-col items-center">
        <div className="md:fixed md:left-5 md:bottom-0">
          <ul className="social-media flex items-center gap-1 md:flex-col md:after:h-[90px] md:after:w-[1px] md:after:bg-light-slate">
            {socialMedia &&
              socialMedia.map((item, i) => (
                <li
                  key={i}
                  className="md:last-of-type:mb-3 md:hover:-translate-y-1 transition-all duration-220 ease-custom"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5"
                  >
                    <Icon name={item.name} />
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className="flex items-center justify-center p-4">
          <span className="text-sm text-gray-70 dark:text-gray-200 mr-2">
            ©
          </span>
          <p className="text-sm text-gray-70 dark:text-gray-200">
            2025 | Coded with ❤️️ by Trung Be
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
