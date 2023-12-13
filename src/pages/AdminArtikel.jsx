import React, { useState, useEffect } from "react";
import { Checkbox, Table } from "flowbite-react";

function AdminArtikel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://6480432af061e6ec4d48ebcc.mockapi.io/article-home");
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
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Created Date</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item, index) => (
            <Table.Row
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white dark:border-gray-700 dark:bg-gray-800"}
            >
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell className="p-4 font-medium text-gray-900 dark:text-white">
                {item.title}
              </Table.Cell>
              <Table.Cell>{item.author}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default AdminArtikel;
