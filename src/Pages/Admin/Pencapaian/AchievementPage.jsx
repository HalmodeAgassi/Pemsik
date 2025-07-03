import React from "react";
import {achievements} from "@/Utils/dummyData";

const AchievementPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏆 Pencapaian Saya</h2>

      <div className="grid gap-4">
        {achievements.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow bg-white">
            <h3 className="text-lg font-semibold">
              {item.title}{" "}
              <span
                className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  item.rarity === "Rare"
                    ? "bg-purple-200 text-purple-800"
                    : item.rarity === "Uncommon"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {item.rarity}
              </span>
            </h3>
            <p className="text-sm text-gray-700">{item.description}</p>

            {/* Progress Bar */}
            <div className="mt-2 bg-gray-200 rounded h-4">
              <div
                className="h-4 bg-green-500 rounded"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
            <p className="text-right text-xs mt-1 text-gray-500">
              {item.progress}%
            </p>
          </div>
        ))}
      </div>

      {/* Optional: Visualisasi Learning Path */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-2">🎓 Jalur Belajar (Learning Path)</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700">
          <li>Mulai dari modul dasar (HTML, CSS, React)</li>
          <li>Lanjut ke kategori lanjutan seperti State Management</li>
          <li>Ikuti Quiz mingguan</li>
          <li>Selesaikan semua pencapaian untuk dapat badge akhir 🎖️</li>
        </ul>
      </div>
    </div>
  );
};

export default AchievementPage;
