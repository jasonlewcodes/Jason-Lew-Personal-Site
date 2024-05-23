import * as React from "react";
import Container from "./container";
import { withPrefix } from "gatsby";
// @ts-ignore
import PerfectRec from "../images/perfectrec.png";
import Description from "./description";

const Projects = () => {
  return (
    <Container id="experience">
      <div className="title mb-2">Work Experience</div>
      <Description
        title="Prudential Financial"
        href="https://www.prudential.com/"
      >
        I have previously worked as a Software Engineering & Data Co-Op at
        Prudential Financial. I resolved 12+ ADA compliance issues, and created
        a React proof of concept to replace the Angular-based Life Insurance
        Calculator using TypeScript, HTML, CSS, Angular, and React.
      </Description>
      <br />
      <Description title="PerfectRec" href="https://www.perfectrec.com/">
        <div className="inline-flex py-2">
          <img className="h-8 md:h-16" src={withPrefix(PerfectRec)} />
        </div>
        <br />
        Looking for personalized product recommendations? Check out PerfectRec!
        <br />
        <br />
        I have previously worked as a Software Engineering Intern at PerfectRec.
        I've developed the back &#38; skip button in the question tray UI, the
        back of the product card, the product comparison tool, the purchase
        modal, internal development tools, multiple features of the laptop
        recommendation page, custom product information web scraping, sitewide
        image error handling, admin tools, and more!
        <br />
        <br />
        At PerfectRec, my tech stack includes: JavaScript &#38; TypeScript,
        HTML, CSS &#38; TailwindCSS, React, NextJS, and PostgresSQL.
      </Description>
      <br />
      <Description title="UPS" href="https://www.ups.com/">
        I have previous worked as a Software Engineering Intern at UPS. I worked
        on overhauling a legacy application called UPS Email Invoice (UEI) using
        Angular, TypeScript, HTML, and CSS. Additionally, I resolved SonarQube
        issues and wrote unit tests for UEI's Spring Boot and Java REST API.
      </Description>
    </Container>
  );
};

export default Projects;
