import React from "react";
import Card from "@/Components/Card";
import Heading from "@/Components/Heading";
import ProgressBar from "@/Components/ProgressBar";
import Button from "@/Components/Button";
import { Link } from "react-router-dom";

import { MahasiswaList } from "@/Data/Dummy";

const Dashboard = () => {
  return (
    <Card>
      <div className="flex justify-between items-center p-4">
        <Heading as="h2" className="mb-0 text-left">
          Dashboard
        </Heading>
      </div>

      <table className="w-full text-sm text-gray-700">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">NIM</th>
            <th className="py-2 px-4 text-left">Nama</th>
            <th className="py-2 px-4 text-left">Progress</th>
          </tr>
        </thead>
        <tbody>
          {MahasiswaList.map((mhs, index) => (
            <tr
              key={mhs.nim}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="py-2 px-4">{mhs.nim}</td>
              <td className="py-2 px-4">{mhs.nama}</td>
              <td className="py-2 px-4">
                <ProgressBar value={mhs.progress} />
                <p className="text-xs mt-1">
                  {mhs.progress}% dari materi dibaca
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end ">
        <Link to="/admin/kelas">
          <Button variant="primary">Lanjutkan Belajar</Button>
        </Link>
      </div>
    </Card>
  );
};

export default Dashboard;
