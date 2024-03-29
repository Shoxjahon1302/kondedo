import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";
import "./main.css";
import { NavLink } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
export default function Main() {
  const [open, setOpen] = useState(false);
  return (
    <main className="bg-white">
      <div className="cotntainer">
        <div
          className="flex lg:flex-wrap items-center justify-between  w-full pb-[100px]
        xl:p-[30px] lg:p-[40px_80px_100px_80px] sm:p-[20px]"
        >
          <div className="flex flex-col relative">
            <img
              src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/promotion/1.png"
              className="rounded-[50%] w-[636px] h-[405px] object-cover xl:w-[546px] 
              xl:h-[399px]  lg:w-[456px] lg:h-[333px] md:w-[636px] md:h-[405px] "
              style={{
                clipPath:
                  "polygon(51% 32%, 88% 20%, 100% 28%, 100% 70%, 100% 100%, 43% 100%, 0 100%, 0% 70%, 0% 35%, 18% 29%)",
              }}
              alt=""
            />
            <img
              src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/shape/tripple-line.png"
              alt=""
              className="w-[161px] h-[67px] animate-img xl:hidden"
            />
          </div>
          <div className="flex-col  flex text-[#fff]">
            <h3 className="text-[55px] text-[#1b1b1b] font-semibold mb-[20px] xl:text-[45px] lg:text-[40px] md:text-[45px] sm:text-[30px] ">
              Eng yaxshisi sizning <br /> bolalaringiz uchun
            </h3>
            <p className="text-[18px] text-[#424242] font-normal mb-[55px] w-[691px] h-[90px] xl:w-auto  ">
              Jasoratli bo'lish har doim ham katta mahorat emas, ba'zida bu
              shunchaki anglatadi o'sha qiyin savolga javob berishga urinib
              ko'ring Agar siz haqiqatan ham yangilikni darsda sinab ko'rsangiz.
            </p>
            <div className="flex justify-around bg-[#00bbae] p-[16px_40px] w-[613px] h-[90px] rounded-3xl mb-[25px] xl:h-[109px] xl:w-[431px] md:w-[450px] ">
              <div
                className="flex items-center xl:flex-col gap-1
                border-white "
              >
                <span className="text-[45px] xl:mt-[-15px] font-semibold xl:text-[35px]">
                  14+
                </span>
                <p className="text-[16px] font-medium">
                  Yil <br /> tajriba
                </p>
              </div>
              <div className="w-[3px] h-[80px] bg-white"></div>
              <div className="flex xl:flex-col lg:flex-col gap-1 items-center">
                <span className="text-[45px] xl:mt-[-15px] font-semibold xl:text-[35px]">
                  7K+
                </span>
                <p className="text-[16px] font-medium ">
                  Har Yilgi <br /> bolalar
                </p>
              </div>
              <div className="w-[3px] h-[80px] bg-white"></div>
              <div className="flex items-center gap-2  xl:flex-col">
                <span className="text-[45px] xl:mt-[-15px]  font-semibold xl:text-[35px]">
                  15+
                </span>
                <p className="text-[16px] font-medium">
                  Har yilgi
                  <br />
                  Yutuqlar{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-3  mb-[25px]">
              <div className="bg-[#ccf1ef] rounded-full w-[20px] h-[20px] flex justify-center items-center">
                <IoIosArrowForward className="text-[#58a39f]  " />
              </div>
              <h3 className="text-[#424242] text-[18px] font-medium">
                Biz har bir bolaning aqlli ekanligiga ishonamiz, shuning uchun
                biz g'amxo'rlik qilamiz.
              </h3>
            </div>
            <div className="flex gap-3  mb-[25px]">
              <div className="bg-[#ccf1ef] rounded-full w-[20px] h-[20px] flex justify-center items-center">
                <IoIosArrowForward className="text-[#58a39f]  " />
              </div>
              <h3 className="text-[#424242] text-[18px] font-medium">
                O'qituvchilar bolangizni o'zgartiradilar.
              </h3>
            </div>
            <div className="flex gap-10">
              <div
                className="flex  relative items-center  gap-4 justify-center cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <div className="w-[60px] h-[60px] bg-[#fff4e7] flex justify-center items-center rounded-full  ">
                  <BsPlayCircle
                    className="w-[40px] h-[40px]"
                    color=" #bf9460"
                  />
                </div>
                <div className="circle-animate"></div>
                <a
                  href="#!"
                  className="text-[18px] hover:text-[#00bbae] duration-300 text-[#424242]"
                >
                  Videoni ko'rish
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed top-0 left-0 bg-black/70 w-full h-full z-50 p-[10px_40px]">
          <div
            className="text-white w-full flex items-center justify-end text-2xl mb-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <FaXmark />
          </div>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/MlNNGeusB7M?si=t9F0YInWRqNgDQn8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </main>
  );
}
