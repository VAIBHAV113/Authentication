import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
