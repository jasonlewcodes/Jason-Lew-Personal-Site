import * as React from "react";
import Container from "./container";
import ProfilePicture from '../images/jason.jpeg';

const About = () => {
  return (
    <Container
      className="bg-white bg-opacity-50 border-solid border-2 border-black"
    >
      <div className="text-xl font-bold">
        About
      </div>
      <div className = "grid grid-cols-2">
        <div>
          <img className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto" src={ProfilePicture}/>
        </div>
        <div>
          Hi! My name is Jason Lew. This site is currently a WIP.
        </div>
      </div>
    </Container>
  )
}

export default About;