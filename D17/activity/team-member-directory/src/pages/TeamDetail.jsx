import React from "react";
import { useParams } from "react-router-dom";
import { ListGroup, Table } from "react-bootstrap";
import team  from "../team-data/team.json";

const TeamDetail = () => {
  const { id } = useParams();

  const selectedTeam = team.find((member) => member.id == Number(id));

  console.log("selectedTeam", selectedTeam);
  console.log("id", id);


  return (
    <div>
      <h2>Team Details</h2>
      {/* <ListGroup>
        <ListGroup.Item>ID: {selectedTeam.id}</ListGroup.Item>
        <ListGroup.Item>Name: {selectedTeam.name}</ListGroup.Item>
        <ListGroup.Item>Email Address: {selectedTeam.email}</ListGroup.Item>
        <ListGroup.Item>Role: {selectedTeam.role}</ListGroup.Item>
      </ListGroup> */}

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
