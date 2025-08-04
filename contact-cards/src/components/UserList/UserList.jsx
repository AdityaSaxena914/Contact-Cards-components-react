import React from "react";
import UserCard from "../UserCard/UserCard";
import "./UserList.css"

const UserList = ({ users }) => {
  return (
    <div className="list">
      <h3>User List</h3>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserList;
