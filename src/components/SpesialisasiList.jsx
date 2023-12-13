import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpesialisasiCard from './SpesialisasiCard';

const SpesialisasiList = () => {
  const [spesialisasiData, setSpesialisasiData] = useState([]);

  useEffect(() => {
    const fetchSpesialisasiData = async () => {
      try {
        const response = await axios.get(
          `https://65632a51ee04015769a6dd6e.mockapi.io/user/spesialisasi`
        );
       // Tampilkan respons API di konsol
        setSpesialisasiData(response.data);
      } catch (error) {
        console.error("Error fetching spesialisasi data:", error);
      }
    };

    fetchSpesialisasiData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[2px] mt-[30px] lg:mt-[55px]">
    {spesialisasiData.map((spesialisasiItem) => (
      <SpesialisasiCard
        key={spesialisasiItem.id}
        spesialisasi={spesialisasiItem.spesialisasi}
        img={spesialisasiItem.img}
      />
    ))}
  </div>
  );
};

export default SpesialisasiList;