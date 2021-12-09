import React from "react";
import "./App.css";
import { AppLayout } from "./components/AppLayout";
import { Transactions } from "./components/Transactions";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
