import React from "react";
import Input from "@/Components/Input";
import Form from "@/Components/Form";
import Button from "@/Components/Button";
import Card from "@/Components/Card";
import Heading from "@/Components/Heading";
import { showSuccessToast, showErrorToast } from "@/Utils/Helper/ToastHelper";

import { DummyUser } from "@/Data/Dummy";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === DummyUser.email && password === DummyUser.password) {
      localStorage.setItem("user", JSON.stringify(DummyUser));
      showSuccessToast("Login Berhasil");

      setTimeout(() => {
        window.location.href = "/admin/dashboard";
      }, 1000);
    } else {
      showErrorToast("Email atau password salah!");
    }
  };
  return (
    <Card>
      <Heading as="h2">Login</Heading>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Masukkan email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            placeholder="Masukkan password"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">Ingat saya</span>
          </label>
          <a href="#" className="text-sm">
            Lupa password?
          </a>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </Form>
      <p className="text-sm text-center text-gray-600 mt-4">
        Belum punya akun? <a href="#">Daftar</a>
      </p>
    </Card>
  );
};

export default Login;
