import * as React from "react";

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <div className={`container-default ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Container;