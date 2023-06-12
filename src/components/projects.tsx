import * as React from "react";
import Container from "./container";
import { FaExternalLinkAlt } from "react-icons/fa";
// @ts-ignore
import CCModelImage1 from "../images/cervical_cancer_ml_model_1.png";
// @ts-ignore
import CCModelImage2 from "../images/cervical_cancer_ml_model_2.png";
// @ts-ignore
import PerfectRec from "../images/perfectrec.png";

const Projects = () => {
  return (
    <Container id="projects">
      <div className="title mb-2">Projects</div>
      <a
        className="subtitle inline-flex pb-2 md:pb-0"
        href="https://github.com/jasonlewcodes/Cervical-Cancer-Classification"
      >
        Cervical Cancer Classification
        <FaExternalLinkAlt className="ml-1 mt-2" size={12} />
      </a>
      <div className="text-sm">
        <div className="inline md:inline-flex pb-2">
          <img
            className="h-28 xl:h-48 pr-0 md:pr-2 pb-2 md:pb-0 mx-auto"
            src={CCModelImage1}
          />
          <img className="h-28 xl:h-48 mx-auto" src={CCModelImage2} />
        </div>
        <br />
        Using&nbsp;
        <span className="underline">machine learning</span>, I classify cervical
        cancer diagnoses using dataset of 30+ risk factors and 800+ data points
        using Numpy, Pandas, Seaborn, Pyplot, and Imblearn in Python. I
        implement a Logistic Regression model using SKLearn with 99%+ accuracy
        and visualize model statistics.
      </div>
      <br />
      <a
        className="subtitle inline-flex"
        href="https://jasonlewcodes.github.io/Jason-Lew-Personal-Site/"
      >
        Personal Portfolio Website
        <FaExternalLinkAlt className="ml-1 mt-2" size={12} />
      </a>
      <div className="text-sm">
        Welcome to my personal portfolio website!
        <br />
        <br />I develop this site using JavaScript &#38; TypeScript, HTML, CSS
        &#38; TailwindCSS, React, and Gatsby hosted through GitHub Pages.
      </div>
      <br />
      <a className="subtitle inline-flex" href="https://www.ups.com/">
        UPS
        <FaExternalLinkAlt className="ml-1 mt-2" size={12} />
      </a>
      <div className="text-sm">
        I am a Software Development Intern at UPS. Currently, I am working on
        rewriting and migrating a legacy application using Angular, TypeScript,
        HTML, and CSS.
      </div>
      <br />
      <a className="subtitle inline-flex" href="https://www.perfectrec.com/">
        PerfectRec
        <FaExternalLinkAlt className="ml-1 mt-2" size={12} />
      </a>
      <div className="text-sm">
        <div className="inline-flex py-2">
          <img className="h-8 md:h-16" src={PerfectRec} />
        </div>
        <br />
        Looking for personalized product recommendations? Check out PerfectRec!
        <br />
        <br />
        I've worked as a Software Engineering Intern at PerfectRec. I've
        developed the back &#38; skip button in the question tray UI, the back
        of the product card, the product comparison tool, the purchase modal,
        internal development tools, multiple features of the upcoming laptop
        recommendation page, and more!
        <br />
        <br />
        At PerfectRec, my tech stack includes: JavaScript &#38; TypeScript,
        HTML, CSS &#38; TailwindCSS, React, NextJS, and PostgresSQL.
      </div>
      <br />
      <a
        className="subtitle inline-flex"
        href="https://arxiv.org/abs/2210.00389v2"
      >
        Novel Triangle Counting Algorithm
        <FaExternalLinkAlt className="ml-1 mt-2" size={12} />
      </a>
      <div className="text-sm">
        I assisted researchers and graduate students in exploring a novel
        triangle counting algorithm. In summary, triangle counting in a graph
        can be performed by computing breadth-first search on the graph while
        categorizing edges based on their level and counting list intersections
        for each horizontal edge. I produced statistics in Python to the scale
        of 2<sup>20</sup> vertices. This paper was submitted to arXiv.
      </div>
    </Container>
  );
};

export default Projects;
