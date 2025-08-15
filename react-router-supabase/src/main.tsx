import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "app/MainLayout";
import UserEdit from "app/UserEdit";
import Home from "app/Home";
import UserAdd from "app/UserAdd";
import UserDetail from "app/UserDetail";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/add" element={<UserAdd />}></Route>
          <Route path="/users/:id" element={<UserDetail />}></Route>
          <Route path="/users/:id/edit" element={<UserEdit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
