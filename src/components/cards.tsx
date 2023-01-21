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
    <div className={`flex font-white m-auto`}>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default Cards;
