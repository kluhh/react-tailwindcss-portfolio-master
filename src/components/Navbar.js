import {PhoneIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-100 md:sticky top-0 z-10 text-green-700">
      <div className="container mx-auto flex flex-wrap p-2.5 flex-col md:flex-row items-center">
        <a className="title-font font-medium mb-4 md:mb-0">
          <a href="#about" className="ml-4 text-xl text-blue-900">
            Keeartris F Love
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-blue-800">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-800">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-blue-800">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-green-600 border-0 py-1.5 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white">
          Contact Me
          <PhoneIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
