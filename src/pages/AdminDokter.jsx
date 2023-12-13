import React, { useState, useEffect } from "react";
import { Checkbox, Table } from "flowbite-react";

function AdminDokter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://65734dfd192318b7db41e6a4.mockapi.io/dokter");
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
          <Table.HeadCell className="p-4">Id</Table.HeadCell>
          <Table.HeadCell>Nama</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Alamat</Table.HeadCell>
          <Table.HeadCell>No Telepon</Table.HeadCell>
          <Table.HeadCell>Spesialisasi</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item, index) => (
            <Table.Row
              key={item.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white dark:border-gray-700 dark:bg-gray-800"}
            >
              <Table.Cell className="p-4">{item.id}</Table.Cell>
              <Table.Cell className="font-medium text-gray-900 dark:text-white">
                {item.nama}
              </Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.alamat}</Table.Cell>
              <Table.Cell>{item.noTelepon}</Table.Cell>
              <Table.Cell>{item.spesialisasi}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Delete
                  </a>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default AdminDokter;
