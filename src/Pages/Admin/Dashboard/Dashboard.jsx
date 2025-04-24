import React, { useEffect, useState } from "react";
import Card from "@/Components/Card";
import Heading from "@/Components/Heading";
import ProgressBars from "@/Components/ProgressBar";
import Button from "@/Components/Button";
import { useNavigate } from "react-router-dom";

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
    </Card>
  );
};

export default Dashboard;
