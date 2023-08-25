import * as React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface DescriptionProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const Description = (props: DescriptionProps) => {
  return (
    <>
      <a className="subtitle inline-flex" href={props.href}>
        {props.title}
        <FaExternalLinkAlt className="ml-1 mt-2" size={12} />
      </a>
      <div className="text-sm">{props.children}</div>
    </>
  );
};

export default Description;
