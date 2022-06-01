import React from "react";
import "./ListUser.css";

const ListUser = ({ user }) => {
  return (
    <div className="card">
      <p className="usertitle">{user.username}</p>
      <span className="title">Name: </span>
      <span className="value">{user.name}</span>
      <br />
      <span className="title">Email: </span>
      <span className="value">{user.email}</span>
      <br />
      <span className="title">Phone Number: </span>
      <span className="value">{user.phone}</span>
    </div>
  );
};

export default ListUser;
