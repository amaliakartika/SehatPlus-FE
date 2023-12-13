// BookingList.js
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Checkbox, Table } from "flowbite-react";

const BookingList = () => {
    const [bookingData, setBookingData] = useState([]);
  
    useEffect(() => {
      const fetchBookingData = async () => {
        try {
          const response = await axios.get(
            `https://65734dfd192318b7db41e6a4.mockapi.io/booking/`
          );
          setBookingData(response.data);
        } catch (error) {
          console.error("Error fetching booking data:", error);
        }
      };
  
      fetchBookingData();
    }, []);
  
    // Ambil ID dokter dari local storage
    const doctorName = localStorage.getItem("userName");

  
    // Filter data booking berdasarkan ID dokter
    const filteredBookingData = bookingData.filter(item => item.dokter === doctorName);

  return (
    <div className="overflow-x-auto p-[2rem]">
      <Table hoverable>
        <Table.Head className="text-center">
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Nama Pasien</Table.HeadCell>
          <Table.HeadCell>Tanggal</Table.HeadCell>
          <Table.HeadCell>Jam</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-center">
          {filteredBookingData.map((item, index) => (
            <Table.Row
              key={item.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white px-4 dark:border-gray-700 dark:bg-gray-800"}
            >
              <Table.Cell className="py-4">{item.id}</Table.Cell>
              <Table.Cell className="font-medium text-gray-900 dark:text-white">
                {item.nama}
              </Table.Cell>
              <Table.Cell>{item.tanggal}</Table.Cell>
              <Table.Cell>{item.jam}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default BookingList;
