import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages";
import UserPage from "../pages/UserPager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
