import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@/Components/Button";
import ModalTanya from "@/Pages/Admin/Modul/ModulTanya";

const AccordionItem = ({ modul, expanded, onToggle, onSelesai }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Accordion expanded={expanded} onChange={onToggle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3 className="font-semibold text-lg">{modul.judul}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className="mb-4">{modul.deskripsi}</p>
          <div className="flex gap-4">
            <Button
              className="bg-green-500 text-white"
              onClick={onSelesai}
              disabled={modul.selesai}
            >
              {modul.selesai ? "Sudah Selesai" : "Tandai Selesai"}
            </Button>
            <Button
              className="bg-blue-500 text-white"
              onClick={() => setShowModal(true)}
            >
              Tanya Dosen
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      {showModal && <ModalTanya onClose={() => setShowModal(false)} />}
    </>
  );
};

export default AccordionItem;
