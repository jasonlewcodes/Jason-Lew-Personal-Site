import { withPrefix } from "gatsby";
import * as React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface DescriptionProps {
  href: string;
  title: string;
  children: React.ReactNode;
  position?: string;
  dates?: string;
  images?: string[];
  imageSize?: "sm" | "lg" | undefined;
}

const Description = (props: DescriptionProps) => {
  const imgClass = (imageSize: "sm" | "lg" | undefined) => {
    switch (imageSize) {
      case "sm":
        return "h-8 md:h-24";
      case "lg":
        return "h-20 xl:h-40";
      default:
        return "h-8 md:h-16";
    }
  };
  return (
    <div className="my-2">
      <a className="inline-flex" href={props.href}>
        <div className="grow subtitle">{props.title}</div>
        <div className="min-w-3 ml-1 mt-2">
          <FaExternalLinkAlt size={12} />
        </div>
      </a>
      <div
        className={`text-sm ${
          (props.images || props.position || props.dates) &&
          "md:grid md:grid-cols-2"
        }`}
      >
        <div className="m-auto pb-2 md:pb-0">
          {props.images && (
            <>
              {props.images.map((image) => (
                <div className="py-2">
                  <img
                    className={`inline-flex mx-auto ${imgClass(
                      props.imageSize
                    )}`}
                    src={withPrefix(image)}
                  />
                </div>
              ))}
            </>
          )}
          {props.position && <div className="font-bold">{props.position}</div>}
          {props.dates && <div>{props.dates}</div>}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Description;
