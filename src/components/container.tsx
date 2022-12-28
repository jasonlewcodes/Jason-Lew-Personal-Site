import * as React from "react";

export interface ContainerProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <div className={`container-default ${props.className}`} id={props.id}>
      {props.children}
    </div>
  )
}

export default Container;