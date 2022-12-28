import * as React from "react";
import Container from "./container";
import ProfilePicture from '../images/jason.jpeg';

const About = () => {
  return (
    <Container
      className="bg-white bg-opacity-50 border-solid border-2 border-black"
      id="about"
    >
      <div className="text-xl font-bold mb-2">
        About
      </div>
      <div className="md:grid md:grid-cols-2 text-sm md:text-md">
        <div className="flex">
          <img className="w-48 h-48 md:w-72 md:h-72 rounded-full mx-auto my-auto pb-2 md:pb-0" src={ProfilePicture}/>
        </div>
        <div>
          Hi there! My name is Jason Lew.
          <br/>
          <br/>
          I am a second-year Computer Science student
          at the&nbsp;
          <span className="font-bold">
            Albert Dorman Honors College at New Jersey Institute of 
            Technology
          </span>
          , double minoring in Applied Statistics and Business.
          <br/>
          <br/>
          My main career interests are Software Development and Data Science.
          <br/>
          <br/>
          Below, you can view projects that I have worked on.
          <br/>
          <br/>
          In my free time, I enjoy working out, listening to music, and 
          spending time with friends.
          <br/>
          <br/>
          Favorite song currently:
          <br/>
          <br/>
          <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/5e0vgBWfwToyphURwynSXa?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <br/>
          Feel free to contact me via any sources linked below!
        </div>
      </div>
    </Container>
  )
}

export default About;