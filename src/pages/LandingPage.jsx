import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import hero from "../assets/hero.png";
import kenalan from "../assets/kenalan.png";

import consult from "../assets/layanan/konsultasi-online.png";
import doctor from "../assets/layanan/doctor.png";
import artikel from "../assets/layanan/artikel.png";
import Article from "../components/Article";

import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  // STATE BUAT CARD ARTICLE
  const [articles, setArticles] = useState([]);

  // BUAT EFEK ANIMASI MENGGUNAKAN AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // AMBIL 3 DATA API ARTIKEL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6480432af061e6ec4d48ebcc.mockapi.io/article-home?page=1&limit=3"
        );
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="home">
      {/* Hero Section */}
      <div className="w-full  mx-auto mt-14 p-8 flex items-center bg-[#D8EEFE] h-[400px]">
        <div className="flex-1" data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di SehatPlus!
          </h1>
          <p className="text-lg text-gray-700">
            Pantau, Kelola dan Tingkatkan Kesehatan Anda
          </p>
          <Link to={"/spesialisasi"}>
            <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Booking Konsultasi
            </button>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src={hero}
            className="h-[400px] mt-0 hidden sm:block"
            alt="Doctor"
          />
        </div>
      </div>
      {/* END OF HERO SECTION */}

      {/* Pelayanan Kami */}
      <div className="container mx-auto mt-16 p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Layanan Kami</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Kotak Pelayanan 1 */}
          <div
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="border-2 rounded-lg border-[#080C71] bg-[#f6f9ff] overflow-hidden flex items-center justify-center flex-col text-center">
              <img
                src={consult}
                alt="Konsultasi Online"
                className="w-24 h-auto mb-4 mt-10 object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Booking Konsultasi Online</h3>
                <p className="text-gray-700">
                  Kami menyediakan layanan booking konsultasi online.
                </p>
              </div>
            </div>
          </div>

          {/* Kotak Pelayanan 2 */}
          <div
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="border-2 rounded-lg border-[#080C71] bg-[#f6f9ff] overflow-hidden flex items-center justify-center flex-col text-center">
              <img
                src={doctor}
                alt="Konsultasi Online"
                className="w-24 h-auto mb-4 mt-10 object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dokter Yang Ahli</h3>
                <p className="text-gray-700">
                  Kami memiliki tim dokter yang ahli dan berkualitas.
                </p>
              </div>
            </div>
          </div>

          {/* Kotak Pelayanan 3 */}
          <div
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 sm:ml-auto sm:mr-auto"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="border-2 rounded-lg border-[#080C71] bg-[#f6f9ff] overflow-hidden flex items-center justify-center flex-col text-center">
              <img
                src={artikel}
                alt="Konsultasi Online"
                className="w-24 h-auto mb-4 mt-10 object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Artikel Menarik</h3>
                <p className="text-gray-700">
                  Kami menyediakan artikel menarik seputar kesehatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END OF PELAYANAN KAMI */}

      {/* Section KENALAN */}
      <div
        className="container mx-auto flex flex-col rounded-lg max-w-screen-xl sm:flex-row items-center justify-between bg-[#D8EEFE] dark:bg-gray-900 py-14 mb-16"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="mb-8 sm:mb-0 sm:mr-12 w-full sm:w-1/2 lg:w-1/3">
          <img
            src={kenalan}
            alt="Kenalan sama kita"
            className="w-full h-auto"
          />
        </div>
        <div className="sm:w-1/2 lg:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-[#296fde]">
            Kenalan sama kita yuk!
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            <span className="font-bold">Dear Sobat Sehat,</span> SehatPlus
            adalah penyedia layanan kesehatan online yang menawarkan solusi
            kesehatan di Indonesia. Dengan tim dokter berlisensi, SehatPlus
            bertujuan untuk menyediakan layanan konsultasi medis komprehensif
            bagi pasien.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            Kami hadir dengan layanan yang mencakup booking konsultasi dokter secara online, serta informasi kesehatan terkini yang mendukung anda menuju perjalanan hidup
            sehat yang lebih baik.
          </p>
        </div>
      </div>
      {/* END OF Section KENALAN */}

      {/* Section Artikel Kesehatan Terpopuler */}
      <div className="container mx-auto mt-16 p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Artikel Kesehatan Terpopuler
        </h2>
        <p className="text-gray-700 mb-8">
          Terdapat beberapa artikel terpopuler yang dapat kamu akses sesuai
          dengan kebutuhanmu nih Sobat SehatPlus!
        </p>

        {/* Featured Articles */}
        <div className="flex flex-wrap -mx-4">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>

        {/* Lihat Artikel Lainnya Button */}
        <div className="mt-8">
          <Link
            to="/artikel"
            className="inline-block px-4 py-2 bg-blue-700 text-white font-medium rounded-md transition duration-300 hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
          >
            Artikel Lainnya
          </Link>
        </div>
      </div>
      {/* END OF Artikel Kesehatan Terpopuler */}
    </div>
  );
};

export default LandingPage;
