import React from "react";
import { students, contents } from "@/Utils/dummyData";

const InstructorDashboard = () => {
  const avgScore = Math.round(
    students.reduce((sum, s) => sum + s.score, 0) / students.length
  );

  const avgProgress = Math.round(
    students.reduce((sum, s) => sum + s.progress, 0) / students.length
  );

  const struggling = students.filter((s) => s.progress < 50);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📈 Dashboard Instruktur</h2>

      {/* Analitik Kelas */}
      <div className="mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">Rata-rata Nilai Kelas</h3>
          <p className="text-2xl">{avgScore}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">Rata-rata Progress Modul</h3>
          <p className="text-2xl">{avgProgress}%</p>
        </div>
      </div>

      {/* Mahasiswa Kesulitan */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">🚩 Mahasiswa Kesulitan</h3>
        {struggling.length === 0 ? (
          <p className="text-sm text-gray-500">Tidak ada yang kesulitan.</p>
        ) : (
          <ul className="list-disc ml-6 text-sm">
            {struggling.map((s) => (
              <li key={s.name}>{s.name} - Progress: {s.progress}%</li>
            ))}
          </ul>
        )}
      </div>

      {/* Konten Analytics (UI Saja) */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">🎥 Konten Paling & Kurang Engaging</h3>
        <ul className="list-disc ml-6 text-sm">
          {contents.map((c) => (
            <li key={c.title}>
              {c.title} - Dilihat: {c.views}x
            </li>
          ))}
        </ul>
      </div>

      {/* Upload Media (UI Saja) */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">📤 Upload Konten</h3>
        <input type="file" className="border p-2 rounded w-full" />
      </div>

      {/* Feedback (UI Saja) */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">📝 Kumpulkan Feedback Mahasiswa</h3>
        <textarea
          className="border p-2 rounded w-full"
          placeholder="Tulis pertanyaan feedback..."
        ></textarea>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          Kirim
        </button>
      </div>

      <button
        onClick={() => window.location.href = "/admin/dashboard"}
        className="mt-4 bg-gray-300 px-4 py-2 rounded"
      >
        ← Kembali ke Dashboard
      </button>
    </div>
  );
};

export default InstructorDashboard;
