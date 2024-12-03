import React, { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import { useNavigate } from "react-router-dom";

const Seminar = () => {
  const [seminars, setSeminars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    const fetchSeminar = async () => {
        setIsLoading(true);

      const response = await fetch("http://localhost:5000/api/seminars");

      console.log("response", response);

      const data = await response.json();

      setSeminars(data);
        setIsLoading(false);
    };

    fetchSeminar();
  }, []);

  console.log("seminars", seminars);
  console.log("isLoading", isLoading);

  const fields = ["Speaker", "Title", "Available Slot"];

  return (
    <div>
      <AppNavbar />
      <div className="px-10 py-10">
        <div className="navbar">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Seminars</h1>
          </div>
          <div className="flex-none">
            <button
              className="btn btn-info"
              onClick={() => navigate("/seminar/new")}
            >
              Add Seminar
            </button>
          </div>
        </div>
        <div className="overflow-x-auto mt-10">
          {isLoading ? (
            <div className="flex items-center justify-center h-[50vh]">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          ) : (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  {fields.map((field, index) => (
                    <th key={index}>{field}</th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {seminars.map((seminar) => (
                  <tr key={seminar._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {seminar.speaker.name}
                          </div>
                          {/* <div className="text-sm opacity-50">LinkedIn</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      {seminar.title}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {seminar.description}
                      </span>
                    </td>
                    <td>{seminar.slotsAvailable}</td>
                    <th>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => navigate(`/seminar/${seminar._id}`)}
                      >
                        details
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>

                  {fields.map((field, index) => (
                    <th key={index}>{field}</th>
                  ))}

                  <th></th>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Seminar;
