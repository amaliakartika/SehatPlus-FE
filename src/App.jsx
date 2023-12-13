import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./App.css";

// IMPORT CONTEXT
import { AuthContext } from "./context/AuthContext";

// IMPORT COMPONENT
import Layout from "./components/Layout";
import LayoutAdmin from "./components/LayoutAdmin";
import LayoutDokter from "./components/LayoutDokter";


// IMPORT PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccesfully from "./pages/ResetSuccesfully";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import Article from "./pages/ArticleLanding";
import BMI from "./pages/KalkulatorBMI";
import PilihJadwalDokter from "./pages/PilihJadwalDokter";
import KonfirmasiJanjiTemu from "./pages/KonfirmasiJanjiTemu";
import BookingSuccessfully from "./pages/BookingSuccesfull";
import Spesialisasi from "./pages/Spesialisasi";
import DaftarDokter from "./pages/DaftarDokter";
import ArticleContent from "./pages/ArticleContent";
import DokterPage from "./pages/DokterPage";
import Admin from "./pages/Admin";
import AdminDokter from "./pages/AdminDokter";
import AdminPasien from "./pages/AdminPasien";
import AdminBooking from "./pages/AdminBooking";
import AdminArtikel from "./pages/AdminArtikel";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/artikel" element={<Article />} />
        <Route path="/kalkulator-bmi" element={<BMI />} />
        <Route path="/artikel/:id" element={<ArticleContent />} />

        <Route
          path="/spesialisasi"
          element={
            isAuthenticated == false ? (
              <Navigate to="/login" />
            ) : (
              <Spesialisasi />
            )
          }
        />

        <Route
          path="/konfirmasi-janji-temu"
          element={<KonfirmasiJanjiTemu />}
        />
        <Route path="/booking-succesfull" element={<BookingSuccessfully />} />
        <Route
          path="/pilih-jadwal-dokter/:id"
          element={<PilihJadwalDokter />}
        />
        <Route path="/spesialisasi/:spesialisasi" element={<DaftarDokter />} />
      </Route>

      <Route
        path="/admin-dashboard/*"
        element={<LayoutAdmin />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<Admin />} />
        <Route path="data-dokter" element={<AdminDokter />} />
        <Route path="data-pasien" element={<AdminPasien />} />
        <Route path="data-booking" element={<AdminBooking />} />
        <Route path="data-artikel" element={<AdminArtikel />} />
      </Route>

      <Route
        path="/dokter-dashboard/*"
        element={<LayoutDokter />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<DokterPage />} />
      </Route>

      {/* HANDLE ROUTE LOGIN & REGISTER */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="reset-succesfully" element={<ResetSuccesfully />} />
    </Routes>
  );
}

export default App;
