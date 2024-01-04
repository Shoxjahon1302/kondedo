import React from "react";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import TeacherDetailAbout from "./TeacherDetailAbout/TeacherDetailAbout";
import TeacherTIme from "./TeacherTime/TeacherTIme";
import Email from "../Email/Email";
export default function TeacherDetail() {
  return (
    <>
      <DetailHeader nameOfComp={"Teachers Details"} />
      <TeacherDetailAbout />
      <TeacherTIme />
      <Email />
    </>
  );
}
