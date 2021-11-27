import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppPanel } from "./components/AppPanel";
import { ReactInfo } from "./components/ReactInfo";
import { Container } from "@mui/material";
import { Outlet, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppPanel />
      <Container>
        <Outlet />
      </Container>
      <Routes>
        <Route path="/">
          <Route path="react-info" element={<ReactInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
