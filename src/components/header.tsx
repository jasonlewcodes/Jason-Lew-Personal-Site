import * as React from "react";
import { Link } from "react-scroll";
import { withPrefix } from "gatsby";
// @ts-ignore
import ProfilePicture from "../images/jason.jpg";
// @ts-ignore
// import Resume from "../assets/resume.pdf";

const Header = () => {
  return (
    <div className="flex bg-slate-100 sticky top-0 border-black border-b-2 w-full py-2 justify-center gap-1.5 md:gap-6 z-10 text-xs md:text-sm">
      <div className="flex">
        <img
          className="w-6 h-6 rounded-full mx-auto my-auto mr-2 border-black border-[1px]"
          src={withPrefix(ProfilePicture)}
        />
        <div className="my-auto">Jason Lew</div>
      </div>
      <div className="my-auto">|</div>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-40}
        className="cursor-pointer my-auto"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={-40}
        className="cursor-pointer my-auto"
      >
        Experience
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-40}
        className="cursor-pointer my-auto"
      >
        Projects
      </Link>
      {/* <a target="_blank" href={withPrefix(Resume)}>
        Resume
      </a> */}
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-40}
        className="cursor-pointer my-auto"
      >
        Contact
      </Link>
    </div>
  );
};

export default Header;
