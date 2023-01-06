import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello World, I'm Keeartris.
            <br className="hidden lg:inline-block" />I <span className="text-green-500">build</span> amazing web
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          I want to demonstrate my skills, grow and learn. Web development <br/> is how I make that happen. 

          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg">
              See My Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-xs lg:w-xs md:w-1/5 w-1/4 mr-20">
          <img
            className="object-scale-down object-center rounded-full"
            alt="hero"
            src="https://tinyurl.com/5n8zudhb"
          />
        </div>
      </div>
    </section>
  );
}
