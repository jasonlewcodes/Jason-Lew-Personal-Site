import * as React from "react";
import Container from "./container";
// @ts-ignore
import CCModelImage1 from "../images/cervical_cancer_ml_model_1.png";
// @ts-ignore
import CCModelImage2 from "../images/cervical_cancer_ml_model_2.png";
// @ts-ignore
import JPMorganChase from "../images/jpmorganchase.png";
// @ts-ignore
import NJIT from "../images/njit.png";
import Description from "./description";

const Projects = () => {
  const Divider = () => {
    return <hr className="border-black"></hr>;
  };
  return (
    <Container id="projects">
      <div className="title mb-2">Projects</div>
      <Description
        href="https://jasonlewcodes.github.io/Jason-Lew-Personal-Site/"
        title="Personal Portfolio Website"
      >
        <div className="my-auto">
          Welcome to my personal portfolio website!
          <br />
          <br />I develop this site using JavaScript &#38; TypeScript, HTML, CSS
          &#38; TailwindCSS, React, and Gatsby hosted through GitHub Pages.
        </div>
      </Description>
      <Divider />
      <Description
        href="https://careers.jpmorgan.com/us/en/students/programs/code-for-good"
        title="DocuParse - JPMorgan Chase Code for Good"
        images={[JPMorganChase]}
      >
        <div className="my-auto">
          My team of 6 college students constructed a web application to
          automate volunteer scheduling for events via a scheduling algorithm
          for the American Council of the Blind using React, JavaScript, HTML,
          CSS, Flask, and Python.
          <br />
          <br />
          We were able to cut down 3 hours of manual labor into seconds, and we
          also won against 5 competing projects!
        </div>
      </Description>
      <Divider />
      <Description
        href="https://github.com/jasonlewcodes/Cervical-Cancer-Classification"
        title="Cervical Cancer Classification"
        images={[CCModelImage1, CCModelImage2]}
        imageSize="lg"
      >
        <div className="my-auto">
          Using&nbsp;
          <span className="underline">machine learning</span>, I classify
          cervical cancer diagnoses using dataset of 30+ risk factors and 800+
          data points using Numpy, Pandas, Seaborn, Pyplot, and Imblearn in
          Python. I implement a Logistic Regression model using SKLearn with
          99%+ accuracy and visualize model statistics.
        </div>
      </Description>
      <Divider />
      <Description
        href="https://arxiv.org/abs/2210.00389"
        title="Communication-Efficient Triangle Counting Algorithm"
        images={[NJIT]}
      >
        <div className="my-auto">
          I assisted researchers and graduate students in exploring a triangle
          counting algorithm. In summary, triangle counting in a graph can be
          performed by computing breadth-first search on the graph while
          categorizing edges based on their level and counting list
          intersections for each horizontal edge. I computed statistics in
          Python to the scale of 2<sup>20</sup> vertices. This paper was
          submitted to arXiv and accepted to IEEE HPEC 2023 GraphChallenge.
        </div>
      </Description>
    </Container>
  );
};

export default Projects;
