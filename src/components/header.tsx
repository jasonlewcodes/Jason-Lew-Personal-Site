import * as React from "react";
import { Link }  from 'react-scroll';
import ProfilePicture from '../images/jason.jpeg';
import Resume from '../assets/resume.pdf'

const Header = () => {
  return (
    <div className="w-full text-sm flex py-2 justify-center gap-2 md:gap-3 bg-slate-100 sticky top-0 border-b-2 border-black">
      <div className="flex">
        <img className="w-6 h-6 rounded-full mx-auto my-auto mr-2" src={ProfilePicture}/>
        Jason Lew
      </div>
      <div>
        |
      </div>
      <Link activeClass="active" to="about" spy={true} smooth={true} className="cursor-pointer">
        About
      </Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} className="cursor-pointer">
        Projects
      </Link>
      <a href={Resume}>
        Resume
      </a>
      <Link activeClass="active" to="contact" spy={true} smooth={true} className="cursor-pointer">
        Contact
      </Link>
    </div>
  )
}

export default Header;