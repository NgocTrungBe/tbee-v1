"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === "undefined" || isLoading) return;
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      requestAnimationFrame(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader onAnimationEnd={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <main
            id="content"
            className="max-w-screen-xl px-6 w-full mx-auto md:px-24 sm:px-12"
          >
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
