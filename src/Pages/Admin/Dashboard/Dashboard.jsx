import React, { useEffect, useState } from "react";
import Card from "@/Components/Card";
import Heading from "@/Components/Heading";
import ProgressBars from "@/Components/ProgressBar";
import Button from "@/Components/Button";
import { useNavigate } from "react-router-dom";
import { LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { learningProgress, categoryTime, areaData, radarData, moduleStatus } from "@/utils/dummyData";

const Dashboard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  const Navigate = useNavigate();
  return (
    <Card>
      <div className="flex justify-between items-center p-4">
        <Heading as="h2" className="mb-0 text-left">
          Dashboard
        </Heading>
      </div>
      <div className="p-4">
        <h1 className="text-2x1 font-semibold mb-4">halo,{user.name}</h1>
        <p className="mt-4">Progress Belajar: {user.progress || 0}%</p>
        <ProgressBars value={user.progress || 0} />
      </div>

      <Button onClick={() => Navigate("/admin/kelas")}>Lanjutan Belajar</Button>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Analitik Belajar</h2>

        <h3 className="font-semibold mb2">Progress Mingguan</h3>
        <LineChart width={500} height={250} data={learningProgress}>
          <XAxis dataKey="week" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="progress" stroke="#8884d8" />
        </LineChart>

        <h3 className="font-semibold mb2">Waktu belajar per kategori</h3>
        <BarChart width={500} height={250} data={categoryTime}>
          <XAxis dataKey="category" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="time" fill="#82ca9d" />
        </BarChart>

        <h3 className="font-semibold mb2">Distribusi Status Modul</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={moduleStatus}
            dataKey="value"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {moduleStatus && moduleStatus.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <h3 className="font-semibold mb2">Waktu Belajar Harian</h3>
        <AreaChart width={500} height={250} data={areaData}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Area type="monotone" dataKey="hours" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>

        <h3 className="font-semibold mb2">Kemampuan per kategori</h3>
        <RadarChart outerRadius={90} width={500} height={250} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Kemampuan" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Tooltip />
          <Legend />
        </RadarChart>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Aksi Cepat</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Lanjutkan Modul terakhir: <Button size="sm">React Dasar</Button></li>
          <li>Rekomendasi Modul: <span className="text-blue-600">Redux Intro</span></li>
          <li>Target belajar hari ini: <span className="text-green-600">30 Menit</span></li>
          <li>Akses Cepat: <Button size="sm">Bookmark</Button></li>
          <li>Quiz Hari Ini:{" "}<Button size="sm" onClick={() => Navigate("/admin/quiz")}>Mulai Quiz</Button></li>
          <li>Forum: <Button size="sm" onClick={() => Navigate("/admin/forum")}>Buka Forum</Button></li>
          <li>Pencapaian: <Button size="sm" onClick={() => Navigate("/admin/pencapaian")}>Lihat Pencapaian</Button></li>
          <li>Instruktur: <Button size="sm" onClick={() => Navigate("/admin/instruktur")}>Lihat Instruktur</Button></li>
        </ul>
      </div>
    </Card>
  );
};

export default Dashboard;
