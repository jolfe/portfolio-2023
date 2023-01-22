import Link from "next/link";
import React from "react";

interface IButton {
  active: boolean;
  href: string;
  copy: string;
  onClick: () => void;
}
const doSomething = () => {
  console.log("do something");
};
export const Button = ({ active, href, onClick, copy }: IButton) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`bg-black p-4 text-lg flex w-auto justify-center text-center text-white hover:text-black hover:bg-white`}
    >
      <div>{active ? copy : ""}</div>
    </Link>
  );
};
