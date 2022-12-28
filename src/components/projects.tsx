import * as React from "react";
import Container from "./container";

const Projects = () => {
  return (
    <Container
      className="bg-white bg-opacity-50 border-solid border-2 border-black"
      id="projects"
    >
      <div className="text-xl font-bold mb-2">
        Projects
      </div>
      <div className = "text-lg">
        Projects coming soon.
      </div>
    </Container>
  )
}

export default Projects;