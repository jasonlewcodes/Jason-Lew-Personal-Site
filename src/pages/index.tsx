import * as React from "react";
import type { HeadFC } from "gatsby";
import About from "../components/about";
import Contact from "../components/contact";
import Header from "../components/header";
import Projects from "../components/projects";
import Experience from "../components/experience";

const IndexPage = () => {
  return (
    <div
      className="bg-gradient-to-br from-cyan-300 to-blue-500 bg-black pb-2 min-h-screen"
      id="top"
    >
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Homepage - Jason Lew</title>;
