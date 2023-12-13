// BookingCard.js
import React from "react";

const BookingCard = ({ booking }) => {
  const { tanggal, jam } = booking;
  return (
    <div className="p-4 bg-blue-100 shadow-md rounded-md">
      <h2 className="text-lg text-gray-600 text-headingColor mb-2">
        Tanggal : {tanggal}
      </h2>
      <p className="text-lg text-gray-600">Jam : {jam}</p>
    </div>
  );
};

export default BookingCard;
