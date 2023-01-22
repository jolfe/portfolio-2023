import * as React from "react";
import Nav from "./nav";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Section } from "./section";
import { Button } from "./button";

interface IHero {
  title: string;
  bg?: string;
  description: string;
  image: any;
  link?: string;
  color: string;
}

export const Hero = (props: IHero) => {
  return (
    <div
      className={`flex-row text-black justify-around m-auto w-full p-10  mb-4 ${
        props?.bg !== "" ? "bg-gray-300" : props?.bg
      } `}
    >
      <div>
        <div
          className={`flex font-black flex-1 p-2 text-left text-${props.color}`}
        >
          <div>{props.title}</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex">
          <Image
            src={props?.image}
            alt="Picture of the author"
            width={700}
            height={700}
          />
        </div>

        <div className="flex flex-col m-auto max-w-md px-2 text-xl text-black">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Developer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(700)
                .deleteAll()
                .typeString("Software Engineer")
                .pauseFor(700)
                .deleteAll()
                .typeString("Full Stack Developer")
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
          <div
            className={`flex p-2 text-left border-gray-500 border-t-2 pb-2 font-thin border-spacing-4 text-${props.color}`}
          >
            <div className="py-2">{props.description}</div>
          </div>
          <div className="flex flex-row justify-start">
            <Button
              active={true}
              href="/"
              onClick={() => {}}
              copy="Contact Me"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row"></div>
    </div>
  );
};
