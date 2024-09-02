/* eslint-disable no-unused-vars */
import React from "react";
import { Footer } from "flowbite-react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Foot = () => {
  const date = new Date().getFullYear();
  return (
    <Footer container className="border-t-2 bg-gray-50">
      <Footer.Copyright href="#" by="Shopify" year={date} />
      <Footer.LinkGroup className="mt-3 sm:mt-0">
        <Footer.Link
          href="https://github.com/MinKhantAung23"
          target="_blank"
          className="text-xl mb-0"
        >
          <FaGithub />
        </Footer.Link>
        <Footer.Link
          href="https://www.facebook.com/MinKhantAung"
          target="_blank"
          className="text-xl mb-0"
        >
          <FaFacebook />
        </Footer.Link>
        <Link to={"/about"} className="hover:underline me-4">
          About
        </Link>
        <Link to={"/contact"} className="hover:underline">
          Contact me
        </Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default Foot;
