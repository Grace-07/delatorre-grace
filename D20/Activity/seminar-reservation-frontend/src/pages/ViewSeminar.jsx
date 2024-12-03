import React from "react";
import { useNavigate } from "react-router-dom";
import SeminarDetail from "../components/SeminarDetail";

const ViewSeminar = () => {
  const navigate = useNavigate(); // useNavigate hook

  return (
    <div className="px-10 py-10">
      <h1 className="text-3xl font-bold mb-5">Seminar Details</h1>
      <SeminarDetail handleCancel={() => navigate("/seminar")} handleEdit={() => navigate("/seminar/1324/edit")} />
    </div>
  );
};

export default ViewSeminar;
