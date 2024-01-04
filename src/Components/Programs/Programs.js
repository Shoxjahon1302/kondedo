import React from "react";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import ShopParents from "../ShopMain/ShopParent/ShopParents";
import ProgramsCard from "./ProgramsCard/Programs";
import Email from "../Email/Email";
import ClassesAbout from "../ClassesNew/ClassesAbout/ClassesAbout";

export default function Programs() {
  return (
    <>
      <DetailHeader nameOfComp={"Programs"} />
      <ProgramsCard />
      <ShopParents />
      <ClassesAbout />
      <Email />
    </>
  );
}
