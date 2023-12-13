import React from "react";
import { Link } from "react-router-dom";

const SpesialisasiCard = ({ spesialisasi, img }) => {

  return (
    <Link to={`/spesialisasi/${spesialisasi.toLowerCase()}`}>
      <div className="max-w-md w-[80vw] md:w-[25vw] lg:w-[18vw] mx-auto bg-blue-100 rounded-xl overflow-hidden shadow-md mb-10">
        <img className="object-cover w-full h-48" src={img} alt={spesialisasi} />
        <div className="p-6">
          <p className="text-gray-700 font-bold text-base">{spesialisasi}</p>
        </div>
      </div>
    </Link>
  );
};

export default SpesialisasiCard;
