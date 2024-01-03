import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
// import Navbar from "../../navbar/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { PiSquaresFourThin } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "./Header.css";
// import Wave from "react-wavify";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const toogle = () => {
  //   setSidebar((preveState) => !preveState);
  // };
  {
    /* <NavLink
            className="hover:text-[#FF9B24] duration-200"
            to="/ProgramDetail"
          >
            ProgramDetail
          </NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/ClassesofNew">ClassesofNew</NavLink>
          <NavLink to="/ClassDetails">ClassDetails</NavLink>
          <NavLink to="/TimeTable">TimeTable</NavLink>
          <NavLink to="/TeacherDetail">TeacherDetail</NavLink>
          <NavLink to="/Teacher">Teacher</NavLink>
          <NavLink to="/Programs">Programs</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/News">News</NavLink> */
  }
  return (
    <>
      <div className="bg-[#00BBAE] w-full xl:hidden flex items-center justify-between text-white font-normal p-[15px_40px] leading-normal">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CgMail /> suppport@kindebo.com
          </div>
          <div className="flex items-center gap-2">
            <FaClock /> 8.00am-4.00pm
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn />
          1870 N State St, California, 95482 United States
        </div>
      </div>
      <div className="flex items-center justify-between p-[20px_40px]">
        <img
          className="w-[186px] object-cover"
          src="https://codeskdhaka.com/wp/kindedo/wp-content/uploads/2023/02/Group-751.png"
          alt=""
        />
        <div
          className={` gap-5 ${
            isMenuOpen
              ? "fixed right-0 flex flex-col top-0 bg-white z-50 w-1/3 h-full p-4 shadow-lg overflow-x-auto"
              : "sm:hidden flex items-center"
          }`}
        >
          <span
            onClick={openMenu}
            className={`${
              isMenuOpen == true ? "block" : " hidden"
            } cursor-pointer`}
          >
            <FaXmark />
          </span>
          <NavLink
            to="/News"
            className="hover:text-[#FF9B24] xl:border-b duration-200 font-normal leading-[30px] text-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/News"
            className="hover:text-[#FF9B24] xl:border-b duration-200 font-normal leading-[30px] text-lg"
          >
            Courses
          </NavLink>
          <NavLink
            to="/News"
            className="hover:text-[#FF9B24] xl:border-b duration-200 font-normal leading-[30px] text-lg"
          >
            Shop
          </NavLink>
          <NavLink
            to="/News"
            className="hover:text-[#FF9B24] xl:border-b duration-200 font-normal leading-[30px] text-lg"
          >
            Pages
          </NavLink>
          <NavLink
            to="/News"
            className="hover:text-[#FF9B24] xl:border-b duration-200 font-normal leading-[30px] text-lg"
          >
            News
          </NavLink>
          <NavLink
            to="/News"
            className="hover:text-[#FF9B24] xl:border-b duration-200 font-normal leading-[30px] text-lg"
          >
            Contact
          </NavLink>
          <p className="hover:text-[#FF9B24] duration-200 font-normal xl:border-b flex items-center justify-between leading-[30px] text-lg cursor-pointer">
            <input
              type="text"
              className="hidden xl:block outline-none "
              placeholder="Search..."
            />
            <CiSearch />
          </p>
          <p className="hidden xl:block text-[#424242] font-semibold leading-[30px] text-xl mt-4">
            Contact Info
          </p>
          <div className="hidden xl:flex items-center gap-4">
            <p className="bg-[#f8f8f8] text-[#9f9999] p-3 text-lg rounded-full">
              <CiLocationOn />
            </p>

            <p>12/A, City Tower, NYC</p>
          </div>
          <div className="hidden xl:flex items-center gap-4">
            <p className="bg-[#f8f8f8] text-[#9f9999] p-3 text-lg rounded-full">
              <MdOutlinePhone />
            </p>
            <p>+998 90 111 22 33</p>
          </div>
          <div className="hidden xl:flex items-center gap-4">
            <p className="bg-[#f8f8f8] text-[#9f9999] p-3 text-lg rounded-full">
              <CgMail />
            </p>
            <p>support@gmail.com</p>
          </div>
          <div className="hidden xl:flex items-center gap-4">
            <div className="p-4 border rounded-full">
              <FaFacebook />
            </div>
            <div className="p-4 border rounded-full">
              <FaTwitter />
            </div>
            <div className="p-4 border rounded-full">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="flex xl:hidden items-center gap-2 pr-5 text-xl font-normal text-[#424242] hover:opacity-40 cursor-pointer duration-200">
            <MdOutlinePhone />
            +998 90 111 22 33
          </h1>
          <button className="bg-[#FF9B24] xl:hidden text-white p-[12px_34px] rounded-3xl">
            Apply Now
          </button>
          <p
            className="text-[#424242] text-4xl cursor-pointer"
            onClick={openMenu}
          >
            <PiSquaresFourThin />
          </p>
        </div>
      </div>
      <header
        className=""
        style={{
          background:
            " linear-gradient(90.87deg, #ffecd6 0.69%, #09b9ad 530.75%)",
        }}
      >
        {/* <Navbar /> */}{" "}
        <div className="container">
          <div className="flex  justify-around items-center flex-wrap">
            <div className="flex flex-col">
              <p className="text-[23px] md:text-[18px]  text-[#00BBAE] font-semibold  ">
                Kindergarten Program
              </p>
              <h2 className="text-[80px] text-[black] xl:text-[60px] lg:text-[50px]  md:text-[45px] md:mb-[45px] sm:text-[40px] btn-hover font-extrabold mb-[20px] ">
                Best Children’s <br /> Education
              </h2>
              <button className="text-[16px] text-[white] bg-[#ffb924] w-[260px] rounded-3xl p-[0px_40px] h-[60px] font-medium lg:mb-[30px] btn-header-hover">
                Admission open 22-23
              </button>
            </div>
            <img
              src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/hero/hero-3.jpg"
              alt=""
              className="w-[550px] h-[472px] xl:w-[475px] xl:h-[405px] lg:w-[400px] lg:h-[339px] md:w-[360px] md:h-[303px]"
              style={{
                clipPath: " polygon(6% 0, 100% 16%, 82% 100%, 0 100%, 0% 38%)",
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
