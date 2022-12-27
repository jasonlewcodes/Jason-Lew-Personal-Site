import * as React from "react";
import Container from "./container";

const Projects = () => {
  return (
    <Container
      className="bg-white bg-opacity-50 border-solid border-2 border-black"
    >
      <div className="text-xl font-bold">
        Projects
      </div>
      <div className = "text-lg">
        Here are my projects!
      </div>
    </Container>
  )
}

export default Projects;