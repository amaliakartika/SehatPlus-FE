import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";

const KonfirmasiJanjiTemu = () => {
  const navigate = useNavigate();
  // State untuk menyimpan data dari local storage
  const [selectedData, setSelectedData] = useState({
    tanggal: "",
    jam: "",
    namaDokter: "",
    nama: "",
  });

  useEffect(() => {
    // Ambil data dari local storage
    const storedData = localStorage.getItem("selectedData");

    // Parse data dari string JSON ke objek
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Set state dengan data dari local storage
      setSelectedData({
        tanggal: format(new Date(parsedData.tanggal), "dd-MM-yyyy"),
        jam: parsedData.jadwal,
        namaDokter: parsedData.dokter.nama,
        nama: parsedData.nama,
      });
    }
  }, []);

  const handleConfirmation = async () => {
    try {
      // Kirim data ke API
      const response = await axios.post(
        "https://65734dfd192318b7db41e6a4.mockapi.io/booking",
        {
          dokter: selectedData.namaDokter,
          tanggal: selectedData.tanggal,
          jam: selectedData.jam,
          nama: selectedData.nama,
          // ... tambahkan data lain yang perlu disimpan
        }
      );

      // Tampilkan respons API di konsol
      console.log(response.data);

      // Jika berhasil, Anda dapat membersihkan local storage atau melakukan aksi lain
      localStorage.removeItem("selectedData");
    } catch (error) {
      console.error("Error confirming appointment:", error);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] gap-4 mt-8">
      <div className="flex flex-col items-center justify-center sm:gap-2 xl:gap-4">
        <h1 className="text-center text-slate-500 text-md lg:text-2xl xl:text-3xl font-bold">
          Konfirmasi Jadwal Booking
        </h1>
        <p className="h-[54px] text-center text-gray-500 text-sm lg:text-lg md:text-md xl:text-xl font-normal leading-[30px]">
          Pastikan jadwal yang dipilih sesuai dengan pilihan Anda
        </p>
      </div>
      <div
        className="flex flex-col justify-center  w-[70vw] h-[75vh] md:w-[60vw] md:h-[65vh] lg:w-[50vw] lg:h-[90vh] xl:w-[
        40vw] xl:h-[90vh] bg-blue-100 rounded-xl px-5"
      >
        <div className="text-gray-700 text-sm md:text-md lg:text-xl xl:text-2xl font-bold">
          Jadwal Anda :
        </div>
        <div className="text-zinc-700 text-sm md:text-[14px] lg:text-lg xl:text-xl font-normal mb-8">
          <label
            name="nama"
            className="flex items-center space-x-2 text-sm md:text-md lg:text-lg mb-1"
          >
            Nama Pasien
          </label>
          <input
            className="mb-2 w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            type="text"
            value={selectedData.nama}
            disabled
          />
          <label
            name="tanggal"
            className="flex items-center space-x-2 text-sm md:text-md lg:text-lg mb-1"
          >
            Tanggal
          </label>
          <input
            className="mb-2 w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200     px-4 text-[12px] lg:text-[16px] xl:text-lg"
            type="text"
            value={selectedData.tanggal}
            disabled
          />
          <label
            name="tanggal"
            className="flex items-center space-x-2 text-sm md:text-md lg:text-lg mb-1"
          >
            Jam
          </label>
          <input
            className="mb-2 w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            type="text"
            value={selectedData.jam}
            disabled
          />
          <label
            name="tanggal"
            className="flex items-center space-x-2 text-sm md:text-md lg:text-lg mb-1"
          >
            Nama Dokter
          </label>
          <input
            className="mb-2 w-full h-[40px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-600 bg-stone-200 px-4 text-[12px] lg:text-[16px] xl:text-lg"
            type="text"
            value={selectedData.namaDokter}
            disabled
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2">
          <button
            onClick={handleConfirmation}
            className="w-full py-3 md:w-full lg:w-full xl:w-full bg-violet-950 rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white"
          >
            <Link to="/booking-succesfull">Konfirmasi</Link>
          </button>
          <button
            onClick={handleCancel}
            className="w-full py-3 md:w-full lg:w-full xl:w-full border-violet-950 text-violet-950 border-[1px] rounded-[5px] text-[12px] lg:text-[16px] xl:text-base hover:bg-red-500 hover:text-white transition duration-500 hover:border-white"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default KonfirmasiJanjiTemu;
