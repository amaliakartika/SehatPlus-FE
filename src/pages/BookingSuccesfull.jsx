import React from "react";
import succesfullyImage from "../assets/Succesfully-image.svg";
import { Link, useNavigate } from "react-router-dom";

function BookingSuccesfull() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="login lg:bg-white lg:h-[80vh] lg:w-[50vw] xl:h-[85vh] xl:w-[40vw] flex flex-col justify-center">
        <div className="text-center text-violet-950 mb-6 flex flex-col items-center justify-center gap-4 xl:gap-8">
          <img className="w-[40vw] md:w-[20vw] lg:w-[20vw] xl:w-[15vw]" src={succesfullyImage} alt="" />
          <p className="text-[12px] lg:text-[18px] font-normal">
            Booking Dokter berhasil dibuat
          </p>
          <Link to={"/"}>
            <button className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] bg-violet-950 rounded-[5px] text-white text-[12px] lg:text-base">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccesfull;
