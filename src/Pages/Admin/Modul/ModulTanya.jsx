import React, { useState } from "react";
import { showSuccessToast } from "@/Utils/Helper/ToastHelper";

const ModalTanya = ({ onClose }) => {
  const [pertanyaan, setPertanyaan] = useState("");

  const handleKirim = () => {
    showSuccessToast("Pertanyaan berhasil dikirim");
    setPertanyaan("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h3 className="text-lg font-semibold mb-4">Tanya Dosen</h3>
        <textarea
          value={pertanyaan}
          onChange={(e) => setPertanyaan(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Tulis pertanyaanmu..."
        />
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleKirim}
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTanya;
