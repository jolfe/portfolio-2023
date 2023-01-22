import Nav from "@/components/nav";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import React from "react";
import logo from "../vim.png";

export default function About() {
  return (
    <div>
      <Nav />

      <Section
        color={`white`}
        bg={"bg-slate-700"}
        title="About"
        description="This is the about page"
      />
    </div>
  );
}
