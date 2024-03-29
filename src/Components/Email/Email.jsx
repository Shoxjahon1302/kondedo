import React from "react";
import { FaTelegram } from "react-icons/fa";
import "./email.css";
export default function Email() {
  return (
    <div className="container max-w-[1440px] m-auto p-[10px_10px_3px_10px]">
      <div className="relative top-[200px] z-10  xl:top-0 ">
        <div className="w-[1296px] h-[415px]  md:h-[430px] sm:h-[500px] rounded-3xl  xl:w-auto bg-[#15BFB4] p-1 m-auto text-white">
          <div className="container">
            <h1 className="text-[55px] font-semibold text-center mt-[60px] xl:text-[60px] lg:text-[50px]  md:text-[45px] md:mb-[45px] sm:text-[40px]">
              Bizning xabarnomamizga qo'shiling
            </h1>
            <p className="text-[18px] font-normal text-center mt-[30px] mb-[40px]">
              Bizning eng so'nggi yangiliklarimiz va yangiliklarimizni olish{" "}
              <br />
              uchun axborot bizga obuna bo'ling.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-[667px] h-[74px] md:h-[100] md:bg-[#15BFB4]  md:b-[20px] rounded-full p-5 flex items-center   bg-white md:flex-col ">
              <input
                type="email"
                className="outline-none rounded-full  text-black w-full h-[70px] p-5 md:mb-[20px]"
                placeholder="sizning @gmailingiz"
              />
              <button className="w-[247px] rounded-full h-[60px] p-5 bg-[#ff9b24] hover:bg-[#ff9b24] hover:text-white z-50 flex items-center justify-center text-[white] gap-2 text-[16px] md:w-full   ">
                <FaTelegram className="text-[18px]" /> Obuna Bo'lish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
