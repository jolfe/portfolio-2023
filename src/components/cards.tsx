import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import globals from "../styles/globals.module.css";

interface ICards {
  title: string;
  description: any;
  image?: string;
  link?: string;
  linkMore?: string;
  subtitle?: string;
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
  interface items {
    title: string;
    id: number;
    description: string;
    image: string;
    subtitle: string;
    link: string;
    linkMore: string;
  }
  const items: items[] = [
    {
      title: "Home",
      id: 0,
      description: "About me",
      image: "/images/hero.jpg",
      subtitle: "Projects I have worked on",
      link: "/",
      linkMore: "/",
    },
    {
      title: "About",
      id: 1,
      description: "About me",
      image: "/images/hero.jpg",
      subtitle: "Projects I have worked on",
      link: "/about",
      linkMore: "/about",
    },
  ];

  return (
    <div
      className={`flex-col text-black m-auto w-1/2 border-2 border-black rounded mx-6 bg-white mb-8`}
    >
      <div
        className={`flex text-black font-bold font-xl justify-center align-baseline p-2 bg-olive border-b-4 border-gray-600 h-12`}
      >
        <div className="m-auto text-white">{props.title}</div>
      </div>
      <div className={`flex justify-center p-4 h-48 `}>
        <div>{props.description}</div>
      </div>
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
      </div>
      <div>
        {items &&
          items.map((item) => (
            <motion.div
              layoutId={String(item.id)}
              onClick={() => setSelectedId(item?.id)}
              key={item.id}
            >
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item?.title}</motion.h2>
            </motion.div>
          ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={String(selectedId)}>
            <motion.h5>{items[0].subtitle}</motion.h5>
            <motion.h2>{String(items[0].title)}</motion.h2>
            <motion.button onClick={() => setSelectedId(selectedId)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
