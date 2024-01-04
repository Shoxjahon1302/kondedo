import React from "react";
import About from "./About/About";
import Main from "./main/Main";
import NewSession from "./NewSeession/NewSession";
import OurPrograms from "./OurPrograms/OurPrograms";
import Section from "./Section/Section";
import Teacher from "./teachers/Teacher";
// import Parents from "../Parents/Parents";
import News from "./News/News";
import Email from "../Email/Email";
import Second from "./Second/Second";
export default function Home() {
  return (
    <>
      <Second />
      <Section />
      <Main />
      <OurPrograms />
      <About />
      <NewSession />
      <Teacher />
      {/* <Parents />/ */}
      <News />
      <Email />
    </>
  );
}
