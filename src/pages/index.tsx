import * as React from "react"
import About from "../components/about";
import Contact from "../components/contact";
import Header from "../components/header";
import Projects from "../components/projects";

const IndexPage = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 pb-2">
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