import Nav from "@/components/nav";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import React from "react";
import logo from "../vim.png";
import tech from "../tech.png";
import { Skills } from "@/components/skills";
import { Footer } from "../components/footer";
import utsvg from "../utsvg.svg";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Nav />
      <Section
        color={`white`}
        bg={"bg-black"}
        title="About"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam earum itaque recusandae, eum consectetur exercitationem soluta magni porro architecto temporibus saepe iure sapiente reprehenderit sed ex. Fugiat, explicabo ad!"
      ></Section>
      <h1 className="flex flex-row justify-center text-3xl text-black font-bold py-4">
        Education
      </h1>
      <p className="w-2/3 flex m-auto py-4 font-semibold text-center text-burntOrange">
        The University of Texas at Austin
      </p>

      <div className="flex flex-col w-2/3 m-auto items-left justify-start">
        <div className="flex flex-row justify-center leading-10">
          <span className={`border-t-2 border-gray-300`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem esse distinctio eaque autem, magnam eum maxime itaque
            rerum modi error ipsum et voluptatum accusantium commodi delectus
            quam illo harum ut?
            <ul>
              <li className="underline text-burntOrange">DisrupTexas</li>
            </ul>
          </span>

          <Image src="../ut.svg" alt="" width={300} height={300} />
        </div>
        <div className="flex flex-col w-1/3 m-0 mt-0 justify-items-end">
          <p className={`flex text-center m-0`}></p>
        </div>
      </div>

      <div className="flex flex-col w-2/3 m-auto items-center mt-0 justify-center min-h-screen">
        <Skills imgSrc={tech} />
      </div>
      <Section
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam earum itaque recusandae, eum consectetur exercitationem soluta magni porro architecto temporibus saepe iure sapiente reprehenderit sed ex. Fugiat, explicabo ad!"
        color={`white`}
        bg={"bg-black"}
        title="More info"
      />
      <Footer
        email="contact@jolfe.com"
        github="@jolfe"
        links={["Home", "About", "Projects", "Contact"]}
        linkedIn="https://www.linkedin.com/in/jackwolfe/"
      />
    </div>
  );
}
