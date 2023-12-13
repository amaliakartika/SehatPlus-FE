import axios from "axios";
import DokterCard from "./DokterCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorList = () => {
  const { spesialisasi } = useParams();
  const [dokterData, setDokterData] = useState([]);

  useEffect(() => {
    const fetchDokterData = async () => {
      try {
        const response = await axios.get(
          `https://65734dfd192318b7db41e6a4.mockapi.io/dokter/`
        );
        setDokterData(response.data);
      } catch (error) {
        console.error("Error fetching dokter data:", error);
      }
    };

    fetchDokterData();
  }, []);
  
  function toCamelCase(inputString) {
    return inputString.replace(/\b\w/g, match => match.toUpperCase());
  }

  // Filter dokter sesuai spesialisasi
  const filteredDokterData = dokterData.filter(
    (dokterItem) => dokterItem.spesialisasi === toCamelCase(spesialisasi)
  );
  console.log(filteredDokterData);
  console.log(toCamelCase(spesialisasi));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {filteredDokterData.map((dokterItem) => (
        <DokterCard
          key={dokterItem.id}
          nama={dokterItem.nama}
          spesialisasi={dokterItem.spesialisasi}
          img={dokterItem.img}
          id={dokterItem.id}
        />
      ))}
    </div>
  );
};

export default DoctorList;
