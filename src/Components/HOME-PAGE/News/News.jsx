import React from "react";
import { BiUser, BiCommentDetail } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "./News.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function News({ container }) {
  return (
    <>
      <div className="p-[120px_120px_0px] xl:p-[20px]  md:p-[30px_30px_0px] sm:p-[8px] h-[750px]">
        <div className={container}>
          <h2 className="text-[#1b1b1b] text-[55px] xl:text-[60px] lg:text-[50px]  md:text-[45px] md:mb-[45px] sm:text-[40px] font-semibold ">
            Best yangliklari
          </h2>
          <p className="text-[#1b1b1b] text-[18px] font-normal mb-[40px] w-[636px] h-[60px] lg:w-auto lg:mb-[60px]">
            Bizning maqsadimiz BEst Kids Club bo'yicha mashg'ulotlarga
            kiritilgan har bir bolaga yoshiga mos imkoniyat yaratishdir.
          </p>
          <Swiper
            className="mySwiper relative p-[0px_0px_0px_50px] flex teacher-slide-home"
            pagination={true}
            modules={[Pagination]}
            loop={true}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,

                slidesPerView: 1,
              },
              1440: {
                slidesPerView: 3,
              },
              1410: {
                slidesPerView: 2,
              },
              1350: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 2,
              },
              1250: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative w-[416px] overflow-hidden mb-[20px] border-[2px] rounded-lg border-[#E6E6E6] hover:shadow-xl duration-300  scs-ali ">
                <div className="overflow-hidden ">
                  <img
                    src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/2.jpg"
                    className="w-full h-[227px] rounded-[6px] hover:scale-150 duration-500"
                    alt=" "
                  />
                  <div className="absolute top-[54%] left-[5%] bg-[#ffb924] p-1 text-[16px] font-normal text-[#fff] rounded">
                    '2022-yil 20-yanvar'
                  </div>
                </div>
                <div className="p-[20px_25px_17px] border-[2px] border-[#E6E6E6]">
                  <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-2">
                      <BiUser className=" w-[14px] h-[18px] text-[#00BBAE]" />{" "}
                      Nilufar
                    </div>
                    <div className="flex items-center gap-2 ">
                      <BiCommentDetail className="text-[#00BBAE]" /> '0' Izohlar
                    </div>
                  </div>
                  <Link
                    to={"/News"}
                    className="p-1 hover:text-[#ffb924] duration-200 text-[23px] text-[#1b1b1b] font-medium"
                  >
                    Farzandingizni yaxshiroq tushunish uchun maslahatlar
                    -Ota-onalar uchun qo'llanma!
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[416px] mb-[20px] border-[2px] rounded-lg border-[#E6E6E6] hover:shadow-xl duration-300  scs-ali ">
                <div className="overflow-hidden ">
                  <img
                    src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/4.jpg"
                    className="w-full h-[227px] rounded-[6px] hover:scale-150 duration-500"
                    alt=" "
                  />
                  <div className="absolute top-[50%] left-[5%] bg-[#ffb924] p-1 text-[16px] font-normal text-[#fff] rounded">
                    '2022-yil 20-noyabr'
                  </div>
                </div>
                <div className="p-[20px_25px_17px] border-[2px] border-[#E6E6E6]">
                  <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-2">
                      <BiUser className=" w-[14px] h-[18px] text-[#00BBAE]" />{" "}
                      Rayhona
                    </div>
                    <div className="flex items-center gap-2 ">
                      <BiCommentDetail className="text-[#00BBAE]" /> '0' Izohlar
                    </div>
                  </div>
                  <Link
                    to={"/News"}
                    className="p-1 hover:text-[#ffb924] duration-200 text-[23px] text-[#1b1b1b] font-medium"
                  >
                    Nima uchun maktabgacha yoshdagi bolalar uchun o'yinchoqlar
                    muhim - kichik tayyor sozlash; o'rnatish;
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[416px] mb-[20px] border-[2px] rounded-lg border-[#E6E6E6] hover:shadow-xl duration-300  scs-ali ">
                <div className="overflow-hidden ">
                  <img
                    src="https://codeskdhaka.com/html/kindedo-prev/kindedo/assets/img/blog/3.jpg"
                    className="w-full h-[227px] rounded-[6px] hover:scale-150 duration-500"
                    alt=" "
                  />
                  <div className="absolute top-[54%] left-[5%] bg-[#ffb924] p-1 text-[16px] font-normal text-[#fff] rounded">
                    '2022-yil 18-dekabr'
                  </div>
                </div>
                <div className="p-[20px_25px_17px] border-[2px] border-[#E6E6E6]">
                  <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-2">
                      <BiUser className=" w-[14px] h-[18px] text-[#00BBAE]" />{" "}
                      Nargiza
                    </div>
                    <div className="flex items-center gap-2 ">
                      <BiCommentDetail className="text-[#00BBAE]" /> '0' Izohlar
                    </div>
                  </div>
                  <Link
                    to={"/News"}
                    className="p-1 hover:text-[#ffb924] duration-200 text-[23px] text-[#1b1b1b] font-medium"
                  >
                    AQShdagi maktabgacha yoshdagi bolalar uchun qaysi
                    o'yinchoqlar eng yaxshisidir: tezkor qo'llanma!
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
