import * as React from "react";
import ProfilePicture from '../images/jason.jpeg';

const Header = () => {
  return (
    <div className="w-full text-sm flex py-2 justify-center gap-4 bg-white">
      <div className="flex">
        <img className="w-6 h-6 rounded-full mx-auto mr-2" src={ProfilePicture}/>
        Jason Lew
      </div>
      <div>
        About
      </div>
      <div>
        Projects
      </div>
      <div>
        Resume
      </div>
      <div>
        Contact
      </div>
    </div>
  )
}

export default Header;