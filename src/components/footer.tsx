import * as React from "react";

import { Section } from "@/components/section";
import { ContactForm } from "./contactForm";

interface IFooter {
  links: string[];
  linkedIn: string;
  github: string;
  email: string;
  //   form: any;
}

export const Footer = ({ links, linkedIn, github, email }: IFooter) => {
  return (
    <>
      <div></div>
      <Section color={`gray-700`} bg={"bg-olive pt-0"} title="" description="">
        <h1 className="text-white pb-2 font-extrabold">GET IN TOUCH</h1>

        <div className="flex flex-col border-t-2 border-white pt-2">
          {links.map((link) => (
            <div
              key={link.indexOf("1")}
              className="justify-start text-md py-1 text-white"
            >
              <a href={link}>{link}</a>
            </div>
          ))}
        </div>
      </Section>
      {/* <ContactForm /> */}
    </>
  );
};
