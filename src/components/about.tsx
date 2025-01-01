import * as React from "react";
import Container from "./container";
import { withPrefix } from "gatsby";
//@ts-ignore
import ProfilePicture from "../images/jason.jpg";

const About = () => {
  return (
    <Container id="about">
      <div className="title mb-2">About</div>
      <div className="md:grid md:grid-cols-2 text-sm">
        <div className="flex">
          <img
            className="border-black border-2 h-48 md:h-72 rounded-full mx-auto md:pb-0 mb-2 md:my-auto"
            src={withPrefix(ProfilePicture)}
          />
        </div>
        <div>
          <span className="font-bold">Hi there!&nbsp;</span>
          My name is&nbsp;
          <span className="font-bold">Jason Lew.</span>
          <br />
          <br />I am a fourth-year&nbsp;
          <span className="underline">Computer Science</span>
          &nbsp;student at the&nbsp;
          <span className="font-bold">
            Albert Dorman Honors College at New Jersey Institute of Technology
          </span>
          &nbsp;with a minor in&nbsp;
          <span className="underline">Business.</span>
          <br />
          <br />
          My main career interest is&nbsp;
          <span className="underline">Software Engineering.</span>
          <br />
          <br />
          Current Software Engineering Intern at Sayari. I've worked as a
          Software Engineering Intern at&nbsp;
          <span className="underline">Capital One</span>
          ,&nbsp;
          <span className="underline">Prudential Financial</span>
          ,&nbsp;
          <span className="underline">UPS</span>
          &nbsp;and&nbsp;
          <span className="underline">PerfectRec.</span>
          <br />
          <br />
          Below, you can view my work experience and projects that I have worked
          on.
          <br />
          <br />
          In my free time, I enjoy working out, listening to music, and spending
          time with friends.
          <br />
          <br />
          Feel free to contact me via any sources linked below!
        </div>
      </div>
    </Container>
  );
};

export default About;
