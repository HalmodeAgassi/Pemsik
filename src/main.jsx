import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import AuthLayout from "@/Layouts/AuthLayout";
import AdminLayout from "@/Layouts/AdminLayout";
import ProtectedRoute from "@/Routes/ProtectedRoute";

import Login from "@/Pages/Auth/Login/Login";
import Dashboard from "@/Pages/Admin/Dashboard/Dashboard";
import Kelas from "@/Pages/Admin/Modul/Modul";

import QuizPage from "@/Pages/Admin/Quiz/QuizPage";
import ForumPage from "@/Pages/Admin/Forum/ForumPage";
import AchievementPage from "@/Pages/Admin/Pencapaian/AchievementPage";
import InstructorDashboard from "@/Pages/Admin/Instruktur/InstructorDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "kelas",
        element: <Kelas />,
      },
      {
        path: "quiz",
        element: <QuizPage />,
      },
      {
        path: "forum",
        element: <ForumPage />,
      },
      {
        path: "pencapaian",
        element: <AchievementPage />,
      },
      {
        path: "instruktur",
        element: <InstructorDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
