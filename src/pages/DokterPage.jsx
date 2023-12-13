import React from 'react';
import BookingList from '../components/BookingList';

function DokterPage() {
  return (
    <div className='container mx-auto mt-20 p-8 text-center'>
        <h1 className='font-bold text-3xl'>Daftar Booking</h1>
        <BookingList />
    </div>
  )
}

export default DokterPage