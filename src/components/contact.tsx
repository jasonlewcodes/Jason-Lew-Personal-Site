import * as React from "react";
import Container from "./container";
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container id="contact">
      <div className="title mb-2">
        Contact
      </div>
      <div className="flex justify-center gap-6">
        <a href="mailto:jl247@njit.edu">
          <FaEnvelope size={28}/>
        </a>
        <a href="https://github.com/jasonlewcodes">
          <FaGithubSquare size={28}/>
        </a>
        <a href="https://www.linkedin.com/in/-jason-lew/">
          <FaLinkedin size={28}/>
        </a>
      </div>
    </Container>
  )
}

export default Contact;