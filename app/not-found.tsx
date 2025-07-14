import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl md:text-9xl text-brand-primary font-bold">404</h1>
      <h2 className="mt-4 mb-10 text-4xl text-lightest-slate">
        Page Not Found
      </h2>
      <Link
        href="/"
        className="button w-[120px] text-center px-2 py-3 text-lg font-fira font-bold"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
