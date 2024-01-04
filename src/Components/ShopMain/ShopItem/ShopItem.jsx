import React, { useState } from "react";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiFillEye,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./shopitem.css";
import { shop } from "../../../data";
import { Link } from "react-router-dom";
const paginationBox =
  "w-12 h-12 bg-[#e6e6e6] flex items-center text-[#1b1b1b] hover:text-[#fff] justify-center hover:bg-[#00bbae] rounded-[14px] duration-500";
const secpagination = "w-fit p-1 hover:bg-[#e6e6e6]  h-[40px]";
export default function ShopItem() {
  const [text, setText] = useState(false);
  const [textOpen, setTextOpen] = useState(false);
  const rateMap = (rateNumber) => {
    const stars = [];
    for (let index = 1; index <= rateNumber; index++) {
      stars.push(<AiFillStar key={index} />);
    }
    return stars;
  };
  return (
    <>
      <div className="relative">
        <div className="container max-w-[1440px] m-auto">
          <div className="navOfMain flex justify-between items-center p-4 flex-wrap">
            <h3 className="text-[#424242] text-[18px] mb-[15px] font-semibold">
              {shop.length} ITEM ON LIST
            </h3>
            <div className="flex gap-4 relative  items-center">
              <div
                onClick={() => setText(!text)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <AiOutlineUnorderedList />
                <span className="hover:text-[#15BFB4] duration-300">
                  FILTER
                </span>
              </div>
              {text && (
                <div className="absolute top-[90%] bg-white text-black z-[20] flex flex-col w-[170px] items-center jc  p-3 rounded-md">
                  <ul>
                    <li className="w-full  hover:bg-[#f8f8f8] text-center mt-2 p-1.5 rounded">
                      <a href="#! ">Featured</a>
                    </li>
                    <li className="w-full  hover:bg-[#f8f8f8] text-center mt-2 p-1.5 rounded">
                      <a href="#!">Price:Low to high</a>
                    </li>
                    <li className="w-full  hover:bg-[#f8f8f8] text-center mt-2 p-1.5 rounded">
                      <a href="#!">Price:high to low</a>
                    </li>
                    <li className="w-full  hover:bg-[#f8f8f8] text-center mt-2 p-1.5 rounded">
                      <a href="#!">New</a>
                    </li>
                    <li className="w-full  hover:bg-[#f8f8f8] text-center mt-2 p-1.5 rounded">
                      <a href="#!">Avg. Rating</a>
                    </li>
                  </ul>
                </div>
              )}
              <div className="">{`|`}</div>
              <div
                className="flex items-center gap-3 cursor-pointer p-3 "
                onClick={() => setTextOpen(!textOpen)}
              >
                <span className="hover:text-[#15BFB4] duration-300">
                  SHOP BY AGE
                </span>
                <IoIosArrowDown />
              </div>
              {textOpen && (
                <ul className="w-[140px] right-0  top-[50px] z-30 absolute p-[5px_2px_7px_4px] bg-white shadow-lg">
                  <li className="w-full  hover:bg-[#f8f8f8] text-center">
                    <a href="#!">0-3 Years</a>
                  </li>
                  <li className="w-full  hover:bg-[#f8f8f8] text-center">
                    <a href="#!">4-6 Years</a>
                  </li>
                  <li className="w-full  hover:bg-[#f8f8f8] text-center">
                    <a href="#!">6-9 Years</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-[20px] p-[20px]">
            {shop.map((item) => (
              <div className="card-main sm:w-full w-[440px] xl:w-[380px] border-[0.2px] rounded-[30px] h-[601px] bg-white sm:h-auto m-auto border-[gray] relative duration-500 ease-out mb-[20px] lg:h-[540px]">
                <div className="card-main-head ">
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination, Navigation]}
                    loop={true}
                    className="mySwiper"
                  >
                    {item?.img?.map((child) => (
                      <SwiperSlide className="card-main-img-slider">
                        <img src={child} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <span className="absolute p-[12px_20px] flex justify-center items-center top-[5%] left-[5%] h-[34px] z-[10] bg-[#00bbae] rounded-full text-white text-[18px] font-medium">
                    {item.sell ? "Sale" : "Sold Out"}
                  </span>
                  <div className="flex flex-col gap-3 text-[35px] absolute top-[4%] right-[5%] ">
                    <AiFillHeart className="bg-[#ffb924] text-white p-2 hover:bg-[#00bbae] rounded-full z-10 cursor-pointer icon-of-main" />
                    <AiOutlineShoppingCart className="bg-[#ffb924] text-white p-1 rounded-full hover:bg-[#00bbae] z-10 cursor-pointer icon-of-main" />
                    <AiFillEye className="bg-[#ffb924] hover:bg-[#00bbae]  text-white p-1 rounded-full z-10 cursor-pointer duration-500 icon-of-main" />
                  </div>
                </div>
                <div className="card-main-body p-6 border-t border-[gray] ">
                  <Link
                    to={`/:${item.id}`}
                    className="text-[23px] text-center mb-[20px] text-[#1b1b1b] font-semibold"
                  >
                    {item.title}
                  </Link>
                  <div className="flex gap-1 text-[19px] mb-3 justify-center text-[#ffb924]">
                    {rateMap(item.rate)}
                  </div>
                  <h6 className="text-center text-[#424242] text-[18px] font-semibold">
                    ${item.price}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <div className={paginationBox}>{"<"}</div>
            <div className="w-12 h-12 text-[#fff]  bg-[#00bbae] flex items-center justify-center rounded-[14px] xl:mb-[50px]">
              01
            </div>
            <div className={paginationBox}>02</div>
            <div className={paginationBox}>03</div>
            <div className={paginationBox}>04</div>
            <div className={paginationBox}>{">"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
