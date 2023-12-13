import React from "react";
import SpesialisasiList from "../components/SpesialisasiList";

function Spesialisasi() {
  return (
    <div className="container mx-auto mt-20 p-8 text-center">
      <h1 className="font-bold text-3xl">Pilih Spesialisasi Dokter</h1>
      <SpesialisasiList />
    </div>
  );
}

export default Spesialisasi;
