import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Nav from "../components/nav";
import Link from "next/link";
import Cards from "../components/cards";
import { Button } from "@/components/button";
import { Hero } from "@/components/hero";
import logo from "../vim.png";
import { Section } from "@/components/section";
import { Footer } from "@/components/footer";
import { motion, useScroll } from "framer-motion";
import handler from "./api/hello";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Head>
        <title>Jolfe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-white color-white w-screen m-auto h-screen pb-3`}>
        <div>
          <Link href="/home"> </Link>
        </div>
        {/* <div className={`w-full m-auto pt-8 bg-black`}> Socials </div> */}
        <Nav />
        <Hero
          title="Web Development Services"
          image={logo}
          description="My name is Jack Wolfe. I am a passionate Software Engineer with expertise(s) in technologies such as: React, Next.js, Node.js, Express, MongoDB, SQL, and more. I am  available for freelance work. Feel free to contact me for more information."
          color="black"
          bg={`bg-gray-100`}
        />
        <motion.div
          className="progress-bar"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "center",
            height: "3px",
            backgroundColor: "black",
          }}
        />
        <h1>
          <code></code>
        </h1>
        <Section
          title="About me"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam, quasi voluptate sequi ea tempore delectus dolores repellat cupiditate minima id facilis neque perferendis officia vel soluta quas error magnam."
          color={"black"}
          bg={"bg-white"}
          header={"About me"}
        />
        <motion.div
          className="progress-bar"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "center",
            height: "3px",
            backgroundColor: "black",
          }}
        />
        <div className="flex flex-col text-center m-auto bg-gray-200">
          <div className="flex flex-row m-auto flex-1">
            <h1 className="font-bold text-2xl py-5 pb-8 m-auto">Projects</h1>
          </div>
          <div className=" flex lg:flex-row md:flex-col m-auto justify-around sm:flex-col ">
            <Cards
              title="cStaff"
              description="Minecraft server plugin forged with Bukkit API, intended to concisely display customizable lists of online users"
              stack={
                <>
                  <ul className={`list-disc list-inside text-black text-left`}>
                    <li>Bukkit API</li>
                    <li>Java</li>
                    <li>Maven</li>
                  </ul>
                </>
              }
              image="image"
              linkMore="https://dev.bukkit.org/projects/cstaff"
              link="https://github.com/jolfe/cStaff"
              download="https://www.curseforge.com/minecraft/bukkit-plugins/cstaff/download"
            />
            <Cards
              title="Banking App"
              description={`Node / MongoDB / React Banking App Challenge`}
              stack={
                <div className="flex text-center justify-center">
                  <ul className={`list-disc list-inside text-black text-left`}>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>bcrypt</li>
                    <li>jsonwebtoken</li>
                  </ul>
                  <ul className={`list-disc list-inside text-black text-left`}>
                    <li>nodemon</li>
                    <li>dotenv</li>
                    <li>dinero.js</li>
                  </ul>
                </div>
              }
              image="image"
              link="https://github.com/jolfe/mern-ride-hitch"
            />
            <Cards
              title="cStaff"
              description="Minecraft server plugin forged with Bukkit API, intended to concisely display customizable lists of online users"
              stack={
                <>
                  <ul className={`list-disc list-inside text-black text-left`}>
                    <li>Bukkit API</li>
                    <li>Java</li>
                    <li>Maven</li>
                  </ul>
                </>
              }
              image="image"
              linkMore="https://dev.bukkit.org/projects/cstaff"
              link="https://github.com/jolfe/cStaff"
              download="https://www.curseforge.com/minecraft/bukkit-plugins/cstaff/download"
            />
          </div>
        </div>
        <Button
          active={true}
          href={
            "https://portfolio-buc.s3.us-east-2.amazonaws.com/logo.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJGMEQCIHZpMPniNfzbgoB8XbodkxbdA3Po7XpMjnupID2gCwnDAiBNEZ0AQU2jWxfV0kS%2Bn%2FTWmP9RfRaNBU%2B6TR5aqmDohCrtAgit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDUwOTU1NTQwNjQ5OSIModepCccWCjLmFbPUKsEC%2BuyH4YcSBEuqz8csdgcmCmYzFROWzWdpo9Kd9EVM%2FmcCoKas94UIuWYqlmg7KKVVSsnU5Is6h4mY0Db5ua5tGq1%2BKnAzDXj0CA94gLSjolAQnhAiVvf0ncjzCgs%2Bprm1oju6F2ctkGb7AMCTH4%2BMCN8QiOqNdzdQuVoHtQgUysV%2FmffuXg%2FB2%2BnfzGNcuYLVkywATSuhESrGdoIhaHiHmBibWx9hTEHrmRUYTicM7ZoAd6lc0loUb2kfa1hjhx1G7DdUD451xnKEuT6cgE79LCZzbCa0tXMBbkNJw1vQGgdkM0Su34LVNIDNPATAajdM4ckKQf%2FBCjs1GoRlVsdm3zF%2F7461KnV2QsYmBw5BPrhcmXXvB7m2omzAKj0pbWmqomfKXj55RCzD4IeF2u7N0%2F1V%2BlHDRlHkCn%2Fd7XMX094xMPqBsZ4GOrQCDs7sBA2lHrtZHLL%2BND86tHDTMrMfa4qzBYlTh7oMvQ0VOzs6VLu3Bd5YhtSh8LfC5kXr8TcLGqkL8GxKAyNTmsU3OVErJEevIH%2BJmU6%2BKJv20JASod%2BuRJh%2FvT3EWgo2Oe4bJWvzdWAS4N%2Fs%2B867cKef2rZNOtoEDnSgJbDO5UY9NZrvaTTN4ne3PR66NfVQlmNZRwVHgF96Fwa586SWSrz87BZeiJuwoXLY7KA3Lp1aRzjAtq4%2FwggT4ZA2ij9JM%2ByJPDC9L9H5O9ZsgfzqPyc73iY97lq8EbMilZ4Z0stJnnbOWdG75pbCEdLw6vgd2sMEaWuqC5t6tGQXVXWUWdbra0nyNsDlz1tuasO%2FrQ5PYL5UziZRQh1zoENc7FjWSoDHqR7VeXneAlPd3pPqXpnGaSQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T200239Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXNI66O2RZ2KBITFV%2F20230121%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=148dd02e0b7e5f7f92e8dd0dfd814a0a7f90505f6338c496e9540f26369ea1bc"
          }
          onClick={() => alert("clicked")}
          copy={"CTA"}
        />
        <Footer
          email="contact@jolfe.com"
          github="@jolfe"
          links={["Home", "About", "Projects", "Contact"]}
          linkedIn="https://www.linkedin.com/in/jackwolfe/"
        />
      </main>
    </>
  );
}
