import React from 'react'
import DoctorList from '../components/DokterList'

function DaftarDokter() {
  return (
    <div className='container mx-auto mt-20 p-8 text-center'>
        <h1 className='font-bold text-3xl'>Pilih Dokter</h1>
        <DoctorList />
    </div>
  )
}

export default DaftarDokter