import * as React from "react";
import Container from "./container";
import { FaEnvelope, FaGithubSquare, FaLinkedin} from 'react-icons/fa';

const Contact = () => {
  return (
    <Container
      className="bg-white bg-opacity-50 border-solid border-2 border-black"
      id="contact"
    >
      <div className="text-xl font-bold mb-2">
        Contact
      </div>
      <div className="flex justify-center gap-6">
        <a href="mailto:jl247@njit.edu">
          <FaEnvelope size={24}/>
        </a>
        <a href="https://github.com/jasonlewcodes">
          <FaGithubSquare size={24}/>
        </a>
        <a href="https://www.linkedin.com/in/-jason-lew/">
          <FaLinkedin size={24}/>
        </a>
      </div>
    </Container>
  )
}

export default Contact;