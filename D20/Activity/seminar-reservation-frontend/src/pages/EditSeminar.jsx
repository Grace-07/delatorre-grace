import React from "react";
import { useNavigate } from "react-router-dom";
import SeminarForm from "../components/SeminarForm";
import AppNavbar from "../components/AppNavbar";

const EditSeminar = () => {
  const navigate = useNavigate(); // useNavigate hook

  return (
    <div>
      <AppNavbar />
      <div className="px-10 py-10">
        <h1 className="text-3xl font-bold mb-5"> Edit Seminar</h1>
        <SeminarForm
          handleCancel={() => navigate("/seminar")}
          handleSubmit={() => navigate("/seminar")}
        />
      </div>
    </div>
  );
};

export default EditSeminar;
