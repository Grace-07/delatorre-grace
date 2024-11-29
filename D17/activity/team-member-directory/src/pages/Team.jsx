import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import team from "../team-data/team.json";
import { ListGroup } from "react-bootstrap";

const Team = () => {
  const navigate = useNavigate(); // useNavigate hook

  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  console.log(team);

  useEffect(() => {
    const updatedTeam = team.map((member) => {
      return {
        ...member,
        active: false,
      };
    });

    setTeamList(updatedTeam);
  }, []);

  useEffect(() => {
    const updatedTeam = team.map((member) => {
      if (selectedTeam && selectedTeam.id === member.id) {
        return {
          ...member,
          active: true,
        };
      }
      return {
        ...member,
        active: false,
      };
    });

    setTeamList(updatedTeam);
  }, [selectedTeam]);

  const TeamList =
    teamList && teamList.length ? (
      teamList.map((member) => (
        <ListGroup.Item
          key={member.id}
          active={member.active}
          onClick={() => {
            setSelectedTeam(member);

            navigate(`/team/${member.id}`);
          }}
          action
        >
          {member.name}
        </ListGroup.Item>
      ))
    ) : (
      <h2>No Team Found</h2>
    );

  return (
    <div className="container my-5 text-center">
      <h1>Our Team</h1>
      <p>
        Meet our team of dedicated professionals, working together to drive
        innovation and deliver exceptional results.
      </p>

      <ListGroup className="mt-5 mb-5">{TeamList}</ListGroup>
      <Outlet />
    </div>
  );
};

export default Team;
