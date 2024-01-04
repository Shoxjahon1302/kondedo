import React from "react";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import ContactCard from "./ContactCard/ContactCard";
import ContactEmail from "./ContactEmail/ContactEmail";
import Email from "../Email/Email";
export default function Contact() {
  return (
    <>
      <DetailHeader nameOfComp={`Contact Us`} />
      <ContactCard />
      <ContactEmail />
      <Email />
    </>
  );
}
