import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Seminar from "./pages/Seminar";
import AddSeminar from "./pages/AddSeminar";
import ViewSeminar from "./pages/ViewSeminar";
import EditSeminar from "./pages/EditSeminar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/seminar/new" element={<AddSeminar />} />
          <Route path="/seminar/:id" element={<ViewSeminar />} />
          <Route path="/seminar/:id/edit" element={<EditSeminar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
