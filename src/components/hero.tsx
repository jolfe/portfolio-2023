import * as React from "react";
import Nav from "./nav";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Section } from "./section";
import { Button } from "./button";
import { motion } from "framer-motion";

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
      className={`flex-row text-black justify-around m-auto w-full p-10   ${
        props?.bg !== "" ? "bg-gray-300" : props?.bg
      } `}
    >
      <div>
        <div
          className={`flex font-black flex-1 p-2 text-left text-${props.color}`}
        >
          <div className={`w-1/2 text-center`}>{props.title}</div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex justify-center m-auto">
          <motion.div
            whileHover={{ scale: 1.8, translateX: 300, translateY: 150 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={props?.image}
              alt="Picture of the author"
              width={700}
              height={700}
            />
          </motion.div>
        </div>

        <div className="flex flex-col m-0 max-w-md px-2 text-xl text-black"></div>
        <div className="flex flex-col m-auto max-w-lg px-2 text-xl text-black justify-start">
          <h1 className="flex m-auto w-auto flex-nowrap text-center font-bold justify-start max-w-lg">
            Hi there, I am a professional:
          </h1>
          <div className="flex m-auto w-auto my-4 bg-black text-white p-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front End Developer")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(700)
                  .deleteAll()
                  .typeString(" Software Engineer")
                  .pauseFor(700)
                  .deleteAll()
                  .typeString(" Full Stack Developer")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
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
