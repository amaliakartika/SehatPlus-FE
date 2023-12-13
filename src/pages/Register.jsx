import React, { useState } from "react";
import loginImage from "../assets/Login-image.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nama, setNama] = useState("")
  const [noTelepon, setNoTelepon] = useState("");
  const [gender, setGender] = useState("");

  const isEmailValid = (email) => {
    // Ekspresi reguler untuk memeriksa format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegisterClick = async () => {
    // Validasi input
    if (!email || !password || !confirmPassword) {
      setError("Semua field harus diisi");
      return;
    }

    // Validasi format email
    if (!isEmailValid(email)) {
      setError("Format email tidak valid");
      return;
    }

    // Validasi panjang password
    if (password.length < 6) {
      setError("Password harus lebih dari 6 karakter");
      return;
    }

    // Validasi password dan konfirmasi password
    if (password !== confirmPassword) {
      setError("Password dan Confirm Password harus sama");
      return;
    }

    try {
      // Cek apakah email sudah terdaftar
      const checkEmailResponse = await axios.get(
        `https://65632a51ee04015769a6dd6e.mockapi.io/user/users?email=${email}`
      );

      if (checkEmailResponse.data.length > 0) {
        setError("Email sudah terdaftar. Gunakan email lain atau coba Login.");
        return;
      }

      // Kirim data registrasi ke API
      const registerResponse = await axios.post(
        "https://65632a51ee04015769a6dd6e.mockapi.io/user/users",
        { email, password, nama, alamat, noTelepon, gender, role: "pasien" } // Sesuaikan dengan kebutuhan
      );

      // Handle respons dari API sesuai kebutuhan
      console.log("Sign Up berhasil:", registerResponse.data);

      // Tambahkan logika navigasi atau tampilkan pesan sukses
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Gagal melakukan registrasi. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex">
      <div className="login h-screen w-[100vw] lg:w-[50vw] flex flex-col justify-center">
        <div className="text-center text-violet-950 text-[30px] lg:text-[40px] xl:text-[62px] font-extrabold mb-4">
          Sign Up
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 items-center">
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => {
              setNama(e.target.value);
              setError("");
            }}
          />
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
          />
          {/* New input fields */}
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="text"
            placeholder="Alamat"
            value={alamat}
            onChange={(e) => {
              setAlamat(e.target.value);
              setError("");
            }}
          />
          <input
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
            type="tel"
            placeholder="No Telepon"
            value={noTelepon}
            onChange={(e) => {
              setNoTelepon(e.target.value);
              setError("");
            }}
          />
          <div className="flex items-center gap-2">
            <select
              className="w-[260px] h-[40px] lg:w-[408px] lg:h-[40px] rounded-[5px] border-[1px] border-stone-300 px-4 text-[12px] lg:text-[16px] xl:text-base"
              value={gender}
              placeholder="Jenis Kelamin"
              onChange={(e) => {
                setGender(e.target.value);
                setError("");
              }}
            >
              <option value="male">Laki-Laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          <button
            className="w-[260px] h-[40px] lg:w-[408px] lg:h-[66px] bg-violet-950 rounded-[5px] text-[12px] lg:text-[16px] xl:text-base text-white"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
          {error && (
            <p className="text-red-500 text-[12px] lg:text-[16px]">{error}</p>
          )}
          <p className="text-[12px] lg:text-base font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-950 text-[12px] lg:text-[16px] xl:text-base font-normal underline leading-tight"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="gambar flex items-center justify-center w-[50vw] h-screen bg-cyan-300 hidden lg:flex mx-auto">
        <img
          className="lg:w-[40vw] xl:w-[40vw] flex items-center justify-center bg-cyan-300 hidden lg:flex mx-auto"
          src={loginImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Register;
