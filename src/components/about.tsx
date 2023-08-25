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
          <br />I am a third-year&nbsp;
          <span className="underline">Computer Science</span>
          &nbsp;student at the&nbsp;
          <span className="font-bold">
            Albert Dorman Honors College at New Jersey Institute of Technology
          </span>
          , double minoring in&nbsp;
          <span className="underline">Applied Statistics and Business.</span>
          <br />
          <br />
          My main career interest is&nbsp;
          <span className="underline">Software Engineering.</span>
          <br />
          <br />
          Currently, I am a Software Engineering Intern at&nbsp;
          <span className="underline">PerfectRec</span>, and I've worked as a
          Software Engineering Intern at&nbsp;
          <span className="underline">UPS.</span>
          <br />
          <br />
          Incoming Software Engineering &#38; Data Co-Op at&nbsp;
          <span className="underline">Prudential</span>
          &nbsp;and Software Engineer Intern at&nbsp;
          <span className="underline">Walmart Global Tech.</span>
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
          Favorite song currently:
          <br />
          <br />
          <iframe
            className="rounded-xl"
            src="https://open.spotify.com/embed/track/5e0vgBWfwToyphURwynSXa?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <br />
          Feel free to contact me via any sources linked below!
        </div>
      </div>
    </Container>
  );
};

export default About;
