import * as React from "react";
import Nav from "./nav";

interface ISection {
  title: string;
  bg?: string;
  description: string;
  link?: string;
  color: string;
  children?: any;
}

export const Section = (props: ISection) => {
  return (
    <>
      <div
        className={`flex-col font-white m-auto w-full p-12 mb-4 ${
          props.bg ? props.bg : "bg-slate-500"
        } `}
      >
        <div className={`flex p-2 text-left text-${props.color}`}>
          <div>{props.title}</div>
        </div>
        <div className={`flex p-2 text-left font-thin text-${props.color}`}>
          <div>{props.description}</div>
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
};
