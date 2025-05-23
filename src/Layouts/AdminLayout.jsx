import React from "react";
import { Outlet } from "react-router-dom";
import Button from "@/Components/Button";
import { confirmLogout } from "@/Utils/Helper/SwalHelper";

const toggleProfileMenu = () => {
  const menu = document.getElementById("profileMenu");
  if (menu) menu.classList.toggle("hidden");
};

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex flex-col flex-1">
        <header className="bg-white shadow-md">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              Belajar Pintar
            </h1>
            <div className="relative">
              <Button
                onClick={toggleProfileMenu}
                className="w-8 h-8 rounded-full bg-gray-300 focus:outline-none"
              />
              <div
                id="profileMenu"
                className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 hidden"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <button
                  onClick={() => {
                    confirmLogout().then((result) => {
                      if (result.isConfirmed) {
                        localStorage.removeItem("user");
                        location.href = "/";
                      }
                    });
                  }}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
