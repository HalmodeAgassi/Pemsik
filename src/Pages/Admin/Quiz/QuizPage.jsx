import React, {useState, useEffect} from "react";
import swal from "sweetalert2";
import { quizzes } from "@/Utils/dummyData";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState([]);
  const [timer, setTimer] = useState(300);
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          swal.fire({
            title: "Waktu Habis",
            text: "Quiz telah berakhir.",
            icon: "info",
            confirmButtonText: "OK"
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (qid, option) => {
    setAnswers({...answers, [qid]: option})
  };

  const toggleMark = (qid) => {
    setMarked((prev) => 
        prev.includes(qid) ? prev.filter(id => id !== qid) : [...prev, qid]
    );
  };

  const handleSubmit = () => {
  Swal.fire({
    title: "Yakin submit?",
    text: "Jawaban akan disimpan!",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Submit",
  }).then((result) => {
    if (result.isConfirmed) {
      const result = calculateScore();
      setScore(result);
      setShowResult(true);
      Swal.fire("Selesai!", "Quiz berhasil dikumpulkan.", "success");
    }
  });

  const calculateScore = () => {
    let correct = 0;
    quizzes.forEach((quiz) => {
      if (answers[quiz.id] === quiz.answer) {
        correct++;
      }
    });

    return {
        total: quizzes.length,
        correct,
        incorrect: quizzes.length - correct,
        percentage: ((correct / quizzes.length) * 100),
    };
  };
};


  const currentQuiz = quizzes[current];

  return (
  <div className="p-6">
    {showResult ? (
      // 🔽 Tampilan hasil quiz
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-2">Hasil Quiz</h2>
        <p>Jawaban Benar: {score.correct}</p>
        <p>Jawaban Salah: {score.incorrect}</p>
        <p>Nilai Akhir: {score.percentage}%</p>

        {/* LineChart */}
        <h3 className="mt-4 mb-2 font-semibold">Grafik Nilai</h3>
        <LineChart width={400} height={200} data={[
          { name: "Benar", value: score.correct },
          { name: "Salah", value: score.incorrect },
        ]}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        {/* BarChart */}
        <h3 className="mt-4 mb-2 font-semibold">Distribusi Jawaban</h3>
        <BarChart width={400} height={200} data={[
          { name: "Benar", jumlah: score.correct },
          { name: "Salah", jumlah: score.incorrect },
        ]}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="jumlah" fill="#82ca9d" />
        </BarChart>

        <button
          onClick={() => navigate("/admin/dashboard")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Kembali ke Dashboard
        </button>
      </div>
    ) : (
      // 🔽 Tampilan saat mengerjakan quiz (yang kamu punya sekarang)
      <>
        <h2 className="text-xl font-bold mb-2">Quiz</h2>
        <p className="text-sm mb-2">
          Sisa waktu: {Math.floor(timer / 60)}:
          {String(timer % 60).padStart(2, "0")}
        </p>

        <div className="mb-4">
          <p className="font-semibold">{currentQuiz.question}</p>
          <ul className="mt-2 space-y-1">
            {currentQuiz.options.map((opt, idx) => (
              <li key={idx}>
                <label className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name={`quiz-${currentQuiz.id}`}
                    value={opt}
                    checked={answers[currentQuiz.id] === opt}
                    onChange={() => handleSelect(currentQuiz.id, opt)}
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Sebelumnya
          </button>
          <button
            onClick={() =>
              setCurrent((prev) => Math.min(prev + 1, quizzes.length - 1))
            }
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Berikutnya
          </button>
          <button
            onClick={() => toggleMark(currentQuiz.id)}
            className="bg-yellow-200 px-3 py-1 rounded"
          >
            {marked.includes(currentQuiz.id)
              ? "Batal Tandai"
              : "Tandai untuk Review"}
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </>
    )}
  </div>
);
};
export default QuizPage;
