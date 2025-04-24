// src/Pages/Admin/Kelas/Kelas.jsx
import React, { useEffect, useState } from "react";
import AccordionItem from "@/Pages/Admin/Modul/AccordionItem";
import ProgressBar from "@/Components/ProgressBar";
import { ModulList } from "@/Data/Dummy";

const Kelas = () => {
  const [modul, setModul] = useState(() => {
    const saved = localStorage.getItem("progressModul");
    return saved ? JSON.parse(saved) : ModulList;
  });

  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleTandaiSelesai = (id) => {
    const updatedModul = modul.map((item) =>
      item.id === id ? { ...item, selesai: !item.selesai } : item
    );
    setModul(updatedModul);
    localStorage.setItem("progressModul", JSON.stringify(updatedModul));
  };

  const progress = Math.round(
    (modul.filter((item) => item.selesai).length / modul.length) * 100
  );
  useEffect(() => {
    const saved = localStorage.getItem("progressModul");
    if (saved) {
      setModul(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Modul Kelas</h2>
      <ProgressBar value={progress} className="mb-6" />
      {modul.map((modul) => (
        <AccordionItem
          key={modul.id}
          modul={modul}
          expanded={expanded === modul.id}
          onToggle={() => handleToggle(modul.id)}
          onSelesai={() => handleTandaiSelesai(modul.id)}
        />
      ))}
    </div>
  );
};

export default Kelas; // <-- ini wajib ada!
