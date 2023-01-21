import React, { useState } from "react";
import globals from "../styles/globals.module.css";

interface ICards {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const Cards = (props: ICards) => {
  return (
    <div
      className={`flex-col font-white m-auto w-1/3 border-2 rounded p-12 my-4 `}
    >
      <div className={`flex justify-center p-2`}>
        <div>{props.title}</div>
      </div>
      <div className={`flex justify-center p-2`}>
        <div>{props.description}</div>
      </div>
    </div>
  );
};

export default Cards;
