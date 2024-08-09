import * as React from "react";
import Container from "./container";
// @ts-ignore
import PerfectRec from "../images/perfectrec.png";
// @ts-ignore
import CapitalOne from "../images/capitalone.png";
// @ts-ignore
import PrudentialFinancial from "../images/prudentialfinancial.png";
// @ts-ignore
import UPS from "../images/ups.png";
// @ts-ignore
import Sayari from "../images/sayari.png";
import Description from "./description";

const Projects = () => {
  const Divider = () => {
    return <hr className="border-black"></hr>;
  };
  return (
    <Container id="experience">
      <div className="title mb-2">Work Experience</div>
      <Description
        title="Sayari"
        href="https://sayari.com/"
        images={[Sayari]}
        position="Software Engineering Intern"
        dates="September 2024 - December 2024"
      >
        <div className="my-auto">
          Incoming Software Engineering Intern at Sayari.
        </div>
      </Description>
      <Divider />
      <Description
        title="Capital One"
        href="https://www.capitalone.com/"
        images={[CapitalOne]}
        position="Software Engineering Intern"
        dates="June 2024 - August 2024"
      >
        <div className="my-auto">
          I developed a personalized suggestions bar for bank account actions on
          Capital One's bank account page. This full-stack feature includes
          Angular, TypeScript, NgRx, RxJS on the front-end, and TypeScript, AWS
          Lambda, Java, Spring Boot, and Amazon DynamoDB database on the
          back-end.
        </div>
      </Description>
      <Divider />
      <Description
        title="Prudential Financial"
        href="https://www.prudential.com/"
        images={[PrudentialFinancial]}
        position="Software Engineering & Data Co-Op"
        dates="January 2024 - May 2024"
      >
        <div className="my-auto">
          I resolved 12+ ADA compliance issues, and created a React proof of
          concept to replace the Angular-based Life Insurance Calculator using
          TypeScript, HTML, CSS, Angular, and React.
        </div>
      </Description>
      <Divider />
      <Description
        title="PerfectRec"
        href="https://www.perfectrec.com/"
        images={[PerfectRec]}
        position="Software Engineering Intern"
        dates="May 2022 - June 2023, August 2023 - January 2024"
      >
        <div className="my-auto">
          I developed the back &#38; skip button in the question tray UI, the
          back of the product card, the product comparison tool, the purchase
          modal, internal development tools, multiple features of the laptop
          recommendation page, custom product information web scraping, sitewide
          image error handling, admin tools, and more, using JavaScript &#38;
          TypeScript, HTML, CSS &#38; TailwindCSS, React, NextJS, and
          PostgresSQL.
        </div>
      </Description>
      <Divider />
      <Description
        title="UPS"
        href="https://www.ups.com/"
        images={[UPS]}
        position="Software Engineering Intern"
        dates="June 2023 - August 2023"
      >
        <div className="my-auto">
          I worked on overhauling a legacy application called UPS Email Invoice
          (UEI) using Angular, TypeScript, HTML, and CSS. Additionally, I
          resolved SonarQube issues and wrote unit tests for UEI's Spring Boot
          and Java REST API.
        </div>
      </Description>
    </Container>
  );
};

export default Projects;
