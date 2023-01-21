import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className={`w-full flex justify-end  text-white border-orange-400 `}>
      <Image src={""} alt={""} width={200} height={200} />
      <ul className="flex font-bold">
        <li className="m-2 border-b-2">
          <Link href="/">HOME</Link>
        </li>
        <li className="m-2">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="m-2">
          <Link href="/contact">CONTACT</Link>
        </li>
        <li className="m-2">
          <Link href="/work">WORK</Link>
        </li>
      </ul>
    </nav>
  );
}
