import React from "react";
import DetailHeader from "../ProgramDetails/ProgramDetailHeader/DetailHeader";
import NewsCategory from "./NewsCategory/NewsCategory";
import Email from "../Email/Email";
export default function NewsPage() {
  return (
    <>
      <DetailHeader nameOfComp={"News"} />
      <NewsCategory />
      <Email />
    </>
  );
}
