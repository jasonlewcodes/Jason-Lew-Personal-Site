import * as React from "react";
import type { HeadFC } from "gatsby";
import About from "../components/about";
import Contact from "../components/contact";
import Header from "../components/header";
import Projects from "../components/projects";

const IndexPage = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 pb-2 min-h-screen" id="top">
      <>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
      </>
    </div>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Homepage - Jason Lew</title>