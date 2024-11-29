import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import team from "../team-data/team.json";

const TeamDetail = () => {
  const { id } = useParams();

  const selectedTeam = team.find((member) => member.id == Number(id));

  return (
    <div>
      <h2 className="mb-5">Team Details</h2>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedTeam.id}</td>
            <td>{selectedTeam.name}</td>
            <td>{selectedTeam.email}</td>
            <td>{selectedTeam.role}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TeamDetail;
