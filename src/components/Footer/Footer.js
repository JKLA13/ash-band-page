import React from "react";
import "../../fonts/stylesheet.css";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-light p-4">
      <div className="container text-center mb-1">
        <h4>&copy; {new Date().getFullYear()} - A Strange Happening</h4>
      </div>
    </footer>
  );
};

export default Footer;
