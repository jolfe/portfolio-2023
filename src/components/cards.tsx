import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import globals from "../styles/globals.module.css";
import styles from "@/styles/Home.module.css";

interface ICards {
  title: string;
  description: any;
  image?: string;
  link?: string;
  linkMore?: string;
  subtitle?: string;
  download?: string;
  stack?: any;
}

const Cards = (props: ICards) => {
  //card hover trigger animation
  const [hover, setHover] = useState(false);

  //card hover function to trigger animation
  const handleHover = () => {
    setHover(!hover);
  };

  //array if cards

  //animation framer motion

  const animation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  useEffect(() => {}, []);
  const [selectedId, setSelectedId] = useState(0);

  return (
    <motion.div
      whileHover={{ scale: [null, 1.3, 1.4] }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      <div
        className={`flex flex-col text-black border-black rounded justify-center w-80 h-72 m-auto mx-6 bg-white mb-8`}
      >
        <div
          className={`flex text-black font-xl justify-center align-baseline p-2 bg-olive border-b-4 h-12`}
        >
          <div className="m-auto text-white">{props.title}</div>
        </div>
        <div className={`flex justify-center text-center px-4 h-auto pt-2 `}>
          <div className="border-b-2 border-spacing-4 pb-3 border-olive">
            {props.description}
          </div>
        </div>
        <div
          className={`flex m-auto justify-center text-center px-4 h-auto pt-2 `}
        >
          <div className="flex m-auto text-left">{props.stack}</div>
        </div>
        {/* {props.stack && (
          <div
            className={`flex flex-row justify-center text-center p-2 h-2 mb-4`}
          >
            {props.stack.map((item, index) => (
              <div className={`flex justify-center p-2 h-12`} key={index}>
                <div className="m-auto text-black">{`- ${item}`}</div>
              </div>
            ))}
          </div>
        )} */}
        <div className="flex flex-row justify-center p-2 h-12">
          {props.link && (
            <div className={`flex underline justify-center p-2 h-12`}>
              <Link href={props.link}>GitHub</Link>
            </div>
          )}
          {props.linkMore && (
            <div className={`flex underline justify-center p-2 h-12`}>
              <Link href={props.linkMore}>Read More</Link>
            </div>
          )}
          {props.download && (
            <div className={`flex underline justify-center p-2 h-12`}>
              <Link href={props.download}>Download</Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
