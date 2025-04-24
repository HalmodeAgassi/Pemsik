import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <Outlet />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AuthLayout;
