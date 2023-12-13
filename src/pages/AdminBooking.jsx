import React, { useState, useEffect } from "react";
import { Checkbox, Table } from "flowbite-react";

function AdminBooking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://65734dfd192318b7db41e6a4.mockapi.io/booking");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto p-[2rem]">
      <Table hoverable>
        <Table.Head className="text-left">
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Nama Pasien</Table.HeadCell>
          <Table.HeadCell>Nama Dokter</Table.HeadCell>
          <Table.HeadCell>Tanggal</Table.HeadCell>
          <Table.HeadCell>Jam</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item, index) => (
            <Table.Row
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white px-4 dark:border-gray-700 dark:bg-gray-800"}
            >
              <Table.Cell className="py-4">{item.id}</Table.Cell>
              <Table.Cell className="font-medium text-gray-900 dark:text-white">
                {item.nama}
              </Table.Cell>
              <Table.Cell>{item.dokter}</Table.Cell>
              <Table.Cell>{item.tanggal}</Table.Cell>
              <Table.Cell>{item.jam}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default AdminBooking;
