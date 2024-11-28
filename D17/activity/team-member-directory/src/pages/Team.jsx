import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import team from "../team-data/team.json";

const Team = () => {
  const navigate = useNavigate(); // useNavigate hook
  //   const history = useHistory();

  console.log(team);

  return (
    <div className="container text-center">
      <h1>Our Team</h1>
      <br />
      {team && team.length ? (
        team.map((member) => (
          <h4
            className=""
            key={member.id}
            onClick={() => navigate(`/team/${member.id}`)}
          >
            {member.name}
          </h4>
        ))
      ) : (
        <h2>No Team Found</h2>
      )}
      <br />
      <Outlet />
    </div>
  );
};

export default Team;
