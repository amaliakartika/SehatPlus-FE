import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DokterCard = ({ id, nama, img }) => {

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={img} className="object-contain w-full h-48" alt="doc-img" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {nama}
      </h2>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <Link
          to={`/pilih-jadwal-dokter/${id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DokterCard;