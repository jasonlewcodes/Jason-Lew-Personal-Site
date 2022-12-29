import * as React from "react";
import { Link }  from 'react-scroll';
// @ts-ignore
import ProfilePicture from '../images/jason.jpeg';
// @ts-ignore
import Resume from '../assets/resume.pdf';

const Header = () => {
  return (
    <div className="flex bg-slate-100 sticky top-0 border w-full text-sm py-2 justify-center gap-2 md:gap-6 z-10">
      <div className="flex">
        <img className="w-6 h-6 rounded-full mx-auto my-auto mr-2 border-black border-[1px]" src={ProfilePicture}/>
        Jason Lew
      </div>
      <div>
        |
      </div>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-40} className="cursor-pointer">
        About
      </Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-40} className="cursor-pointer">
        Projects
      </Link>
      <a href={Resume}>
        Resume
      </a>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-40} className="cursor-pointer">
        Contact
      </Link>
    </div>
  )
}

export default Header;