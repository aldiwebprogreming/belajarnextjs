import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};
